const db_connection = require("./model");

const express = require("express");
const app = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const CourseController = require("./controllers/courses");

app.use(bodyParser.urlencoded({ extended : true }));

//VIEWS AND TEMPLATING ENGINE
app.set("views", path.join(__dirname, "/views"));

app.engine("hbs", expressHandlebars({
    extname : "hbs",
    defaultLayout : "mainlayout",
    layoutsDir : path.join(__dirname, "/views/layouts")
}));

app.set("view engine", "hbs"); 
//

app.get("/", (req,res)=>{
    res.render("index", {});
});

app.use("/course", CourseController);

app.listen(3000, () => {
    console.log("server listening at port localhost:3000");
});