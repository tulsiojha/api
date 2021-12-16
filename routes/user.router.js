const express = require("express");
const { addUser, getAllUsers, getUserById, updateUser, deleteUser } = require("../controllers/user.controller");
const router = express.Router()


router.post("/adduser",addUser);
router.get("/getallusers",getAllUsers);
router.get("/getuser/:id",getUserById);
router.put("/updateuser/:id",updateUser);
router.delete("/deleteuser/:id",deleteUser);

module.exports = router