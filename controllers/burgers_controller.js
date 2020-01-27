var express = require("express");
//get our model so we can use it to modify data
var burger = require("../model/burger");

//fire up a router to set the routes for the app
var router = express.Router();

//the home page route
router.get("/", function (req, res) {
  //get all of the burgers in the table for listing
  burger.selectAll(function (data) {

    //set our handlebars object with the results
    var hdbrsObj = {
      burgers: data
    };

    //logging to review data
    console.log(hdbrsObj);

    //render the page
    res.render("index", hdbrsObj);
  });

  //the post route for our api
  router.post("/api/burgers", function (req, res) {

    //Route setup for the burger insert
    burger.insertOne(
      ["burger_name", "devoured"],
      [req.body.burger_name, req.body.devoured],
      function (result) {
        // Send back the ID of new burger
        res.json({ id: result.insertId });
      }
    );
  });

  //the put route for the api
  router.put("/api/burgers/:id", function (req, res) {

    //pull the burger id
    var condition = "id = " + req.params.id;

    //log our condition for testing / verification
    console.log("condition", condition);

    //Route setup for the update
    burger.updateOne({ devoured: req.body.devoured }, condition, function (
      result
    ) {

      //Check to see if data was changed
      if (result.changedRows === 0) {
        //nothing changed, send back a 404
        return res.status(404).end();
      } else {
        //return our 200 to show success
        res.status(200).end();
      }
    });
  });

  //the delete route for the api
  router.delete("/api/burgers/:id", function (req, res) {

    //pull the burger id
    var condition = "id = " + req.params.id;

    //log the condition to the console for tesing / verification
    console.log("condition", condition);

    burger.deleteOne(condition, function (result) {

      //check to see if anything changed
      if (result.changedRows === 0) {
        //nothing changed, send back a 404
        return res.status(404).end();
      } else {
        //delete happend, send back success
        res.status(200).end();
      }
    });
  });
});

//export our module
module.exports = router;