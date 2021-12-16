const db = require("../Utils/db")

const createUser = (firstname, lastname, email)=>{
    return new Promise((resolve, reject)=>{
        db.query("INSERT INTO users (firstname, lastname, email) VALUES (?,?,?)",[firstname, lastname, email], function(err, res) {
            if(err){
                console.log("Error inserting user: ",err);
                resolve({error:err, data:null})
            }else{
                resolve({error:null, data:res})
            }
        })
    })
}

const findUsers = ()=>{
    return new Promise((resolve, reject)=>{
        db.query("SELECT * FROM users;",[],function(err, res) {
            if (err) {
                resolve({error:err, data:null});
            }else{
                resolve({error:null, data:res});
            }
        })
    })
}

const findUserById = (id)=>{
    return new Promise((resolve, reject)=>{
        db.query("SELECT * FROM users WHERE id=?;",[id],function(err, res) {
            if (err) {
                resolve({error:err, data:null});
            }else{
                resolve({error:null, data:res});
            }
        })
    })
}

const modifyUser = (firstname, lastname, email, id)=>{
    return new Promise((resolve, reject)=>{
        db.query("UPDATE users SET firstname=?, lastname=?, email=? WHERE id=?;",[firstname, lastname, email, id],function(err, res) {
            if (err) {
                resolve({error:err, data:null});
            }else{
                resolve({error:null, data:res});
            }
        })
    })
}


const removeUser = (id)=>{
    return new Promise((resolve, reject)=>{
        db.query("DELETE FROM users WHERE id=?;",[id],function(err, res) {
            if (err) {
                resolve({error:err, data:null});
            }else{
                resolve({error:null, data:res});
            }
        })
    })
}

module.exports = {
    createUser,
    findUsers,
    findUserById,
    modifyUser,
    removeUser
}