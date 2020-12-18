import ActivityModel from '../models/activityModel.js'

export const getActivities = async (req, res) => {
    try {
        const activities = await ActivityModel.find()
        res.status(200).json(activities)
    } catch (error) {
        res.status(404).json({message: error.message})        
    }
}

export const createActivity = async (req, res) => {
    const activity = req.body
    const newActivity = ActivityModel(activity)
    try {
        await newActivity.save()
        res.status(201).json(newEvent)
    } catch (error) {
        res.status(409).json({message: error.message})        
    }
}

export const deleteActivity = async (req, res) => {
    const { id } = req.params
    await ActivityModel.findByIdAndDelete(id)
    return res.json({ message: 'Activity deleted successfully!'})
}