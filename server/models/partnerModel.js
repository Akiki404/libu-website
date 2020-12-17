import mongoose from 'mongoose'

const partnerSchema = mongoose.Schema({
    name: String,
    logo: String
})

const partnerModel = mongoose.model('PartnerModel', partnerSchema)

export default partnerModel