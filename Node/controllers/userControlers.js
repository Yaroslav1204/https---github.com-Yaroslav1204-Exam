const User = require('../models/user')
const { JWT_Secret } = require('../config/configs')
const jwt = require('jsonwebtoken')


const adminUser = {
    username: 'Elroy',
    email: 'admin@example.com',
    password: '123654User'
}


const addAdmin = async (req, res) => {
    if (req.body) {
        const user = req.body


        if (user.username == adminUser.username && user.email == adminUser.email && user.password == adminUser.password) {
            const token = jwt.sign(user, JWT_Secret)

            return res.status(200).json({
                signed_user: user,
                token
            })
        } else {
            res.status(403).json({
                errorMessage: "Wrong data returned"
            })
        }
    } else {
        res.status(403).json({
            errorMessage: "Please enter your email address and password"
        })
    }
}

module.exports = {
    addAdmin
}