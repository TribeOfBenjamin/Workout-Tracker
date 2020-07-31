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

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    // Workout.find({ _id: req.params.id })
    //     .then(workouts => {
    //         const temp = workouts.exercises.map(exercise => exercise.duration);
    //         const oldDuration = temp.reduce((a, b) => a + b);

    //         const totalDuration = req.body.duration + oldDuration;

    //         console.log(totalDuration);

            Workout.updateOne({ _id: req.params.id }, { $push: { exercises: req.body }, totalDuration: 8 })
                .then(dbWorkout => {
                    res.json(dbWorkout); 
                })
                .catch(err => {
                    res.status(400).json(err);
                });
        // })
        // .catch(err => {
        //     res.status(400).json(err);
        // });

        
});

router.post("/api/workouts", (req, res) => {
    console.log(`'New Workout' button clicked; this is req.body: ` + JSON.stringify(req.body));

    Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;