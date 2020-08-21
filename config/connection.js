const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "password123",
    database: "burger_db"
});
};
connection.connect(err => {
    if (err) throw err;
    console.log("connected as id", connection.threadId);
});

module.exports = connection;