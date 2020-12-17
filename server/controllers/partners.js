import PartnerModel from '../models/partnerModel.js'

export const getPartners = async (req, res) => {
    try {
        const partners = await PartnerModel.find()
        res.status(200).json(partners)
    } catch (error) {
        res.status(404).json({message: error.message})        
    }
}

export const createPartner = async (req, res) => {
    const partner = req.body
        const newPartner = new PartnerModel(partner)
    try {
        await newPartner.save()
        res.status(201).json(newPartner)
    } catch (error) {
        res.status(409).json({message: error.message})        
    }
}