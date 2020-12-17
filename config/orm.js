//import MySQL connection
var connection = require ("../config/connection.js");


//function for SQL syntax
function printQuestionMarks (num){
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}

//convert object key/value pairs to SQL syntax
function objToSql(ob){
    var arr = [];

    //loop thru keys and push them as a sting int arr
    for (var key in ob){
        var value = ob[key];
        //check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)){
            //if string with spaces, add quotations
            if (typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    //translate array of strings to simgle comma-separated string
    return arr.toString();
}

//object for all SQL statements functions
var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, cols, name, cb) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(name.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, name, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    
    updateOne: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };

module.exports = orm;

