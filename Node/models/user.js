const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userShema = new Schema({
    username: String,
    email: String,
    password: String
})

module.exports = mongoose.model('User', userShema)