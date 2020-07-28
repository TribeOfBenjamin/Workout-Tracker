const path = require("path");

module.exports = app => {

    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "exercise.html"));
    });

    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "stats.html"));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
    });

};