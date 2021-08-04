#!/bin/bash

# updated from https://github.com/awsdocs/aws-lambda-developer-guide/blob/main/sample-apps/blank-nodejs/4-invoke.sh

FUNCTION_NAME=${1:-"nja-my-name-lambda"}

echo ""
echo "install npm stuff..."
npm install

echo ""
echo "doing zip..."
rm -rf function.zip
zip -r -q function.zip .

echo ""
echo "Updating ${FUNCTION_NAME} ..."
echo ""

aws lambda update-function-code \
  --function-name ${FUNCTION_NAME} \
  --zip-file fileb://function.zip \
  --publish \
  --profile iw-academy

echo ""
echo "..done updating ${FUNCTION_NAME}"
echo ""
