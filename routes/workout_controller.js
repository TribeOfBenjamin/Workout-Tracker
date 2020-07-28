const express = require("express");
const workoutModel = require("../models/workoutModel.js");

const router = express.Router();

router.get("/api/workouts", function(req, res) {
    workoutModel.find({})
        .then(function(workouts) {
            res.json(workouts);
        });
    
});