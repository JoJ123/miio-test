const miio = require("miio");


async function connect() {
    const device = await miio.device({
        address: "IP",
        token: "TOKEN"
    })
    
    console.log("----------------------------")
    console.log("device: ", JSON.stringify(device))
    console.log("----------------------------")
    const model = device.management.api.model
    const model2 = device.miioModel
    
    console.log("----------------------------")
    console.log('model: ', model);    
    console.log('model2: ', model2);    
    console.log("----------------------------")
}

connect()
