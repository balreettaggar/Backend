// index.js isthe file that would be run over the server

const mongoose = require("mongoose"); // made a variable mongoose to fetch the mongoose package, it would create the database whenver this index.js will be executed

mongoose.connect("mongodb://127.0.0.1:27017/blog-website").then(e=>console.log("MongoDb Connected"))

const express = require("express");

const app = express();

app.get('/', function(req, res){
    res.send("hii");
}) //req and res stands for request and respond

app.listen(3000, function(){
    console.log("Server is ready")
});


// means hmara application kis port number pe listen hona chahiye