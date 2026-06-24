#!/usr/bin/env bash
# Create today's output dir and copy seed URL list into it.
# models.com is behind Cloudflare; for a real sitemap use npm run crawl or crawl-tree.
set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(dirname "$SCRIPT_DIR")"
DATE="$(date +%Y-%m-%d)"
OUT_DIR="$ROOT/output/$DATE"
mkdir -p "$OUT_DIR"
SEED="$(dirname "$ROOT")/../../models_urls.txt"
if [ -f "$SEED" ]; then
  cp "$SEED" "$OUT_DIR/seed_urls.txt"
  echo "Copied seed list to $OUT_DIR/seed_urls.txt ($(wc -l < "$OUT_DIR/seed_urls.txt") URLs)"
else
  echo "No $SEED found. Create models_urls.txt at repo root or run crawl first."
fi
