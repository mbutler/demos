const banana = require("@banana-dev/banana-dev")

var apiKey = ""
var modelKey = "gptj"

const modelParameters = {
    text: "It's night and there is a car parked in front of my house.",
    length: 250,
    temperature: 0.9,
    batchSize: 1,
}

let run = async (modelParameters) => {
    var out = await banana.run(apiKey, modelKey, modelParameters)
    console.log(out)
    return out
}

run(modelParameters)
