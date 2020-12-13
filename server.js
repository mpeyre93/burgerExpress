var express = require("express");

var PORT = process.env.PORT || 8000;
var app = express();

//static content served from public dir
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

//set main as default layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

//start server to begin listening
app.listen(PORT, function(){
    //tell user server has started
    console.log("Server listening on PORT:%s" + PORT);
});