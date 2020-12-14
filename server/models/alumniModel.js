import mongoose from 'mongoose'

const alumniSchema = mongoose.Schema({
    name: String,
    certificate: String,
    occupation: String,
    tagline: String,
    image: String
})

const alumniModel = mongoose.model('alumniModel', alumniSchema)

export default alumniModel