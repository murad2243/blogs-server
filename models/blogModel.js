const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    username:{type: String, require: true},
    title :{type: String, require: true},
    content:{type: String, require: true},
    category:{type: String, require: true},
    date:{type: String, require: true},
    likes:{type: Number, require: true},
    comments:[{username: String, content: String}]
})
const blogModel = mongoose.model("blog",blogSchema)
module.exports = blogModel