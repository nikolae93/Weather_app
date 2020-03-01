console.log("hello my friend");

function getSearchParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
  var params = {};
  var prmarr = prmstr.split("&");
  for ( var i = 0; i < prmarr.length; i++) {
      var tmparr = prmarr[i].split("=");
      params[tmparr[0]] = tmparr[1];
  }
  return params;
}

var params = getSearchParameters();

//console.log(params);

// Dom elements

let loca = document.getElementById("location");
loca.innerHTML = `Location : ${styleInputs(params.location)}`;

let timezone = document.getElementById("timezone");
timezone.innerHTML = `Timezone : ${params.timezone}`;

let latii = document.getElementById("latitude");
latii.innerHTML = `Latitude : ${params.lat}`;

let longii = document.getElementById("longitude");
longii.innerHTML = `Longitude : ${params.lon}`;

let summary = document.getElementById("summary");
summary.innerHTML = `Summary : ${styleInputs(params.sum)}`;

let temperature = document.getElementById("temperature");
temperature.innerHTML = `Temperature: ${params.t} degrees`;

let rain = document.getElementById("rain");
rain.innerHTML = `Rain probability: ${params.r}`;

// DOM ends

// JS change icon according to icon param

var icon = params.icon;
let iconDOM = document.getElementById("wimg");

console.log(icon);
//console.log(iconDOM);

if(icon === "clear-day"){
   iconDOM.scr="./img/clear-day.jpg";
}else if(icon === "clear-night"){
  iconDOM.scr="./img/clear-night.jpg";
}else if(icon === "rain"){
  iconDOM.src="./img/rain.png";
}else if(icon === "snow"){
  iconDOM.src="./img/snow.png";
}else if(icon === "sleet"){
  iconDOM.src="./img/sleet.png";
}else if(icon === "fog"){
  iconDOM.src="./img/fog.png";
}else if(icon === "cloudy"){
  iconDOM.src="./img/cloudy.png";
}else{
  iconDOM.src="./img/partly-cloudy.png";
}

function styleInputs(str){

  let fin = "";
  let f1="";
  let t ;

  for(let i=0;i<str.length;i++){
  
     t = str[i].charCodeAt();

     if( (t>=65 && t<=90) || (t>=97 && t<=122) ){
        fin+=str[i];
     }else{
       fin+=" ";
     }

  }

  for(let i=0;i<fin.length;i++){
    if(fin[i]===" " && fin[i+1]===" "){
      continue;
    }else{
      f1+= fin[i];
    }
  }

  f1 = f1.trim();
  
    return f1;
}

// let testString = "abg3467*%$%#  dfhASD";

// console.log(styleInputs(testString) );



function testWidth(){

   let w = window.outerWidth;
   //console.log(w);
   var main11 = document.getElementById("main1");
  
   if(w<=800){
     
      console.log("manje od 800");
      console.log(icon);

    if(icon === "clear-day"){
      main11.style.backgroundImage="url(./img/clear-day.jpg)";
   }else if(icon === "clear-night"){
    main11.style.backgroundImage="url(./img/clear-night.jpg)";
   }else if(icon === "rain"){
    main11.style.backgroundImage="url(./img/rain.png)";
   }else if(icon === "snow"){
    main11.style.backgroundImage="url(./img/snow.png)";
   }else if(icon === "sleet"){
    main11.style.backgroundImage="url(./img/sleet.png)";
   }else if(icon === "fog"){
    main11.style.backgroundImage="url(./img/fog.png)";
   }else if(icon === "cloudy"){
    main11.style.backgroundImage="url(./img/cloudy.png)";
   }else{
    main11.style.backgroundImage="url(./img/partly-cloudy.png)";
   }

   }

}

testWidth();