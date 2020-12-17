import mongoose from 'mongoose'

const activitySchema = mongoose.Schema({
    title: String,
    category: String,
    image: String,
    description: String
})

const activityModel = mongoose.model('activityModel', activitySchema)

export default activityModel