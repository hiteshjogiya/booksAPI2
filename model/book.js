const mongoose = require('mongoose')


const schema = mongoose.Schema({
    name:String,
    pswd:Number
})

module.exports = mongoose.model("book",schema)