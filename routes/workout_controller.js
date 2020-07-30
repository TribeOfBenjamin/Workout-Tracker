const express = require("express");
const Workout = require("../models/workout.js");

const router = express.Router();

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            console.log("IM AN ERROR!");
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    res.json({message: "working on PUT request."})
});

router.post("/api/workouts", (req, res) => {
    console.log(req.body);
    Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;