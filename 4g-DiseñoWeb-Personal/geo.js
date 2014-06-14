var geo = navigator.geolocation;
var opciones = {};

function geo_error(){
	console.log("Hhhhmm... thisn is akward... no puedo saber donde estas");
}

function geo_exito(posicion){
	//console.log(posicion);
	var lat = posicion.coords.latitude;
	var lon = posicion.coords.longitude;
	var map = new Image();
}

geo.getCurrentPosition(geo_exito, geo_error, opciones);