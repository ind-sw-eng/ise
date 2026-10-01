#!/usr/bin/env bash
# Compile the Tailwind stylesheet.
#
# assets/css/tailwind.css is committed as COMPILED css, because GitHub Pages is
# currently building this repository with its built-in Jekyll, which refuses
# custom plugins - so jekyll-tailwindcss does not run and cannot compile it for
# us. Edit _tailwind/input.css, run this script, and commit both files.
#
# Needs the Tailwind CLI. Either `npx tailwindcss`, or the standalone binary
# from https://github.com/tailwindlabs/tailwindcss/releases (v3.x).
set -euo pipefail
cd "$(dirname "$0")/.."

TAILWIND="${TAILWIND:-}"
if [[ -z "$TAILWIND" ]]; then
  if command -v tailwindcss >/dev/null 2>&1; then TAILWIND="tailwindcss"
  elif command -v npx >/dev/null 2>&1; then TAILWIND="npx tailwindcss@3"
  else echo "No Tailwind CLI found. Set TAILWIND=/path/to/tailwindcss" >&2; exit 1
  fi
fi

$TAILWIND -c tailwind.config.js -i _tailwind/input.css -o assets/css/tailwind.css --minify
echo "Wrote assets/css/tailwind.css ($(wc -c < assets/css/tailwind.css) bytes)"
