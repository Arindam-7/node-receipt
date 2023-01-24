const express = require('express')
const router = express.Router()

const Receipt = require('../models/receipt')
const url = require('url') // built-in require module


router.get('/', (req, res) => {
    res.render('index')
})


router.get('/print', (req, res) => {
    let bill = req.query;
    console.log(bill)

    res.render('print', {bill: req.query})
})


router.post('/submit', (req, res) => {
    // create a new instance of the Receipt model, using the request body
    Receipt(req.body).save()

    // redirecting the user to a new endpoint '/print' 
    // and passing the request body as query parameters
    res.redirect(url.format({ pathname: '/print', query: req.body}))
})

module.exports = router