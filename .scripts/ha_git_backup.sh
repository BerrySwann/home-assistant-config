#!/usr/bin/env bash
set -euo pipefail
# "[L1] shebang + options sûres"

LOG_DIR="/config/.logs"
mkdir -p "$LOG_DIR"  # "[L5] création du dossier logs"

cd /config
git config user.name  "BerrySwann (HAOS)"     # "[L8] config user.name"
git config user.email "BerrySwann@users.noreply.github.com"  # "[L9] config user.email"

# Utilisation de la clé SSH de HAOS pour GitHub (pas d'interaction)
export GIT_SSH_COMMAND='ssh -i /config/.ssh/id_ed25519 -o StrictHostKeyChecking=no'
# "[L12] GIT_SSH_COMMAND pour environnement HA automations"

# Sécurité : on refuse tout commit si secrets.yaml est tracké
if git ls-files --error-unmatch secrets.yaml >/dev/null 2>&1; then
  echo "❌ secrets.yaml est tracké par git — abandon" | tee -a "$LOG_DIR/ha_git_backup.log"
  exit 1
fi
# "[L17] garde-fou secrets.yaml"

# Détermine la branche par défaut (main/master) et configure l'upstream si manquant
BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo main)"
if ! git rev-parse --abbrev-ref --symbolic-full-name "@{u}" >/dev/null 2>&1; then
  git branch -u "origin/${BRANCH}" || true
fi
# "[L24] détection branche + upstream"

# Liste des fichiers pris en compte : .yaml/.yml/.md ajoutés/modifiés/non suivis
CHANGED="$( { git diff --name-only; git ls-files -o --exclude-standard; } \
  | grep -E '\.(ya?ml|md)$' | sort -u || true )"
# "[L29] calcul CHANGED (yaml/yml/md)"

# Si rien n'a changé côté YAML/MD, on vérifie tout de même l'état (ex.: renommage)
if [ -z "$CHANGED" ]; then
  STATUS_LINES="$(git status --porcelain || true)"
  [ -z "$STATUS_LINES" ] && { echo "ℹ️  Aucun changement" >> "$LOG_DIR/ha_git_backup.log"; exit 0; }
fi
# "[L34] fallback sur status --porcelain"

# Message de commit (weekly si param $1 == weekly)
MSG="HAOS auto-backup: $(date '+%Y-%m-%d %H:%M:%S %Z')"
[ "${1:-}" = "weekly" ] && MSG="HAOS weekly backup: $(date '+%Y-%m-%d %H:%M:%S %Z')"
# "[L39] message de commit (weekly)"

# Commit + push (branche par défaut)
git add -A
git commit -m "$MSG" || { echo "ℹ️  Rien à committer" >> "$LOG_DIR/ha_git_backup.log"; exit 0; }
# "[L44] add + commit"

# On tente main puis master (selon ton repo)
git push origin "$BRANCH" || git push origin main || git push origin master
# "[L47] push tolérant main/master"

# Tag hebdo si demandé
if [ "${1:-}" = "weekly" ]; then
  TAG="weekly-$(date +'%Y-%m-%d')"
  if ! git rev-parse -q --verify "refs/tags/${TAG}" >/dev/null; then
    git tag -a "$TAG" -m "Weekly backup"
    git push origin --tags
  fi
fi
# "[L54] tag weekly + push des tags"

# Log succès + (option) notification HA si token dispo
echo "✅ Backup GitHub OK: $MSG" >> "$LOG_DIR/ha_git_backup.log"
# "[L58] log succès"

TOKEN_FILE="/config/.secrets/ha_token"
if [ -f "$TOKEN_FILE" ]; then
  TOKEN="$(cat "$TOKEN_FILE")"
  curl -s -X POST \
    -H "Authorization: Bearer ${TOKEN}" \
    -H "Content-Type: application/json" \
    -d '{"title":"Backup GitHub","message":"'"$MSG"'"}' \
    http://supervisor/core/api/services/persistent_notification/create >/dev/null || true
fi
# "[L66] notification HA (optionnelle)"
