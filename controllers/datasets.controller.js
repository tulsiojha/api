const { createDataset, findDatasets, findDatasetById, modifyDataset, removeDataset, findDatasetByName } = require("../models/datasets.model");

const getAllDatasets = async (req, res, next)=>{
    
    const outDataset = await findDatasets();
    if (outDataset.error) {
        res.status(400).json({message:outDataset.err})
    }else{
        res.status(200).json({message:outDataset.data})
    }
}

const getDatasetById = async (req, res, next)=>{
    console.log(req.params);
    try {
        if (!req.params) {
            res.status(400).json({message:"Error: something went wrong"}); 
            return
        }
        if (!req.params.id) {
            res.status(400).json({message:"Error: please provide Dataset id"}); 
            return
        }
        const outDataset = await findDatasetById(req.params.id);
        if (outDataset.error) {
            res.status(400).json({message:outDataset.err})
        }else{
            res.status(200).json({message:outDataset.data})
        }
    } catch (error) {
        res.status(200).json({message:"Error: something went wrong"})
    }
}


const getDatasetByName = async (req, res, next)=>{
    console.log(req.body);
    try {
        if (!req.body) {
            res.status(400).json({message:"Error: something went wrong"}); 
            return
        }
        if (!req.body.name) {
            res.status(400).json({message:"Error: please provide Dataset name"}); 
            return
        }
        const outDataset = await findDatasetByName(req.body.name);
        if (outDataset.error) {
            res.status(400).json({message:outDataset.err})
        }else{
            res.status(200).json({message:outDataset.data})
        }
    } catch (error) {
        res.status(200).json({message:"Error: something went wrong"})
    }
}

const addDataset = async (req, res, next)=>{
    // console.log(req.body);
    if (!req.body) {
        res.status(400).json({message:"Error: something went wrong"});
        return
    }
    const data = req.body;
    console.log(data);

    if (data.name === "" || data.attribute1 === "" || data.attribute2 === "" || data.attribute3 === "" || data.attribute4 === "" || data.displayfieldname === "" || data.keyfieldname === "") {
        res.status(400).json({message:"Error: some fields are empty"});
    }else{
        const outDataset = await createDataset(data.name, data.attribute1, data.attribute2, data.attribute3, data.attribute4, data.displayfieldname, data.keyfieldname);
        if (outDataset.error) {
            res.status(400).json({message:outDataset.err})
        }else{
            res.status(200).json({message:outDataset.data})
        }
    }
    
}

const updateDataset = async (req, res, next)=>{
    if (!req.body) {
        res.status(400).json({message:"Error: something went wrong"});
        return
    }
    if (!req.params) {
        res.status(400).json({message:"Error: something went wrong"});
        return
    }

    if (!req.params.id) {
        res.status(400).json({message:"Error: please provide id to update"});
        return
    }

    const data = req.body;

    if (data.name === "" || data.attribute1 === "" || data.attribute2 === "" || data.attribute3 === "" || data.attribute4 === "" || data.displayfieldname === "" || data.keyfieldname === "" || req.params.id === "") {
        res.status(400).json({message:"Error: some fields are empty"});
    }else{
        const outDataset = await modifyDataset(data.name, data.attribute1, data.attribute2, data.attribute3, data.attribute4, data.displayfieldname, data.keyfieldname, req.params.id);
        if (outDataset.error) {
            res.status(400).json({message:outDataset.err})
        }else{
            res.status(200).json({message:outDataset.data})
        }
    }
}

const deleteDataset = async (req, res, next)=>{
    if (!req.params) {
        res.status(400).json({message:"Error: something went wrong"}); 
        return
    }
    if (!req.params.id) {
        res.status(400).json({message:"Error: please provide Dataset id"}); 
        return
    }
    const outDataset = await removeDataset(req.params.id);
    if (outDataset.error) {
        res.status(400).json({message:outDataset.err})
    }else{
        res.status(200).json({message:outDataset.data})
    }
}


module.exports = {
    getAllDatasets,
    getDatasetById,
    getDatasetByName,
    addDataset,
    updateDataset,
    deleteDataset
}
