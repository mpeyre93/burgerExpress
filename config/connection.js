//setup MySQL connection
var mysql = require("mysql");

if (process.env.JAWSBD_URL){
    connection = mysql.createConnection(process.env.JAWSBD_URL);
} else {
    var connection = mysql.createConnection({
        host:"localhost",
        port: 3306,
        user: "root",
        password: "rootroot",
        database: "burgers_db"
    });
};

//make connection
connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);
});

//export connection for ORM to us
module.exports = connection;