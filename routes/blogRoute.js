const express = require("express")
const mongoose = require("mongoose")
const route = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const authMiddleware = require("../middleware/authMiddleware")
const blogModel = require("../models/blogModel")
route.get("/blogs",authMiddleware, async (req,res)=>{

    try {
        let {title } = req.query;

        if(title){

            const blogs = await blogModel.find({title: title})
            res.status(200).send(blogs)
        }else{
            const blogs = await blogModel.find()
            res.status(200).send(blogs)
        }

    } catch (error) {
        console.log(error);
        res.send("server error")
    }

})

route.post("/blogs",authMiddleware, async (req,res)=>{
// console.log(req.body);
// const {username: }
    try {

        const blog = await blogModel.create({username: req.body.username, title: req.body.title, content: req.body.content,category: req.body.category,date: req.body.date, likes: req.body.likes, comments: req.body.comments  })
// console.log('post route for blogs');
        res.status(200).send(blog)

    } catch (error) {
        console.log(error);
        res.send("server error")
    }

})

route.get("/blogs/:id",authMiddleware, async (req,res)=>{
    // console.log(req.body);
    // const {username: }
        try {
            const id = req.params.id
            // console.log(id);
            const blog = await blogModel.find({_id: id})
            res.status(200).send(blog)
    
        } catch (error) {
            console.log(error);
            res.send("server error")
        }
    
    })
    route.delete("/blogs/:id",authMiddleware, async (req,res)=>{
        // console.log(req.body);
        // const {username: }
            try {
                const id = req.params.id
                console.log(id);
                const blog = await blogModel.findByIdAndDelete({_id: id})
                res.status(200).send(blog)
        
            } catch (error) {
                console.log(error);
                res.send("server error")
            }
        
        })
        route.patch("/blogs/:id",authMiddleware, async (req,res)=>{
            // console.log(req.body);
            // const {username: }
                try {
                    const id = req.params.id
                    // console.log(id);
                    const blog = await blogModel.findByIdAndUpdate( {_id : id}, req.body, {new : true} )
                    // console.log(blog);
                    res.status(200).send(blog)
            
                } catch (error) {
                    console.log(error);
                    res.send("server error")
                }
            
            })
            route.patch("/blogs/:id/like",authMiddleware, async (req,res)=>{
                // console.log(req.body);
                // const {username: }
                    try {
                        const id = req.params.id
                        // console.log(id);
                        // const current = await blogModel.find({_id: id})
                        // current = current.parse()
                        // let like =  +current.likes +1
                        // console.log(current.likes);
                        const blog = await blogModel.findByIdAndUpdate( {_id : id}, req.body, {new : true} )
                        // console.log(blog);
                        res.status(200).send(blog)
                
                    } catch (error) {
                        console.log(error);
                        res.send("server error")
                    }
                
                })
                route.patch("/blogs/:id/comment",authMiddleware, async (req,res)=>{
                    // console.log(req.body);
                    // const {username: }
                        try {
                            const id = req.params.id
                            const blog = await blogModel.findByIdAndUpdate( {_id : id}, req.body, {new : true} )
                            // console.log(blog);
                            res.status(200).send(blog)
                    
                        } catch (error) {
                            console.log(error);
                            res.send("server error")
                        }
                    
                    })
                    route.get("/api/blogs",authMiddleware, async (req,res)=>{
                        // console.log(req.body);
                        // const {username: }
                            try {
                                const id = req.params.id
                                const blog = await blogModel.findByIdAndUpdate( {_id : id}, req.body, {new : true} )
                                // console.log(blog);
                                res.status(200).send(blog)
                        
                            } catch (error) {
                                console.log(error);
                                res.send("server error")
                            }
                        
                        })
module.exports = route;