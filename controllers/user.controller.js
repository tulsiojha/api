const { createUser, findUsers, findUserById, modifyUser, removeUser } = require("../models/user.model");

const getAllUsers = async (req, res, next)=>{
    
    const outUser = await findUsers();
    if (outUser.error) {
        res.status(400).json({message:outUser.err})
    }else{
        res.status(200).json({message:outUser.data})
    }
}

const getUserById = async (req, res, next)=>{
    console.log(req.params);
    try {
        if (!req.params) {
            res.status(400).json({message:"Error: something went wrong"}); 
            return
        }
        if (!req.params.id) {
            res.status(400).json({message:"Error: please provide user id"}); 
            return
        }
        const outUser = await findUserById(req.params.id);
        if (outUser.error) {
            res.status(400).json({message:outUser.err})
        }else{
            res.status(200).json({message:outUser.data})
        }
    } catch (error) {
        res.status(200).json({message:"Error: something went wrong"})
    }
}

const addUser = async (req, res, next)=>{
    // console.log(req.body);
    if (!req.body) {
        res.status(400).json({message:"Error: something went wrong"});
        return
    }
    const data = req.body;

    if (data.firstname === "" || data.lastname === "" || data.email === "") {
        res.status(400).json({message:"Error: some fields are empty"});
    }else{
        const outUser = await createUser(data.firstname, data.lastname, data.email);
        if (outUser.error) {
            res.status(400).json({message:outUser.err})
        }else{
            res.status(200).json({message:outUser.data})
        }
    }
    
}

const updateUser = async (req, res, next)=>{
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

    if (data.firstname === "" || data.lastname === "" || data.email === "" || req.params.id === "") {
        res.status(400).json({message:"Error: some fields are empty"});
    }else{
        const outUser = await modifyUser(data.firstname, data.lastname, data.email, req.params.id);
        if (outUser.error) {
            res.status(400).json({message:outUser.err})
        }else{
            res.status(200).json({message:outUser.data})
        }
    }
}

const deleteUser = async (req, res, next)=>{
    if (!req.params) {
        res.status(400).json({message:"Error: something went wrong"}); 
        return
    }
    if (!req.params.id) {
        res.status(400).json({message:"Error: please provide user id"}); 
        return
    }
    const outUser = await removeUser(req.params.id);
    if (outUser.error) {
        res.status(400).json({message:outUser.err})
    }else{
        res.status(200).json({message:outUser.data})
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
}
