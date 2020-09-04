const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const courseModel = mongoose.model("Course");

router.get("/list", (req,res)=>{
    courseModel.find((err,docs)=>{
        if (!err) {
            console.log(docs);
            res.send("course controller is running right now!");
        }
    })
})

module.exports = router;