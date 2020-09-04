const mongoose = require("mongoose");

//structurize model
const courseSchema = new mongoose.Schema({
	courseName : {
		type : String,
		required : "Required"
	},
	courseId : {
		type : String
	},
	courseDuration : {
		type : String
	},
	courseFee : {
		type : String
	}
});

//define model named "Course"
mongoose.model("Course", courseSchema)

