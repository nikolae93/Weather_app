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

console.log(params);

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