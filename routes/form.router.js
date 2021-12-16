const express = require("express");
const { addForm, getAllForms, getFormById, updateForm, deleteForm, getFormByFormId } = require("../controllers/forms.controller");
const router = express.Router()


router.post("/addform",addForm);
router.get("/getallforms",getAllForms);
router.get("/getform/:id",getFormById);
router.post("/getformbyformid",getFormByFormId);
router.put("/updateform/:id",updateForm);
router.delete("/deleteform/:id",deleteForm);

module.exports = router