var mysql = require("mysql");
connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("Houston there is a problem: " + err.stack);
        return;
    }
    console.log("Houston we have lift id " + connection.threadId);
});
module.exports = connection;
