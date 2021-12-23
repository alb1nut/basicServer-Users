const { response } = require("express");

const { BasicServer } = require('../models/basicServer');

const getAllUsers =(req , res) => {
    BasicServer.find()
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) =>{
        res.status(500).send("an error occured");
    })
    
}


const createUser =(req,res) => {
    const user = new BasicServer(req.body);
    BasicServer.save()
    .then(response =>{
        res.status(201).send("User has been created")
    }).catch(err => {
        console.log(err);
        res.status(200).send("an error occured",err);
    })
}

module.exports={
  getAllUsers,
  createUser,
}