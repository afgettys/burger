const connection = require("./connection.js");

//refer to activities 14 and 15 

const orm = {
    
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString,[table,cb] (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    createItem: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO ??(??) VALUES (?);";
        connection.query(queryString, [table, cols, vals], (err, res) => {
            if (err) throw err;
            console.log(queryString);
            cb(res);
        })

    },
    updateItem: function(table, col, value, id, cb) {
        var queryString = "UPDATE ?? SET ??=? WHERE id = ?;";
        connection.query(queryString, [table, col, value, id], (err, res) => {
            console.log(queryString);
            if (err) throw err;
            cb(res);
        })
    }
};

module.exports = orm;