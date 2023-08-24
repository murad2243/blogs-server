const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const registerRoute = require("./routes/registerRoute")
const blogRoute = require("./routes/blogRoute")
app.use(express.json())
app.use(cors())

app.use("/api",registerRoute)

app.get("/",(req,res)=>{
    res.send("working")
})
app.use("/api", blogRoute)

app.listen(8080, async () =>{
    try {
        
        await mongoose.connect("mongodb+srv://murad:murad@cluster0.8j6egxm.mongodb.net/?retryWrites=true&w=majority")
        console.log('connected on 8080');
    } catch (error) {
        console.log(error);
    }
})