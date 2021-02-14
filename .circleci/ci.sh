#!/bin/bash
set -euo pipefail

git config --global user.email "deploy@ci.com"
git config --global user.name "Auto Deploy"

  yarn


if [ "${CIRCLE_BRANCH}" == "master" ]; then
  yarn deploy
else
  yarn build

fi
