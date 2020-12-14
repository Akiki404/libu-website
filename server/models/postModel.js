import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    author: String,
    image: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const postModel = mongoose.model('PostModel', postSchema)

export default postModel