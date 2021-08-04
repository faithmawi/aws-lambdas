#!/bin/bash

FUNCTION_NAME=${1:-"nja-my-name-lambda"}
FILE_NAME=${2:-"handler-example-01.js"}

echo ""
rm -rf function.zip index.js
cp "${FILE_NAME}" index.js
zip function.zip index.js
rm -rf index.js

echo ""
aws lambda update-function-code --function-name "${FUNCTION_NAME}" \
  --zip-file fileb://function.zip \
  --publish \
  --profile iw-academy

echo ""
