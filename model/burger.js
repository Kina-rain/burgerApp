//pull in our ORM definition
var orm = require("../config/orm.js");

//Set up the burger model for use in the controller
var burger = {

  //select data from burgers table
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  //insert a user specified burger
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  //update burger when devoured
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

  //delete the burger after it has been devoured
  deleteOne: function(condition, cb) {
    orm.deleteOne("burgers", condition, function(res) {
      cb(res);
    });
  }
};

//export our module
module.exports = burger;