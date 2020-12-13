var orm = require("../config/orm.js");

var burger = {
    all: function(cd){
        orm.all("burgers", function(res){
            cd(res);
        });
    },
    create: function(name, cd){
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cd);
    },
    update: function(id, cd){
        var condition = "id=" + id;
        orm.update("burgers")
    }
}