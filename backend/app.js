const express = require("express");
const app = express();
const bodyParser = require("body-parser"); 
const mongoose = require("mongoose"); 
const Post = require('./models/post');

mongoose.connect("mongodb+srv://uv:a@cluster0-fcy65.mongodb.net/node-angular?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connected to db')
})
.catch(()=>{
    console.log('connection failed');
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
        );
    res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS");
    next();
});


app.post("/api/posts",(req,res,next)=>{
    const post = new Post({
        title:req.body.title,
        content:req.body.content 
        });
    post.save();
    console.log(post);
    res.status(201).json({
        message:'Posts added Successfully'
    });

});

app.get("/api/posts", (req, res, next) => {
    res.status(200).json({
        message:'Posts fetched Successfully',
        posts:posts
    });
});
module.exports = app;
