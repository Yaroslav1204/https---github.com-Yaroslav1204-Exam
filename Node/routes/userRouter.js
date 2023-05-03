const express = require('express');
const {addUser} = require('../controllers/userControlers')


const userRouter = express.Router()
const jsonParser = express.json()

userRouter.post('/',jsonParser, addUser)

module.exports = userRouter