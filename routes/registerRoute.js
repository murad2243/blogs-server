const express = require("express")
const mongoose = require("mongoose")
const route = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const userModel = require("../models/userModel")
route.post("/register", async (req,res)=>{

    try {
        let {password} = req.body

        let newPass = await bcrypt.hash(password,4)

        const user = await userModel.create({...req.body, password: newPass})

        res.status(200).send(user)
    } catch (error) {
        console.log(error);
        res.send("server error")
    }

})
route.post("/login", async (req,res)=>{
// console.log(req.body);
const {email,password} = req.body
    try {
        const user = await userModel.findOne({email})

        let verify = await bcrypt.compare(password,user.password)
        // console.log(verify, user);
        if(verify){
            const token = await jwt.sign({userId: user._id}, "code07")

            res.status(200).send({
                msg:" loggin successfully",username: user.username,token
            })
        }
        else{
            res.send(501).send("wrong credentials")
        }

    } catch (error) {
        console.log(error);
        res.send("server error")
    }

})



module.exports = route