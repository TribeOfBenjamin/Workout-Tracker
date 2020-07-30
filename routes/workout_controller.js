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

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    res.json({message: "working on it."})
})

module.exports = router;