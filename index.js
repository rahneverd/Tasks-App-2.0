const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const app = express()
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.listen(process.env.PORT, () => {
    console.log("Server is running")
})