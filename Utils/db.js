const { createConnection } = require("mysql");


var db = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: "8889",
    database: 'api'
});

db.connect(function (error) {
    if (error) throw error;
    db.query("CREATE TABLE IF NOT EXISTS users (id int primary key auto_increment, firstname text, lastname text, email text)", [], function (err, res) {
        if (err) {
            console.log("Error creating table: user ", err);
            db.end(function (err) {
                if (err) {
                    console.log(err);
                }
            })
        }
    });
});

module.exports = db;

