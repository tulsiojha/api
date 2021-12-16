const db = require("../Utils/db")

const createForm = (formId, formTemplateId, formJson)=>{
    return new Promise((resolve, reject)=>{
        db.query("INSERT INTO Forms (formId, formTemplateId, formJson) VALUES (?,?,?)",[formId, formTemplateId, formJson], function(err, res) {
            if(err){
                console.log("Error inserting Form: ",err);
                resolve({error:err, data:null})
            }else{
                resolve({error:null, data:res})
            }
        })
    })
}

const findForms = ()=>{
    return new Promise((resolve, reject)=>{
        db.query("SELECT * FROM Forms;",[],function(err, res) {
            if (err) {
                resolve({error:err, data:null});
            }else{
                resolve({error:null, data:res});
            }
        })
    })
}

const findFormById = (id)=>{
    return new Promise((resolve, reject)=>{
        db.query("SELECT * FROM Forms WHERE id=?;",[id],function(err, res) {
            if (err) {
                resolve({error:err, data:null});
            }else{
                resolve({error:null, data:res});
            }
        })
    })
}

const findFormByFormId = (formId)=>{
    return new Promise((resolve, reject)=>{
        db.query("SELECT * FROM Forms WHERE formId=?;",[formId],function(err, res) {
            if (err) {
                resolve({error:err, data:null});
            }else{
                resolve({error:null, data:res});
            }
        })
    })
}

const findFormByName = (name)=>{
    return new Promise((resolve, reject)=>{
        db.query("SELECT * FROM Forms WHERE name=?;",[name],function(err, res) {
            if (err) {
                resolve({error:err, data:null});
            }else{
                resolve({error:null, data:res});
            }
        })
    })
}

const modifyForm = (formId, formTemplateId, formJson, id)=>{
    return new Promise((resolve, reject)=>{
        db.query("UPDATE Forms SET formId=?, formTemplateId=?, formJson=? WHERE id=?;",[formId, formTemplateId, formJson, id],function(err, res) {
            if (err) {
                resolve({error:err, data:null});
            }else{
                resolve({error:null, data:res});
            }
        })
    })
}

const removeForm = (id)=>{
    return new Promise((resolve, reject)=>{
        db.query("DELETE FROM Forms WHERE id=?;",[id],function(err, res) {
            if (err) {
                resolve({error:err, data:null});
            }else{
                resolve({error:null, data:res});
            }
        })
    })
}

module.exports = {
    createForm,
    findForms,
    findFormById,
    findFormByName,
    findFormByFormId,
    modifyForm,
    removeForm
}