const request = require("request");

const forecast = (longi,lati, callback) => {

let url =`https://api.darksky.net/forecast/c3fe8a36dd6839cfdde1977f79666626/${longi},${lati}?units=si`;

request({url:url, json:true},(error,res)=>{
   if(error){callback("Unable to connect to the dark sky api",undefined);}else 
   if(res.body.error){callback("Unable to find location",undefined);} else{
       callback(undefined,{
          summary:res.body.currently.summary,
          temp: res.body.currently.temperature,
          rainProb: res.body.currently.precipProbability,
          data:res.body
       });
   }
});

}


module.exports = forecast; 