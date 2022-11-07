#!/bin/sh
set -e
echo ">> Building contract"

near-sdk-js build src/index.ts build/hello_near.wasm
