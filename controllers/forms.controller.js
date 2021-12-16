const { createForm, findForms, findFormById, modifyForm, removeForm, findFormByFormId } = require("../models/forms.model");

const getAllForms = async (req, res, next)=>{
    
    const outForm = await findForms();
    if (outForm.error) {
        res.status(400).json({message:outForm.err})
    }else{
        res.status(200).json({message:outForm.data})
    }
}

const getFormById = async (req, res, next)=>{
    console.log(req.params);
    try {
        if (!req.params) {
            res.status(400).json({message:"Error: something went wrong"}); 
            return
        }
        if (!req.params.id) {
            res.status(400).json({message:"Error: please provide Form id"}); 
            return
        }
        const outForm = await findFormById(req.params.id);
        if (outForm.error) {
            res.status(400).json({message:outForm.err})
        }else{
            res.status(200).json({message:outForm.data})
        }
    } catch (error) {
        res.status(200).json({message:"Error: something went wrong"})
    }
}

const getFormByFormId = async (req, res, next)=>{
    console.log(req.body);
    try {
        if (!req.body) {
            res.status(400).json({message:"Error: something went wrong"}); 
            return
        }
        if (!req.body.formId) {
            res.status(400).json({message:"Error: please provide FormID"}); 
            return
        }
        const outForm = await findFormByFormId(req.body.formId);
        if (outForm.error) {
            res.status(400).json({message:outForm.err})
        }else{
            res.status(200).json({message:outForm.data})
        }
    } catch (error) {
        res.status(200).json({message:"Error: something went wrong"})
    }
}

const addForm = async (req, res, next)=>{
    // console.log(req.body);
    if (!req.body) {
        res.status(400).json({message:"Error: something went wrong"});
        return
    }
    const data = req.body;
    console.log(data);

    if (data.formId === "" || data.formTemplateId === "" || data.formJson === "") {
        res.status(400).json({message:"Error: some fields are empty"});
    }else{
        const outForm = await createForm(data.formId, data.formTemplateId, data.formJson);
        if (outForm.error) {
            res.status(400).json({message:outForm.err})
        }else{
            res.status(200).json({message:outForm.data})
        }
    }
    
}

const updateForm = async (req, res, next)=>{
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

    if (data.formId === "" || data.formTemplateId === "" || data.formJson === "" || req.params.id === "") {
        res.status(400).json({message:"Error: some fields are empty"});
    }else{
        const outForm = await modifyForm(data.formId, data.formTemplateId, data.formJson, req.params.id);
        if (outForm.error) {
            res.status(400).json({message:outForm.err})
        }else{
            res.status(200).json({message:outForm.data})
        }
    }
}

const deleteForm = async (req, res, next)=>{
    if (!req.params) {
        res.status(400).json({message:"Error: something went wrong"}); 
        return
    }
    if (!req.params.id) {
        res.status(400).json({message:"Error: please provide Form id"}); 
        return
    }
    const outForm = await removeForm(req.params.id);
    if (outForm.error) {
        res.status(400).json({message:outForm.err})
    }else{
        res.status(200).json({message:outForm.data})
    }
}


module.exports = {
    getAllForms,
    getFormById,
    getFormByFormId,
    addForm,
    updateForm,
    deleteForm
}
