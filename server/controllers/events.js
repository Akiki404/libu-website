import EventModel from '../models/eventModel.js'

export const getEvents = async(req, res) => {
    try {
        const events = await EventModel.find()
        res.status(200).json(events)    
    } catch (error) {
        res.status(404).json({ message: error.message })        
    }
}

export const createEvent = async (req, res) => {
    const event = req.body
    const newEvent = new EventModel(event)
    try {
        await newEvent.save()
        res.status(201).json(newEvent)
    } catch (error) {
        res.status(409).json({ message: error.message })        
    }
}