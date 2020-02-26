console.log("Greetings from front-end");

/* Button and input */
const button = document.getElementById("sbtbtn1");
const search = document.getElementById("inpmain1");

//test
//  var testvalue = "nema me";
// end test


button.addEventListener("click", (e)=>{
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

});