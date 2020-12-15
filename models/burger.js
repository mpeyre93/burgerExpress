//import ORM to create functions that will interact with DB
var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    create: function(name, cb){
        orm.create("burgers", name, function(res){
            cb(res);
        });
    },
    update: function(condition, id, cb){
        condition = "devoured = true"
        orm.update("burgers", condition, id, function(res){
            cb(res);
        });
    }
};

//export database functions for burgers_controllers.js
module.exports = burger;