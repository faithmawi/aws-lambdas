exports.handler = async function(event, context) {
    doSomethingElse(event, context)
    return { "result": "ok" }
}

function doSomethingElse(event, context) {
    console.log(`EVENT: ${JSON.stringify(event)}`)
    console.log(`CONTEXT: ${JSON.stringify(context)}`)
    const pokemonName = event.pokemonName || 'NOT_SET'
    const pokemonId = event.pokemonId || 'NOT_SET'
    console.log(`PARAMS: pokemonName = ${pokemonName}`)
    console.log(`PARAMS: pokemonId = ${pokemonId}`)
    console.log("more code here")
}
