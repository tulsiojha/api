const express = require("express");
const router = express.Router();



router.get("/", async (req, res, next)=>{
    res.send("Welcome to Home page");
    // next()
})


module.exports = router;