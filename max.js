function max(niz){

  var m=-Infinity;

  for(var i=0;i<niz.length;i++){
   
    if(niz[i]>m){m=niz[i]}
  }

  return m;

}

function parni(niz){

    var rez=[];

    for(var i=0;i<niz.length;i++){

        if(niz[i]===0 || niz[i]%2===0){rez.push(niz[i])}

    }

    return rez;
}

var filter = function(){

}

var Ime ="Nik";
var Prezime= "Ekme";

var t;

var t=Ime;
Ime= Prezime;
Prezime=t;

[a,b]=[b,a]