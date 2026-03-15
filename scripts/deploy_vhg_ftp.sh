#!/usr/bin/env bash
set -euo pipefail

# Deploy static VHG site files via FTP/FTPS using curl.
# Usage:
#   FTP_HOST=ftp.vhg.dk bash scripts/deploy_vhg_ftp.sh
# Optional env vars:
#   FTP_USER       (default: allan@vhg.dk)
#   FTP_PASSWORD   (if omitted, script prompts securely)
#   FTP_PROTOCOL   (ftp or ftps, default: ftp)
#   DEPLOY_DRY_RUN (1 to print actions without upload)

FTP_HOST="${FTP_HOST:-vhg.dk}"
FTP_USER="${FTP_USER:-allan@vhg.dk}"
FTP_PASSWORD="${FTP_PASSWORD:-}"
FTP_PROTOCOL="${FTP_PROTOCOL:-ftp}"
FTP_REMOTE_DIR="${FTP_REMOTE_DIR:-/public_html/ny}"
DEPLOY_DRY_RUN="${DEPLOY_DRY_RUN:-0}"

if [[ -z "$FTP_HOST" ]]; then
  echo "ERROR: Set FTP_HOST (example: FTP_HOST=ftp.vhg.dk)"
  exit 1
fi

if [[ -z "$FTP_PASSWORD" ]]; then
  read -r -s -p "FTP password for ${FTP_USER}@${FTP_HOST}: " FTP_PASSWORD
  echo
fi

if [[ "$FTP_PROTOCOL" != "ftp" && "$FTP_PROTOCOL" != "ftps" ]]; then
  echo "ERROR: FTP_PROTOCOL must be 'ftp' or 'ftps'"
  exit 1
fi

# Normalize remote dir to no trailing slash (except root)
if [[ "$FTP_REMOTE_DIR" != "/" ]]; then
  FTP_REMOTE_DIR="${FTP_REMOTE_DIR%/}"
fi

# Upload only files that belong to the actual site, not repo internals.
INCLUDE_PATHS=(
  "index.html"
  "assets"
  "css"
  "js"
)

upload_file() {
  local local_file="$1"
  local relative_path="$2"
  local remote_url

  if [[ "$FTP_REMOTE_DIR" == "/" ]]; then
    remote_url="${FTP_PROTOCOL}://${FTP_HOST}/${relative_path}"
  else
    remote_url="${FTP_PROTOCOL}://${FTP_HOST}${FTP_REMOTE_DIR}/${relative_path}"
  fi

  if [[ "$DEPLOY_DRY_RUN" == "1" ]]; then
    echo "[DRY RUN] $local_file -> $remote_url"
    return
  fi

  if [[ "$FTP_PROTOCOL" == "ftps" ]]; then
    curl --fail --silent --show-error \
      --ssl-reqd \
      --ftp-create-dirs \
      --user "$FTP_USER:$FTP_PASSWORD" \
      -T "$local_file" \
      "$remote_url"
  else
    curl --fail --silent --show-error \
      --ftp-create-dirs \
      --user "$FTP_USER:$FTP_PASSWORD" \
      -T "$local_file" \
      "$remote_url"
  fi
}

count=0
for path in "${INCLUDE_PATHS[@]}"; do
  if [[ -f "$path" ]]; then
    upload_file "$path" "$path"
    count=$((count + 1))
  elif [[ -d "$path" ]]; then
    while IFS= read -r -d '' file; do
      rel="${file#./}"
      upload_file "$file" "$rel"
      count=$((count + 1))
    done < <(find "$path" -type f -print0)
  fi
done

echo "Done. Uploaded $count files."
