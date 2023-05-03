const express = require('express');
const {getPosts, getOnePost, addPost, updatePost, deletePost} = require('../controllers/postsController')


const adminPostRouter = express.Router()
const jsonParser = express.json()

adminPostRouter.get('/', getPosts)
adminPostRouter.get('/:id', getOnePost)
adminPostRouter.post('/', jsonParser, addPost)
adminPostRouter.put('/:id', jsonParser, updatePost)
adminPostRouter.delete('/:id', jsonParser, deletePost)

module.exports = adminPostRouter