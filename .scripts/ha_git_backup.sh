#!/bin/bash
set -euo pipefail

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ CONFIGURATION & LOGGING                                                  │
# ╰──────────────────────────────────────────────────────────────────────────╯
LOG_DIR="/config/.logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/ha_git_backup.log"

# Rotation simple : on garde les 1000 dernières lignes
if [[ -f "$LOG_FILE" ]]; then
    tail -n 1000 "$LOG_FILE" > "${LOG_FILE}.tmp" && mv "${LOG_FILE}.tmp" "$LOG_FILE"
fi

# Fonction de log (écrit dans le fichier et reste silencieux en console pour HA)
log() { printf '%s %s\n' "$(date '+%F %T %Z')" "$*" >> "$LOG_FILE"; }

cd /config || { echo "❌ /config introuvable"; exit 1; }

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ GARDE-FOUS GIT                                                           │
# ╰──────────────────────────────────────────────────────────────────────────╯
CUR_BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo main)"
if [[ "$CUR_BRANCH" == "master" ]]; then
    log "❌ Sur la branche master — ABANDON (protégée)"
    exit 1
fi

# Sécurité pour les répertoires distants (utile sur x86)
git config --global --add safe.directory /config || true

# Config utilisateur par défaut
git config user.name  >/dev/null 2>&1 || git config user.name  "Eric Rodi (HAOS)"
git config user.email >/dev/null 2>&1 || git config user.email "erodi@users.noreply.github.com"

# Gestion de la clé SSH si elle existe
if [[ -f /config/.ssh/id_ed25519 ]]; then
    export GIT_SSH_COMMAND='ssh -i /config/.ssh/id_ed25519 -o StrictHostKeyChecking=no'
    log "ℹ️  GIT_SSH_COMMAND activé (/config/.ssh/id_ed25519)"
fi

# Sécurité critique : on ne push JAMAIS les secrets
if git ls-files --error-unmatch secrets.yaml >/dev/null 2>&1; then
    log "❌ secrets.yaml est tracké par git — ABANDON POUR SÉCURITÉ"
    exit 1
fi

git remote get-url origin >/dev/null 2>&1 || { log "❌ Remote 'origin' absent"; exit 1; }
BRANCH="$CUR_BRANCH"

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ SYNCHRONISATION PRÉALABLE (PULL)                                         │
# ╰──────────────────────────────────────────────────────────────────────────╯
log "🔄 Synchronisation distante..."
git fetch origin -q || true

# On tente un pull propre avec autostash pour ne pas perdre les modifs en cours
if ! git pull --rebase --autostash origin "$BRANCH" -q; then
    log "⚠️  Pull complexe détecté, tentative de résolution automatique..."
    git stash push --include-untracked -m "ha-backup-autostash" >/dev/null 2>&1 || true
    git pull --rebase origin "$BRANCH" -q || log "⚠️  Conflit persistant, commit local prioritaire"
    git stash pop >/dev/null 2>&1 || true
fi

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ PRÉPARATION DU MESSAGE & VERSION                                         │
# ╰──────────────────────────────────────────────────────────────────────────╯
INPUT_ARG="${1:-}"
HA_VER=""
if command -v ha >/dev/null 2>&1; then
    HA_VER="$(ha core info 2>/dev/null | sed -n 's/.*"version": *"\([^"]*\)".*/\1/p' | head -n1 || true)"
elif [[ -f /config/.HA_VERSION ]]; then
    HA_VER="$(cat /config/.HA_VERSION 2>/dev/null || true)"
fi

IS_WEEKLY="false"
if [[ "$INPUT_ARG" == "weekly" ]]; then
    MSG="HAOS weekly backup: $(date '+%Y-%m-%d %H:%M:%S')${HA_VER:+ (HA ${HA_VER})}"
    IS_WEEKLY="true"
elif [[ -n "$INPUT_ARG" ]]; then
    MSG="$INPUT_ARG"
else
    MSG="HAOS auto-backup: $(date '+%Y-%m-%d %H:%M:%S')${HA_VER:+ (HA ${HA_VER})}"
fi

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ COMMIT & PUSH                                                            │
# ╰──────────────────────────────────────────────────────────────────────────╯
git add -A
if git commit -m "$MSG" >/dev/null 2>&1; then
    log "📝 Commit créé : $MSG"
    if git push origin "$BRANCH" -q; then
        log "✅ Push réussi sur $BRANCH"
    else
        log "⚠️  Echec push sur $BRANCH, tentative sur main..."
        git push origin main -q || log "❌ Push impossible"
    fi
else
    log "✅ État déjà à jour (rien à committer)"
fi

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ GESTION DU TAG WEEKLY                                                    │
# ╰──────────────────────────────────────────────────────────────────────────╯
if [[ "$IS_WEEKLY" == "true" ]]; then
    git fetch --tags -q
    TAG_BASE="weekly-$(date +'%G-W%V')"
    TAG="$TAG_BASE"

    # Gestion des doublons de tags le même jour
    if git rev-parse -q --verify "refs/tags/${TAG}" >/dev/null; then
        TAG="${TAG_BASE}-$(date +'%H%M')"
    fi

    if git tag -a "$TAG" -m "Weekly backup $(date +'%F')${HA_VER:+ (HA ${HA_VER})}"; then
        git push origin "$TAG" -q && log "🏷️  Tag créé et poussé : $TAG"
    fi
fi

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ NOTIFICATION HOME ASSISTANT                                              │
# ╰──────────────────────────────────────────────────────────────────────────╯
TOKEN_FILE="/config/.secrets/ha_token"
if [[ -f "$TOKEN_FILE" ]]; then
    TOKEN="$(cat "$TOKEN_FILE")"
    curl -s -X POST \
        -H "Authorization: Bearer ${TOKEN}" \
        -H "Content-Type: application/json" \
        -d "{\"title\":\"Backup GitHub\",\"message\":\"$MSG\"}" \
        http://supervisor/core/api/services/persistent_notification/create >/dev/null || true
fi