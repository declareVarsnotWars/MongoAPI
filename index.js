const connection = require("./model");

const express = require("express");

const app = express();

const expressHandlebars = require("express-handlebars");

const bodyParser = require("body-parser");

const path =require("path");

app.use(bodyParser.urlencoded({ extended : true }));

const courseController = require("./controllers/courses");

//VIEWs
app.set("views", path.join(__dirname, "/views/"));
//TEMPLATE
app.engine("hbs", expressHandlebars({
	extname : "hbs",
	defaultLayout : "mainlayout",
	layoutsDir : __dirname + "views/layouts"
}));
//MERGE VIEWS AND TEMPLATE
app.set("view engine", "hbs");

//GET
app.get("/", (req,res)=>{
	app.render("index", {});
})
app.use("/course", courseController);

//PORT 
app.listen(8000, ()=>{
	console.log("server started");
});

