#!/bin/bash
set -euo pipefail

yarn

yarn build

if [ "${CIRCLE_BRANCH}" == "master" ]; then
    yarn deploy
fi