#!/usr/bin/env bash
set -euo pipefail
# "[L1] shebang + strict mode"

LOG_DIR="/config/.logs"
mkdir -p "$LOG_DIR"  # "[L5] création dossier logs"
LOG_FILE="/ha_git_backup.log"
[ -f "" ] && tail -n 1000 "" > ".tmp" && mv ".tmp" ""
# [L7] rotation simple du log (1000 lignes)

cd /config
git config user.name  "Eric Rodi (HAOS)"     # "[L8] user.name"
git config user.email "erodi@users.noreply.github.com"  # "[L9] user.email"

# Utilise la clé SSH locale si elle existe, sinon laisse SSH par défaut
if [[ -f /config/.ssh/id_ed25519 ]]; then
  export GIT_SSH_COMMAND='ssh -i /config/.ssh/id_ed25519 -o StrictHostKeyChecking=no'
  echo "ℹ️ GIT_SSH_COMMAND activé (clé /config/.ssh/id_ed25519)" >> "$LOG_DIR/ha_git_backup.log"
else
  echo "ℹ️ Pas de /config/.ssh/id_ed25519, on utilise la config SSH par défaut" >> "$LOG_DIR/ha_git_backup.log"
fi
# "[L13] SSH conditionnel"

# Sécurité : ne jamais committer secrets.yaml
if git ls-files --error-unmatch secrets.yaml >/dev/null 2>&1; then
  echo "❌ secrets.yaml est tracké par git — ABANDON" | tee -a "$LOG_DIR/ha_git_backup.log"
  exit 1
fi
# "[L20] garde-fou secrets.yaml"

# Branche courante & upstream (tu es déjà en 'main')
BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo main)"
if ! git rev-parse --abbrev-ref --symbolic-full-name "@{u}" >/dev/null 2>&1; then
  git branch -u "origin/${BRANCH}" || true
fi
# "[L26] branche + upstream"

# Fichiers YAML/MD modifiés ou non suivis
CHANGED="$( { git diff --name-only; git ls-files -o --exclude-standard; } \
  | grep -E '\.(ya?ml|md)$' | sort -u || true )"
# "[L31] filtre CHANGED"

# Si rien détecté via le filtre, vérifie tout de même l'état
if [[ -z "$CHANGED" ]]; then
  STATUS_LINES="$(git status --porcelain || true)"
  [[ -z "$STATUS_LINES" ]] && { echo "ℹ️  Aucun changement" >> "$LOG_DIR/ha_git_backup.log"; exit 0; }
fi
# "[L36] fallback status"

# Message (weekly si demandé) + version HA si dispo
MSG="HAOS auto-backup: $(date '+%Y-%m-%d %H:%M:%S %Z')"
[[ "${1:-}" == "weekly" ]] && MSG="HAOS weekly backup: $(date '+%Y-%m-%d %H:%M:%S %Z')"
HA_VER=""
[[ -f /config/.HA_VERSION ]] && HA_VER="$(cat /config/.HA_VERSION 2>/dev/null)"
MSG="${MSG}${HA_VER:+ (HA ${HA_VER})}"
# "[L430] commit message + version HA"

git add -A
git commit -m "$MSG" || { echo "ℹ️  Rien à committer" >> "$LOG_DIR/ha_git_backup.log"; exit 0; }
# "[L45] commit"

# Push tolérant (main prioritaire)
git push origin "$BRANCH" || git push origin main || git push origin master
# "[L48] push"

# Tag hebdo (amélioré) si weekly : ISO week + anti-collision + version HA dans le message
if [[ "${1:-}" == "weekly" ]]; then
  TAG_BASE="weekly-$(date +'%G-W%V')"   # ex: weekly-2025-W36 (ISO week)
  TAG="$TAG_BASE"
  if git rev-parse -q --verify "refs/tags/${TAG}" >/dev/null; then
    TAG="${TAG_BASE}-$(date +'%H%M')"   # évite collision si plusieurs weekly le même jour
  fi
  git tag -a "$TAG" -m "Weekly backup $(date +'%F')${HA_VER:+ (HA ${HA_VER})}"
  git push origin --tags
  echo "🏷️  Tag créé: $TAG" >> "$LOG_DIR/ha_git_backup.log"
fi
# "[L520] weekly tag ISO week + HA version (collision-safe)"

echo "✅ Backup GitHub OK: $MSG" >> "$LOG_DIR/ha_git_backup.log"
# "[L59] log succès"

# (Option) Notif HA si token présent (/config/.secrets/ha_token)
TOKEN_FILE="/config/.secrets/ha_token"
if [[ -f "$TOKEN_FILE" ]]; then
  TOKEN="$(cat "$TOKEN_FILE")"
  curl -s -X POST \
    -H "Authorization: Bearer ${TOKEN}" \
    -H "Content-Type: application/json" \
    -d '{"title":"Backup GitHub","message":"'"$MSG"'"}' \
    http://supervisor/core/api/services/persistent_notification/create >/dev/null || true
fi
# "[L66] notif HA optionnelle"
