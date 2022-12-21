require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const app = express();

mongoose.set('strictQuery', false);
// connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(res => {
        app.listen(process.env.PORT, () => {
            console.log('Server is running on Port ' + process.env.PORT + ' connected to db')
        })
    })
    .catch(err => {
        console.log(err)
    })


