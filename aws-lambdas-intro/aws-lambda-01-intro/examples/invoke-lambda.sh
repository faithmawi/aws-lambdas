#!/bin/bash

FUNCTION_NAME=${1:-"nja-my-name-lambda"}

echo ""
aws lambda invoke --function-name ${FUNCTION_NAME} \
    --payload '{"pokemonName": "Clefairy", "pokemonId": "35"}' \
    --cli-binary-format raw-in-base64-out \
    --profile iw-academy \
    invoke-output.txt

echo ""
cat invoke-output.txt
echo ""
