#!/usr/bin/env bash
# Crawl first (discover URLs + site tree), then save all. Everything goes under the Cargo volume.
# Usage: ./scripts/crawl-then-save.sh [base-dir]
#   base-dir defaults to /Volumes/Cargo/models.com (run dir: base-dir/YYYY-MM-DD/)
set -e
cd "$(dirname "$0")/.."
OUT_DATE=$(date +%Y-%m-%d)
BASE_DIR="${1:-/Volumes/Cargo/models.com}"
RUN_DIR="${BASE_DIR}/${OUT_DATE}"
mkdir -p "$RUN_DIR"
LOG_FILE="${RUN_DIR}/crawl_then_save.log"

export OUT_BASE="$BASE_DIR"
export OUT_DATE="$OUT_DATE"

exec >> "$LOG_FILE" 2>&1
echo "=== Started $(date) ==="
echo "Run directory (all output): $RUN_DIR"
echo ""

echo ">>> Phase 1: Crawl (discovering URLs, writing url_list.txt + site-tree.json + site-tree.txt, headed browser)..."
HEADED=1 node scripts/crawl.js 2500
echo ""
echo ">>> Phase 2: Save all to $RUN_DIR (16 workers: 2 browsers × 8 tabs)..."
node scripts/save-inpage.js "${RUN_DIR}/url_list.txt" --out-dir "$RUN_DIR" --browsers 2 --tabs 8
echo ""
echo "=== Finished $(date) ==="
