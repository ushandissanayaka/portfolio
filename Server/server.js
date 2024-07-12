const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('../Server/config/db')

const app = express()
app.use(cors())

const PORT = 8080 || process.env.PORT

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Connected To DB")
        console.log("Server is running")
    })
})
