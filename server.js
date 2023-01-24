const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const dotenv = require('dotenv')
dotenv.config()


// body parser
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));


// database
const mongoose = require('mongoose')

const mongourl = `mongodb+srv://arindam:${process.env.PASS}@cluster0.jtibas8.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)

mongoose.connect(mongourl, {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


// template engine
app.set('view engine', 'ejs')
app.set("views",__dirname+"/views");


// routes
const router = require('./controllers/router')
app.use(router)

// connection to localhost
app.listen(port, () => {
    console.log(`App running at port ${port}`)
})