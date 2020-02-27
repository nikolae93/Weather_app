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
loca.innerHTML = `Location : ${params.location}`;

let timezone = document.getElementById("timezone");
timezone.innerHTML = `Timezone : ${params.timezone}`;

let latii = document.getElementById("latitude");
latii.innerHTML = `Latitude : ${params.lat}`;

let longii = document.getElementById("longitude");
longii.innerHTML = `Longitude : ${params.lon}`;

let summary = document.getElementById("summary");
summary.innerHTML = `Summary : ${params.sum}`;

let temperature = document.getElementById("temperature");
temperature.innerHTML = `Temperature: ${params.t} degrees`;

let rain = document.getElementById("rain");
rain.innerHTML = `Rain probability: ${params.r}`;

// DOM ends

// JS change icon according to icon param

let icon = params.icon;
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