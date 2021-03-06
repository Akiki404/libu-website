import PostModel from '../models/postModel.js'

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message })        
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params
    try {
        const post = await PostModel.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({message: 'Post not found!'})        
    }
}

export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostModel(post)
    try {
        await newPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })        
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params
    await PostModel.findByIdAndDelete(id)
    return res.json({message: 'Post deleted successfully'})
}