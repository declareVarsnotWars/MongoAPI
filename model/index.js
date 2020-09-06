const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Minh", (err)=>{
    if (!err) {
        console.log('Connected to loclahost:27017 mongodb port');
    } else {
        console.log('error connectong to mongodb');
    }
})
 
const Course = require("./course.model");