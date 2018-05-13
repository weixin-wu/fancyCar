var express = require("express");

var app = express();

var port = process.env.PORT || 8888;
var path = require("path");

var morgan = require("morgan");
var bodyParser = require("body-parser");
var dateFormat = require("dateformat");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// var configDB = require("./config/database.js");


app.use(morgan("dev")); // log every request to the console

//view engine setup
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "ejs");


require('./config/routes.js')(app); // load our routes and pass in our app and fully configured passport

app.listen(port, () => console.log("server is listening on port: "+port));
// routes ======================================================================
