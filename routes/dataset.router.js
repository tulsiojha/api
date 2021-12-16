const express = require("express");
const { addDataset, getAllDatasets, getDatasetById, updateDataset, deleteDataset, getDatasetByName } = require("../controllers/datasets.controller");
const router = express.Router()


router.post("/adddataset",addDataset);
router.get("/getalldatasets",getAllDatasets);
router.get("/getdataset/:id",getDatasetById);
router.post("/getdatasetbyname",getDatasetByName);
router.put("/updatedataset/:id",updateDataset);
router.delete("/deletedataset/:id",deleteDataset);

module.exports = router