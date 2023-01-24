const mongoose = require('mongoose')

const schema = mongoose.Schema({

    fullName : {
        type: String,
        required: true
    },
    desc : {
        type: String,
        required : true
    },
    price : {
        type: Number,
        required : true
    },
    email : {
        type: String,
        required: true
    },
    phone : {
        type: Number,
        required: true
    },
    dateTime : {
        type: Date,
        required : true,
        default: () => Date.now()
    }
})

const Receipt = mongoose.model('Receipt', schema)
module.exports = Receipt