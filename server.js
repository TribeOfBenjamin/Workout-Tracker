// Requiring necessary npm packages
const express = require("express");
const mongoose = require("mongoose");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;

// Creating express app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Setting up database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI);

// Put routes here (for later)
require("./routes/workout_controller");
require("./routes/htmlRoutes.js");

app.listen(PORT, () => {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});