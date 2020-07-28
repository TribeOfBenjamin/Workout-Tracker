const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

  date: {
    type: Date,
    default: Date.now
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
          // Changed the format since it's just one key/value pair. If buggy, try the other way.
          distance: Number,
          weight: Number,
          reps: Number,
          sets: Number
      }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;