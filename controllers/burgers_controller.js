var express = require("express");
var burger = require("../model/burger");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });

    router.post("/api/burgers", function(req, res) {
        burger.insertOne(
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function(result) {
                // Send back the ID of new burger
                res.json({ id: result.insertId });
            }
        );
    });
});