#!/usr/bin/env bash
set -euo pipefail
cd /config

# Identité (au cas où)
git config user.name  "Eric Rodi (HAOS)"
git config user.email "erodi@users.noreply.github.com"

# Rien à faire s'il n'y a pas de changement
CHANGES="$(git status --porcelain || true)"
[ -z "$CHANGES" ] && exit 0

# Commit + push
git add -A
git commit -m "HAOS auto-backup: $(date '+%Y-%m-%d %H:%M:%S %Z')"
git push origin HEAD
