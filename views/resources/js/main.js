 // JavaScript source code
function inicializar() {
	var pos = {x : -40.5654982563697, y : -73.11012964548388}
    //Opciones del mapa
    var OpcionesMapa = {
        center: new google.maps.LatLng(pos.x, pos.y),
        mapTypeId: google.maps.MapTypeId.ROADMAP, //ROADMAP  SATELLITE HYBRID TERRAIN
        zoom: 18
    };
 
    var miMapa;
    //constructor
    miMapa = new google.maps.Map(document.getElementById('mapa'), OpcionesMapa);
 
    //Añadimos el marcador
    var Marcador = new google.maps.Marker({
                    position: new google.maps.LatLng(pos.x, pos.y),
                    map: miMapa,
                    title:"Mi Ubicacion"
                });
}
 
function CargaScript() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCAaD6blEoGnz-gDosCW24wC0Tv1Pt0Yds&callback=inicializar';
    document.body.appendChild(script);                 
}
 
window.onload = CargaScript;
