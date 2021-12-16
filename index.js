const express = require('express');
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var appRouter = require("./routes/app.routes")
var userRouter = require("./routes/user.router")

app.use("/", appRouter);
app.use("/user",userRouter);


app.listen(3000,function(request) {
    console.log("listening at: ", 3000);
})