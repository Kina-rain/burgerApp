//pull in the connection config so we can query the db
var connection = require("../config/connection");

function chkmrkCreate(num) {
    //initate the array for use
    var arr = [];

    //push the qmarks into the array
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    //send it back
    return arr.toString();
}

function sqlMorph(ob) {
    //inisate the array for use
    var arr = [];

    //for every value that we are changing, push the correct string into the arra
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    //send it back
    return arr.toString();
}

//This will be our ORM for the burger app, functions to manipulate data in the DB 
var orm = {
    //select all data from the requested table
    selectAll: function (table, cb) {
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    //put one record into the database
    insertOne: function (table, cols, vals, cb) {
        var dbQuery =
            "INSERT INTO " +
            table +
            " (" +
            cols.toString() +
            ") " +
            "VALUES (" +
            chkmrkCreate(vals.length) +
            ") ";

        console.log(dbQuery);
        connection.query(dbQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    //update one record in our database
    updateOne: function (table, objColVals, condition, cb) {
        var dbQuery =
            "UPDATE " +
            table +
            " SET " +
            sqlMorph(objColVals) +
            " WHERE " +
            condition;

        console.log(dbQuery);

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    //delete the data in the database upon user request
    deleteOne: function (table, condition, cb) {
        var dbQuery = "DELETE FROM " + table + " WHERE " + condition;
        console.log(dbQuery);

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

//export our module for the model to use
module.exports = orm;