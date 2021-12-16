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
    db.query("CREATE TABLE IF NOT EXISTS forms (id int primary key auto_increment, formId int, formTemplateId int, formJson text)", [], function (err, res) {
        if (err) {
            console.log("Error creating table: forms ", err);
            db.end(function (err) {
                if (err) {
                    console.log(err);
                }
            })
        }
    });
    db.query("CREATE TABLE IF NOT EXISTS datasets (id int primary key auto_increment, name text, attribute1 text, attribute2 text, attribute3 text, attribute4 text, displayfieldname text, keyfieldname text)", [], function (err, res) {
        if (err) {
            console.log("Error creating table: datasets ", err);
            db.end(function (err) {
                if (err) {
                    console.log(err);
                }
            })
        }
    });
});

module.exports = db;

