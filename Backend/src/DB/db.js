require('dotenv').config()
const mongoose = require("mongoose")

const connect = () => {
    mongoose.connect(process.env.MONGO_URI)

    .then(() => {
        console.log("Database Connected")
    })

    .catch(()=>{
        console.log("Connection Denied")
    })
}

module.exports = connect