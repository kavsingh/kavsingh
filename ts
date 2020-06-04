#!/bin/bash

# https://www.npmjs.com/package/ts-node#cli-and-programmatic-options
npx ts-node -T --log-error -P './tsconfig.ts-node.json' "$@"
