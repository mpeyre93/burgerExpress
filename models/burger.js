//import ORM to create functions that will interact with DB
var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    create: function(cols, name, cb){
        orm.insertOne("burgers", cols, name, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        
        orm.updateOne("burgers",objColVals, condition, function(res){
            cb(res);
        });
    }
};

//export database functions for burgers_controllers.js
module.exports = burger;