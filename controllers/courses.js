const express = require("express");

const mongoose = require("mongoose");
const router = express.Router();
const CourseModel = mongoose.model("Course");

//   course/list url
router.get("/list", (req, res)=>{
    CourseModel.find((err, docs)=>{
        if (!err){
            res.send("Course Controller working ! ");
            if (docs != "") {consolelog(docs);};
        } else {
            res.send(err);
        };
    });
});

//exporting
module.exports = router;