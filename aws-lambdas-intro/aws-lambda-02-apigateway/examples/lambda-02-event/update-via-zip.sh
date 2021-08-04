#!/bin/bash

FUNCTION_NAME=${1:-"nja-my-name-lambda"}

echo ""
rm -rf function.zip 
zip function.zip index.js

echo ""
gsts-login

echo ""
aws lambda update-function-code --function-name "${FUNCTION_NAME}" \
  --zip-file fileb://function.zip \
  --publish \
  --profile iw-academy

echo ""
