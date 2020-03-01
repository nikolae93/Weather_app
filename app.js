// Basic setup

var express = require("express");
var app=express();
var path= require("path")

const hbs = require("hbs");

var port =  process.env.PORT || 3000  ;


app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(__dirname));

// API 
const geoCode = require("./src/utils/geoCode.js");
const forecast = require("./src/utils/forecast.js");


//ROUTES

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/src/index.html"));
});


app.get("/weather",(req,res)=>{

  if(req.query.address){

    geoCode(req.query.address, (error, geoData)=>{
        if(error){return res.send({error:"Error in Geocode"})}
     
        forecast(geoData.latitude, geoData.longitude, (error, forecastData) => {
         if(error){return res.send({error:"Error in DarkSky api"});}
         res.send({
            forecast:forecastData,
           
            location:req.query.address,
            data: req.data
            
         });

      //  res.redirect("http://localhost:3000/weatherform");
       });
   
   });
 
  }else{

  res.send({
     error:"You must provide the location"
  });

  }

});

app.get("/weatherform",(req,res)=>{
   res.sendFile(path.join(__dirname,"/src/weather.html"));
})

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
