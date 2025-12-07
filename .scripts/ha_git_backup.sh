#!/usr/bin/env bash
set -euo pipefail

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ Config & logging                                                         │
# ╰──────────────────────────────────────────────────────────────────────────╯
LOG_DIR="/config/.logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/ha_git_backup.log"

if [[ -f "$LOG_FILE" ]]; then
  tail -n 1000 "$LOG_FILE" > "${LOG_FILE}.tmp" && mv "${LOG_FILE}.tmp" "$LOG_FILE"
fi

log() { printf '%s %s\n' "$(date '+%F %T %Z')" "$*" | tee -a "$LOG_FILE" >/dev/null; }

cd /config || { echo "❌ /config introuvable"; exit 1; }

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ Garde-fous Git                                                           │
# ╰──────────────────────────────────────────────────────────────────────────╯
CUR_BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo main)"
if [[ "$CUR_BRANCH" == "master" ]]; then
  log "❌ Sur la branche master — ABANDON (protégée)"
  exit 1
fi

git config --global --add safe.directory /config || true

git config user.name  >/dev/null 2>&1 || git config user.name  "Eric Rodi (HAOS)"
git config user.email >/dev/null 2>&1 || git config user.email "erodi@users.noreply.github.com"

if [[ -f /config/.ssh/id_ed25519 ]]; then
  export GIT_SSH_COMMAND='ssh -i /config/.ssh/id_ed25519 -o StrictHostKeyChecking=no'
  log "ℹ️  GIT_SSH_COMMAND activé (/config/.ssh/id_ed25519)"
else
  log "ℹ️  Pas de /config/.ssh/id_ed25519, SSH par défaut"
fi

if git ls-files --error-unmatch secrets.yaml >/dev/null 2>&1; then
  log "❌ secrets.yaml est tracké par git — ABANDON"
  exit 1
fi

git remote get-url origin >/dev/null 2>&1 || { log "❌ Remote 'origin' absent"; exit 1; }
BRANCH="$CUR_BRANCH"
git rev-parse --abbrev-ref --symbolic-full-name "@{u}" >/dev/null 2>&1 || git branch -u "origin/${BRANCH}" || true

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ Pré-pull sûr : rebase + autostash                                        │
# ╰──────────────────────────────────────────────────────────────────────────╯
git fetch origin || true

git config pull.rebase true || true
git config rebase.autoStash true || true

if ! git pull --rebase --autostash origin "$BRANCH"; then
  log "⚠️  pull --rebase --autostash a échoué, fallback stash manuel"
  STASHED=0
  if ! git diff --quiet || [[ -n "$(git ls-files -o --exclude-standard)" ]]; then
    git stash push --include-untracked -m "ha-backup-autostash" && STASHED=1
    log "ℹ️  Changements stashés temporairement"
  fi
  if git pull --rebase origin "$BRANCH"; then
    log "✅ pull --rebase OK (fallback)"
  else
    log "⚠️  pull --rebase échoué (on continue avec commit local)"
  fi
  [[ "$STASHED" -eq 1 ]] && { git stash pop || true; log "ℹ️  Stash réappliqué"; }
fi

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ Détection des changements (MODIFIÉ)                                      │
# ╰──────────────────────────────────────────────────────────────────────────╯
# Le bloc est modifié pour NE PAS avoir de 'exit 0' prématuré
CHANGED="$( { git diff --name-only; git ls-files -o --exclude-standard; } \
  | grep -E '\.(ya?ml|md)$' | sort -u || true )"

if [[ -z "$CHANGED" ]]; then
  STATUS_LINES="$(git status --porcelain || true)"
  if [[ -z "$STATUS_LINES" ]]; then
    # On log l'information, mais on ne sort plus d'ici. Le script continue vers le bloc Commit
    log "ℹ️  Aucun changement après pré-pull — PUSH MANUEL CONTINUE VERS LA CONFIRMATION."
  fi
fi

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ Message de commit (MODIFIÉ POUR ACCEPTER TEXTE PERSO)                    │
# ╰──────────────────────────────────────────────────────────────────────────╯
INPUT_ARG="${1:-}"

HA_VER=""
if command -v ha >/dev/null 2>&1; then
  HA_VER="$(ha core info 2>/dev/null | sed -n 's/.*"version": *"\([^"]*\)".*/\1/p' | head -n1 || true)"
elif [[ -f /config/.HA_VERSION ]]; then
  HA_VER="$(cat /config/.HA_VERSION 2>/dev/null || true)"
fi

if [[ "$INPUT_ARG" == "weekly" ]]; then
  MSG="HAOS weekly backup: $(date '+%Y-%m-%d %H:%M:%S %Z')${HA_VER:+ (HA ${HA_VER})}"
  IS_WEEKLY="true"
elif [[ -n "$INPUT_ARG" ]]; then
  MSG="$INPUT_ARG"
  IS_WEEKLY="false"
else
  MSG="HAOS auto-backup: $(date '+%Y-%m-%d %H:%M:%S %Z')${HA_VER:+ (HA ${HA_VER})}"
  IS_WEEKLY="false"
fi

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ Commit & push (CORRIGÉ POUR ÉCRIRE LE LOG DE SUCCÈS SI RIEN À FAIRE)     │
# ╰──────────────────────────────────────────────────────────────────────────╯
git add -A
if git commit -m "$MSG"; then
  log "📝 Commit: $MSG"
  
  if ! git push origin "$BRANCH"; then
    log "⚠️  Push sur '$BRANCH' a échoué, tentative sur 'main'"
    git push origin main
  fi
  
  log "✅ Backup GitHub OK: $MSG"
  
else
  # SI le commit échoue (parce qu'il n'y a rien à committer)
  # On écrit un message de confirmation clair puis on sort (exit 0)
  log "✅ Backup GitHub OK: [AUCUN CHANGEMENT] L'état était déjà à 
  ."
  exit 0
fi

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ Tag hebdomadaire (optionnel)                                             │
# ╰──────────────────────────────────────────────────────────────────────────╯
if [[ "$IS_WEEKLY" == "true" ]]; then
  TAG_BASE="weekly-$(date +'%G-W%V')"
  TAG="$TAG_BASE"
  if git rev-parse -q --verify "refs/tags/${TAG}" >/dev/null; then
    TAG="${TAG_BASE}-$(date +'%H%M')"
  fi
  git tag -a "$TAG" -m "Weekly backup $(date +'%F')${HA_VER:+ (HA ${HA_VER})}"
  git push origin --tags
  log "🏷️  Tag créé: $TAG"
fi

# Note : Le log final ici est supprimé, car il est désormais géré dans les blocs if/else
# pour garantir qu'il soit atteint.

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ Notification HA (optionnelle)                                            │
# ╰──────────────────────────────────────────────────────────────────────────╯
TOKEN_FILE="/config/.secrets/ha_token"
if [[ -f "$TOKEN_FILE" ]]; then
  TOKEN="$(cat "$TOKEN_FILE")"
  curl -s -X POST \
    -H "Authorization: Bearer ${TOKEN}" \
    -H "Content-Type: application/json" \
    -d '{"title":"Backup GitHub","message":"'"$MSG"'"}' \
    http://supervisor/core/api/services/persistent_notification/create >/dev/null || true
fi