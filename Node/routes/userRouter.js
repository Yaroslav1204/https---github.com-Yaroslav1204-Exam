const express = require('express');
const {addAdmin} = require('../controllers/userControlers')


const userRouter = express.Router()
const jsonParser = express.json()

userRouter.post('/',jsonParser, addAdmin)

module.exports = userRouter