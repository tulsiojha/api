const db = require("../Utils/db")

const createDataset = (name, attribute1, attribute2, attribute3, attribute4, displayfieldname, keyfieldname)=>{
    return new Promise((resolve, reject)=>{
        db.query("INSERT INTO Datasets (name, attribute1, attribute2, attribute3, attribute4, displayfieldname, keyfieldname) VALUES (?,?,?,?,?,?,?)",[name, attribute1, attribute2, attribute3, attribute4, displayfieldname, keyfieldname], function(err, res) {
            if(err){
                console.log("Error inserting Dataset: ",err);
                resolve({error:err, data:null})
            }else{
                resolve({error:null, data:res})
            }
        })
    })
}

const findDatasets = ()=>{
    return new Promise((resolve, reject)=>{
        db.query("SELECT * FROM Datasets;",[],function(err, res) {
            if (err) {
                resolve({error:err, data:null});
            }else{
                resolve({error:null, data:res});
            }
        })
    })
}

const findDatasetById = (id)=>{
    return new Promise((resolve, reject)=>{
        db.query("SELECT * FROM Datasets WHERE id=?;",[id],function(err, res) {
            if (err) {
                resolve({error:err, data:null});
            }else{
                resolve({error:null, data:res});
            }
        })
    })
}


const findDatasetByName = (name)=>{
    return new Promise((resolve, reject)=>{
        db.query("SELECT * FROM Datasets WHERE name=?;",[name],function(err, res) {
            if (err) {
                resolve({error:err, data:null});
            }else{
                resolve({error:null, data:res});
            }
        })
    })
}

const modifyDataset = (name, attribute1, attribute2, attribute3, attribute4, displayfieldname, keyfieldname, id)=>{
    return new Promise((resolve, reject)=>{
        db.query("UPDATE Datasets SET name=?, attribute1=?, attribute2=?, attribute3=?, attribute4=?, displayfieldname=?, keyfieldname=? WHERE id=?;",[name, attribute1, attribute2, attribute3, attribute4, displayfieldname, keyfieldname, id],function(err, res) {
            if (err) {
                resolve({error:err, data:null});
            }else{
                resolve({error:null, data:res});
            }
        })
    })
}


const removeDataset = (id)=>{
    return new Promise((resolve, reject)=>{
        db.query("DELETE FROM Datasets WHERE id=?;",[id],function(err, res) {
            if (err) {
                resolve({error:err, data:null});
            }else{
                resolve({error:null, data:res});
            }
        })
    })
}

module.exports = {
    createDataset,
    findDatasets,
    findDatasetById,
    findDatasetByName,
    modifyDataset,
    removeDataset
}