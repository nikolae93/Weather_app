console.log("Greetings from front-end");

/* Button and input */
const button = document.getElementById("sbtbtn1");
const search = document.getElementById("inpmain1");

//test
//  var testvalue = "nema me";
// end test


button.addEventListener("click", 

(e)=>{
   e.preventDefault(); 

   let location= search.value;

  fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{

     response.json().then((d)=>{

        if(d.error){
          console.log(d.error);
        }else {

          console.log(d);

            let loc= d.location;
            let tz = d.forecast.data.timezone;
            let lat = d.forecast.data.latitude;
            let lon = d.forecast.data.longitude;
            let s=d.forecast.summary;
            let ic= d.forecast.data.currently.icon;
            let t= d.forecast.temp;
            let r = d.forecast.rainProb;
            
          //  let arr =[loc,tz,lat,lon,s,ic,t,r];
          //  console.log(arr);

       // console.log(data.location);
         // console.log(`Summary: ${data.forecast.summary} ,Temperature:${data.forecast.temp}
         //   Probability of rain: ${data.forecast.rainProb}
         // `);
        // console.log(data.forecast);
       // setTimeout(()=>{window.location.replace(`http://localhost:3000/weatherform`);},3000)
   //     window.location.replace(
   // `http://localhost:3000/weatherform?summary=${data.forecast.summary}&temp=${data.forecast.temp}&rain=${data.forecast.rainProb}&location=${data.location}`);

      window.location.replace(`http://localhost:3000/weatherform?location=${loc}&timezone=${tz}&lat=${lat}&lon=${lon}&sum=${s}&icon=${ic}&t=${t}&r=${r}`);

        }

     });

  });


  // window.location.replace(`http://localhost:3000/weatherform`);

}

);

/*

(e)=>{
    e.preventDefault(); 
 
    let location= search.value;

   fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{

      response.json().then((data)=>{

         if(data.error){
           console.log(data.error);
         }else {

         console.log(data.location)
          console.log(`Summary: ${data.forecast.summary} ,Temperature:${data.forecast.temp}
            Probability of rain: ${data.forecast.rainProb}
          `);

         // console.log(data.forecast);

         }

      });

   });

}

*/