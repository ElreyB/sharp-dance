#!/bin/bash
set -euo pipefail

git config --global user.email "deploy@ci.com"
git config --global user.name "Auto Deploy"

  yarn

yarn build

if [ "${CIRCLE_BRANCH}" == "master" ]; then
  yarn deploy
fi
