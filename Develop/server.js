// Requiring necessary npm packages
const express = require("express");
const exphbs = require("express-handlebars");
const { Mongoose } = require("mongoose");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;

// Creating express app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Setting up database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://TribeOfBenjamin:NewYork1991@ds339648.mlab.com:39648/heroku_88k4jhj3";
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});