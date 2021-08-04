// Copied and modified from https://github.com/awsdocs/aws-lambda-developer-guide/blob/main/sample-apps/nodejs-apig/function/index.js

// Handler
exports.handler = async function(event, context) {
  try {
    const responseBody = doSomething(event, context)
    return formatResponse(serialize(responseBody))
  } catch(error) {
    return formatError(error)
  }
}

const doSomething = function (event, context) {    
  console.log('## CONTEXT: ' + serialize(context))
  console.log('## EVENT: ' + serialize(event))
  const params = getParams(event)
  console.log('## PARAMS: ' + serialize(params))
  console.log('## FAVOURITE_POKEMON: ' + serialize({ "name": process.env.FAVOURITE_POKEMON }))

  return { 
      "test": "ok",
      "timestamp": Date.now(),
      "pokemonName": params.pokemonName,
      "pokemonId": params.pokemonId,
    }
}

const getParams = function(event) {
  const bodyString = event.body
  const bodyJson = JSON.parse(bodyString)
  const pokemonName = bodyJson.pokemonName || 'NOT_SET'
  const pokemonId = bodyJson.pokemonId || 'NOT_SET'
  return {
    pokemonName: pokemonName,
    pokemonId: pokemonId,
  }
}

const formatResponse = function(body){
  const response = {
    "statusCode": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "isBase64Encoded": false,
    "multiValueHeaders": { 
      "X-Custom-Header": ["My value", "My other value"],
    },
    "body": body
  }
  return response
}

const formatError = function(error){
  const response = {
    "statusCode": error.statusCode,
    "headers": {
      "Content-Type": "text/plain",
      "x-amzn-ErrorType": error.code
    },
    "isBase64Encoded": false,
    "body": error.code + ": " + error.message
  }
  return response
}

const serialize = function(object) {
  // stringify and remove all line breaks
  return JSON.stringify(object, null, 2).replace(/(\r\n|\n|\r)/gm, '')
}
