const mongoose = require("mongoose");

const schema = mongoose.newSchema({
	courseName : {
		type : String
		required : "Required";
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

