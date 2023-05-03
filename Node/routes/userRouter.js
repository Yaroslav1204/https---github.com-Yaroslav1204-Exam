const express = require('express');
const {addAdmin} = require('../controllers/userControlers')


const adminRouter = express.Router()
const jsonParser = express.json()

adminRouter.post('/',jsonParser, addAdmin)

module.exports = adminRouter