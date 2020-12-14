import AlumniModel from '../models/alumniModel.js'

export const getAlumni = async (req, res) => {
    try {
        const alumni = await AlumniModel.find()
        res.status(200).json(alumni)

    } catch (error) {
        res.status(404).json({ message: error.message })        
    }
}

export const createAlumni = async (req, res) => {
    const alumni = req.body
    const newAlumni = new AlumniModel(alumni)
    try {
        await newAlumni.save()
        res.status(200).json(newAlumni)
    } catch (error) {
        res.status(409).json({ message: error.message })        
    }
}