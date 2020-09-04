const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Express_test", { useNewUrlParser: true, useUnifiedTopology: true  }, (err)=>{
	if (!err) {
		console.log("Successfully connected to mongodb");
	} else {
		console.log("can't connect to database");
	}
});

const model = require("./model.js")