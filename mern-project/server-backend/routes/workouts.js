// this file is only to registre different routes
const express = require('express');
const {
    createWorkout,
    getAWorkout,
    getWorkouts,
    updateWorkout,
    deleteWorkout, 
} = require('../controllers/workoutController')
 
const router = express.Router()

// 2S GET all workouts
router.get('/', getWorkouts);

// GET single workout
router.get('/:id', getAWorkout);

// POST a workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);



// export ing the router
module.exports = router;