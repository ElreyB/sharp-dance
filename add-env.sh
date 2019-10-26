#!/bin/bash

set -euo pipefail

SOURCE="~/diane-env"

if test -f "$SOURCE"; then
    echo "Copying $SOURCE to .env"
    cp $SOURCE .env
else
    echo "$SOURCE does not exist, create it first to be able to consume the keys"
    exit 1
fi
