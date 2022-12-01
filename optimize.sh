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

for img in ./*.png; do
    if echo x"$img" | grep '*' > /dev/null; then
        echo "Skipped $img"
    else
        nopath="${img%.*}"
        convert $nopath.png $nopath.jpg
        rm -f $nopath.png
    fi
done

for img in ./*.{jpg,jpeg}; do
    if echo x"$img" | grep '*' > /dev/null; then
        echo "Skipped $img"
    else
        convert "$img" -resize 602x400 -strip -quality 86 "$img";
    fi
done

cd -