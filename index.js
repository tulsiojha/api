const express = require('express');
const mysql = require("mysql");
const bodyParser = require("body-parser");
const { init } = require('./Utils/fb');

const app = express();

init()

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



var appRouter = require("./routes/app.routes")
var userRouter = require("./routes/user.router")
var formRouter = require("./routes/form.router")
var datasetRouter = require("./routes/dataset.router");




app.use("/", appRouter);
app.use("/user",userRouter);
app.use("/form",formRouter);
app.use("/dataset",datasetRouter);


app.listen(3000,function(request) {
    console.log("listening at: ", 3000);
})