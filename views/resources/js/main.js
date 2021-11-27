 // JavaScript source code
function inicializar() {
    //Opciones del mapa
    var OpcionesMapa = {
        center: new google.maps.LatLng(10.199928499167672, -71.31148338317873),
        mapTypeId: google.maps.MapTypeId.ROADMAP, //ROADMAP  SATELLITE HYBRID TERRAIN
        zoom: 18
    };
 
    var miMapa;
    //constructor
    miMapa = new google.maps.Map(document.getElementById('mapa'), OpcionesMapa);
 
    //Añadimos el marcador
    var Marcador = new google.maps.Marker({
                    position: new google.maps.LatLng(10.199928499167672, -71.31148338317873),
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
