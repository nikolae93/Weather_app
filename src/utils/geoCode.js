const request= require("request");

const geoCode = (adress, callback)=>{
    let geourl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(adress)}.json?access_token=pk.eyJ1Ijoibmlrb2xhZWttOTMiLCJhIjoiY2p5a2h2aDY5MGRqdDNocG1rdHVlb3ozaiJ9.ldeK5Z6jBF15OyVZKZBMQw&limit=1`;
 
    request({url:geourl, json:true},(error ,res)=>{
     if(error){callback("Unable to connect to geo services", undefined);}else
     if(res.body.features.length===0){callback("Unable to find location",undefined)}
     else{ 
       callback(undefined,{
           latitude:res.body.features[0].center[1],
           longitude: res.body.features[0].center[0],
           location:res.body.features[0].place_name
       });
      }
    });
 
 };

 module.exports = geoCode;