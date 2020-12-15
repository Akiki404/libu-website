import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({
    title: String,
    content: String,
    date: Date
})

const eventModel = mongoose.model('EventModel', eventSchema)

export default eventModel