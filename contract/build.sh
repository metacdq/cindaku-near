#!/bin/sh
set -e
echo ">> Building contract"

near-sdk-js build src/index.ts build/cindaku.wasm
