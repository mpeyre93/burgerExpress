var express = require("express");

var router = express.Router();

//import modle buger.js to use database functions
var burger = require("../models/burger.js");

//create all routes and set up logic within routes
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsOject = {
            burgers: data
        };
        console.log(hbsOject);
        res.render("index", hbsOject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create(["name", "devoured"], [req.body.name, req.body.devoured], function(result){
        //send back the id fo the new quote
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result){
            if (result.changedRows === 0){
                //if no rows changed, then id must not exist, 404 error
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

//export routes for server.js to use
module.exports = router;