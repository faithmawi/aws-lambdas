#!/bin/bash

# updated from https://github.com/awsdocs/aws-lambda-developer-guide/blob/main/sample-apps/blank-nodejs/4-invoke.sh

FUNCTION_NAME=${1:-"nja-my-name-lambda"}

echo ""
rm -rf out.json

echo ""
echo "Invoking ${FUNCTION_NAME} ..."
echo ""

aws lambda invoke --function-name ${FUNCTION_NAME} \
    --payload file://event.json \
    --cli-binary-format raw-in-base64-out \
    --profile iw-academy \
    out.json

echo ""
cat out.json

echo ""
echo "... done Invoking ${FUNCTION_NAME}"
echo ""
