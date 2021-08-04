// From https://github.com/awsdocs/aws-lambda-developer-guide/blob/main/sample-apps/blank-nodejs/function/index.js

// The filename here must match that configured in our existing lambda "index.js"

const AWSXRay = require('aws-xray-sdk-core')
const AWS = require('aws-sdk')

// Create client outside of handler to reuse
var lambda = AWSXRay.captureAWSClient(new AWS.Lambda());

// Handler
exports.handler = async function(event, context) {
  event.Records.forEach(record => {
    console.log(record.body)
  })
  console.log('## ENVIRONMENT VARIABLES: ' + serialize(process.env))
  console.log('## CONTEXT: ' + serialize(context))
  console.log('## EVENT: ' + serialize(event))
  
  return listAliases(context)
}

// Use SDK client
const listAliases = function(context) {
  const params = {
    FunctionName: context.functionName, /* required */
    MaxItems: '10'
  };
  return lambda.listAliases(params).promise()
}

const serialize = function(object) {
  return JSON.stringify(object, null, 2)
}
