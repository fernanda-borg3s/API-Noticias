const mongoose = require("mongoose");
const userService = require('../services/user.service');

const validId = (req, res, next) => {
    const id = req.params.id
    //teste e validar id
        if(mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send({message: "Invalid id"});
        }
};

const validUser = async (req, res, next) => {
    const id = req.params.id;
    const user = await userService.findById(id);

    if(!user){
        return res.status(400).send({message: "User not found"});
    }
};

module.exports = { validId, validUser };