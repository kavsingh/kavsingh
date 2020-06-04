#!/bin/bash

# https://www.npmjs.com/package/ts-node#cli-and-programmatic-options
npx ts-node --transpile-only --project './tsconfig.ts-node.json' "$@"
