const express = require("express");
const Workout = require("../models/workout.js");

const router = express.Router();

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;