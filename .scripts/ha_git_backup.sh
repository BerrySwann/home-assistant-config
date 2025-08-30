#!/usr/bin/env bash
set -euo pipefail
cd /config
git config user.name  "Eric Rodi (HAOS)"
git config user.email "erodi@users.noreply.github.com"

# Fichiers pris en compte : .yaml/.yml/.md (modifiés ou non suivis)
CHANGED="$( { git diff --name-only; git ls-files -o --exclude-standard; } \
  | grep -E '\.(ya?ml|md)$' | sort -u || true )"
[ -z "$CHANGED" ] && exit 0

MSG="HAOS auto-backup: $(date '+%Y-%m-%d %H:%M:%S %Z')"
[ "${1:-}" = "weekly" ] && MSG="HAOS weekly backup: $(date '+%Y-%m-%d %H:%M:%S %Z')"

git add -A
git commit -m "$MSG"
git push origin HEAD
