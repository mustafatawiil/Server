const express = require("express");
const req = require("express/lib/request");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const mongooseLink =
    "mongodb+srv://mustafatawiil:Mu1987*$@cluster0.jmodqgc.mongodb.net/"
mongoose.connect(mongooseLink);
mongoose.connection.on("connected", () => {
    console.log("mongo connected");
});
app.get("/app", (req, res) => {
    res.status(200).json({
        message: "yes",

    });
});


module.exports = app;
