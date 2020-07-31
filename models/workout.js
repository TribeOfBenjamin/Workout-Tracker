const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

  day: {
    type: Date,
    default: new Date().setDate(new Date().getDate())
  },
  exercises: [
      {
          type: {
              type: String,
              trim: true,
              required: "Enter the type of exercise you performed."
          },
          name: {
              type: String,
              trim: true,
              required: "Enter the name of the exercise."
          },
          duration: {
              type: Number,
              required: "How many minutes did the exercise take to perform?"
          },
          distance: Number,
          weight: Number,
          reps: Number,
          sets: Number
      }
  ],
  totalDuration: Number
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;