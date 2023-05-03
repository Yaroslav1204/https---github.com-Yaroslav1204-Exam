const mongoose = require('mongoose')

const PostsSchema = mongoose.Schema


const PostSchema = new PostsSchema({
    title: String,
    body: String
})

module.exports = mongoose.model("Posts", PostSchema)