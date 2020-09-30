const path = require("path");

module.exports = function(app) {
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/efforts", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/efforts.html"));
    });

    app.get("/about", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });

    app.get("/pricing", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/pricing.html"));
    });

    app.get("/FAQ", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/FAQ.html"));
    });

    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });
};