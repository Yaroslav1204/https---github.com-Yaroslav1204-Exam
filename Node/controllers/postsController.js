const Posts = require('../models/posts')




const getPosts = async (req,res) => {
    const posts = await Posts.find()
    res.json(posts)
}


const getOnePost = async (req, res) => {
    
    const id = req.params.id

    try {
        const post = await Posts.findById(id)
        if(post)
            return res.status(200).json(post)

        return res.status(404).json({
                'message': "No found post"
            })

    }
    catch(err) {
        return res.status(404).json({
            'message': "wrong id format"
        })
    }

}

const addPost = async (req, res) => {
    
    // console.log(req.body)

    const {id, title, body} = req.body

    try {
        const result = await Posts.create({id, title, body})
        return res.json(result)
    }
    catch(err) {
        res.json(err.message)
    }
}


const updatePost = async (req, res) => {

    const id = req.params.id
    const {title, body} = req.body

    try {
        const result = await Posts.findByIdAndUpdate(id, {title, body})
        return res.json(result)
    }
    catch(err) {
        res.json(err.message)
    }
}

const deletePost = async (req, res) => {
    const id = req.params.id

    try {
        const result = await Posts.findByIdAndDelete(id)
        return res.json(result)
    }
    catch {
        res.json("ERROR")
    }
}


module.exports = {
    getPosts, getOnePost, addPost, updatePost, deletePost
}