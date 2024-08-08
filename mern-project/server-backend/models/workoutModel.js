const mongoose = require('mongoose');


//creating schema for workouts, schema defines structure of a particular document
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    reps: {
        type: Number,
        required: true
    }, 
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true});

//creating models for the schema, model applies schema to a partcular MODEL,
// we use the model to interact with the collection like, 
//Workout.find() schema is just a structure
module.exports = mongoose.model('Workout', workoutSchema);



