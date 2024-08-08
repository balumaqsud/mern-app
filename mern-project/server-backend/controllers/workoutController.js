const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

//get ALL workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1});

    res.status(200).json(workouts)
}

// get a SINGLE workout
const getAWorkout = async (req, res) => {
    const {id} = req.params

// checking if the workout exixst with the id of the object
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such workout with the id"})
    }
// just continue
    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error: 'no doc found'})
    } 
    res.status(200).json(workout)  
};

// CREATE a  workout
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body;

    // trying to respond with await because it is sync // review it
    // adding doc to db
    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout);
    } catch(error) {
        res.status(400).json({error: error.message})
    }
};

// DELETE a  workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    // checking if the workout exixst with the id of the object
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such workout with the id"})
    }

    const workout = await Workout.findByIdAndDelete({_id: id})

    if (!workout) {
        return res.status(404).json({error: 'no doc found'})
    } 
    res.status(200).json('file was delete') 
}

// UPDATE a  workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    // checking if the workout exixst with the id of the object
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such workout with the id"})
    }

    const workout = await Workout.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if (!workout) {
        return res.status(404).json({error: 'no doc found'})
    } 
    res.status(200).json(workout) 
}

module.exports = {
    createWorkout,
    getAWorkout,
    getWorkouts,
    updateWorkout,
    deleteWorkout,
}