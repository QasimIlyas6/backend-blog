const mongoose = require('mongoose')

async function connectMongo () {
    const url = 'mongodb+srv://backend-practice:backend-practice@cluster0.rppv3bg.mongodb.net/backend-practice'
    try {
        await mongoose.connect(url);
        console.log("connected successfully")
    } catch (error) {
        console.log("error occur while connecting...", error)
    }
   
}

module.exports = {connectMongo} ;