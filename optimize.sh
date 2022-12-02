#!/bin/bash
set -euo pipefail

if ! command -v convert &> /dev/null; then
    echo "convert not be found, installing imagemagick..."
    brew update
    brew install imagemagick
    echo ""
    echo "Re run this program to optimize images"
    exit
fi

if [ $# -eq 0 ]; then
    echo "No path specified. This program must be called with a path where to optimize images. For instance:"
    echo ""
    echo "yarn optimize ~/Downloads/photos"
    echo ""
    exit 1
fi

cd $1

for img in ./*.{jpg,png,jpeg}; do
    if echo x"$img" | grep '*' > /dev/null; then
        echo "Skipped $img"
    else
        convert "$img" -resize 600x600 -strip -quality 86 "$img";
    fi
done

cd -