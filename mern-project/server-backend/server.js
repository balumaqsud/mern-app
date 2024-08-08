require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

// 1Sapp is created
const app = express();

// 3S middlewares
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// 2S routes, it was just app. 
//get before but change to use after i created routes folder and workout routes
//now getting all workout related routes from routes/workouts
app.use('/api/workouts',workoutRoutes)

//3-S connect to the database

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        // 1S  app is listening to local host port 4000 // once we connected to db, we started to listen to the server
        app.listen(process.env.PORT, () => {
            console.log("connected to db &&& app is listening to PORT 4000!")
        });
    })
    .catch((err) => {
        console.log(err)
    });

