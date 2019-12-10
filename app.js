// Basic setup

var express = require("express");
var app=express();
var path= require("path")

const hbs = require("hbs");

var port = 3000 || process.env.PORT ;


app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(__dirname));


//ROUTES

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/src/index.html"));
});

app.get("/about",(req,res)=>{
  res.sendFile(path.join(__dirname,"/src/About.html"));
});

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"/src/404.html"));
});


//PORT
app.listen(port,()=>{
  console.log("radi");
});
