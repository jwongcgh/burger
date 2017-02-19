/* setup connection to database */

// dependencies
var mysql = require("mysql");

var connectionInfo = {
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
}

if (process.env.JAWSDB_URL) {
    connectionInfo = process.env.JAWSDB_URL;
}

var connection = mysql.createConnection(connectionInfo);

// connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: ", err.stack);
        return;
    }
    console.log("connected as id: ", connection.threadId);
});

// Export connection to ORM
module.exports = connection;
