
//const fs = require('fs').promises;

//const host = 'localhost';
const port = 8000;

//const fs = require("fs"), NOMBRE_ARCHIVO = "index.html";

// Se cargan los modulos necesarios.
//var subdomain = require('express-subdomain');
var express = require('express');
//var path = require('path');

// Crea una Express app.
var app = express();

// Para que los archivos estaticos queden disponibles.
app.use(express.static(__dirname + '/views'));

// Configurar pug con Express
app.set('view engine', 'pug');

// Para los Subdominios
//var router = express.Router();

//Variables para la pagina ---------------------------------------------------------
var src_dom = "https://www.hidroingelec.cl";
var src_desc = "Servicios de mantenimiento e instalación de equipos hidráulicos.";
var src_motto = "Ingeniería hidráulica y eléctrica.";
var src_title = "Hidroingelec";
var src_info = "Servicios y asesorías Hidroingelec S.P.A. Somos una empresa dedicada a trabajos de ingeniería hidráulica y eléctrica con alcance en todo el “Estado/departamento/región”, también contamos con una amplia gama de  productos para la venta.";
var src_vision = "Ser reconocidos por los valores y profesionalidad anticipando el futuro del área hídrica, a través de tecnología de vanguardia y el desarrollo del personal.";
var src_mision = "Ser líderes en asesoría y prestación de servicios en la captación, y abastecimiento de agua, proporcionar servicios integrales, soluciones flexibles a través de innovación tecnológica y gente comprometida, para así superar las expectativas de nuestros clientes.";
var src_address = "Calle fray Juan de ibarguen # 249 diagonal al hogar Alemán kolbe Alto comuna Osorno Los Lagos";

var src_contact =[
				{font: "fa fa-envelope-o", inner : "correo@mail.com", url : "mailto:correo@mail.com", title : "Correo Electronico", text : "Dirección de correo electrónico."},
				{font: "fa fa-phone", inner : "001001000", url : "tel:001001000", title : "Telefono", text : "Linea telefónica para atención al cliente."},
				{font: "fa fa-whatsapp", inner : "+58 414000000", url : "https://wa.me/58414000000", title : "WhatsApp", text : "WhatsApp oficial de la empresa."}
			]
var src_social =[
					{title : "Facebook", font : "fab fa-facebook-f", url : "/", text : "Siguenos en Facebook"}, 
					{title : "Twitter", font : "fab fa-twitter", url : "/", text : "Siguenos en Twitter"}, 
					{title : "Instagram", font : "fab fa-instagram", url : "/", text : "Siguenos en Instagram"}
				]
var src_links =	[
				{name : "Inicio", url : "/"}, 
				{name : "Contacto", url : "contacto"},
				{name : "Servicios", url : "servicios"},
				{name : "Galeria", url : "galeria"}
			]
var src_autor = {name : "Yona-TYT", url : "https://forum.simutrans.com/index.php?action=profile;u=8727"}
var src_lang =	[
				{name : "es", inner : "Español", url : "index.html"}, {name : "en", inner : "Ingles", url : "index.html"}
			]

var src_serv =	[
					{ sud : "servicios", id : "bombas", title : "Bombas", text : "Mantenimiento correctivo y preventivo en salas de bombas.", type : "Mantenimiento"},
					{ sud : "servicios", id : "estanques", title : "Estanques", text : "Venta e instalación de estanques de presión.", type : "instalación"},
					{ sud : "servicios", id : "piscinas", title : "Piscinas", text : "Limpieza y mantenimiento a piscinas.", type : "Mantenimiento"},
					{ sud : "servicios", id : "tableros", title : "Tableros", text : "Diseño y control en tableros de fuerza y control.", type : "Diseño"},
					{ sud : "servicios", id : "plantas", title : "Plantas", text : "Construcción de plantas de tratamiento.", type : "Diseño"},
					{ sud : "servicios", id : "terreno", title : "Técnicos", text : "Servicio Técnico en terreno.", type : "General"}
				]
//----------------------------------------------------------------------------------



app.get('/', function (req, res) {
	res.render('index', 
		{
			domain : src_dom, desc : src_desc, motto : src_motto, title : src_title,
			contact : src_contact, links : src_links, autor : src_autor, lang : src_lang,
			social : src_social, address : src_address, address : src_address, info : src_info,
			mision : src_mision, vision : src_vision
		}
	); 
});

app.get('/swiper', function (req, res) {
	res.render('swiper', 
		{
			serv : src_serv
		}
	); 
});

app.get('/contacto', function (req, res) {
	res.render('contacto',
		{
			domain : src_dom, desc : src_desc, motto : src_motto, title : src_title,
			contact : src_contact, links : src_links, autor : src_autor, lang : src_lang,
			social : src_social, address : src_address
		}
	); 
});

app.get('/servicios', function (req, res) {
	res.render('servicios',
		{
			domain : src_dom, desc : src_desc, motto : src_motto, title : src_title,
			contact : src_contact, links : src_links, autor : src_autor, lang : src_lang,
			social : src_social, address : src_address, serv : src_serv
		}
	); 
});

app.get('/galeria', function (req, res) {
	res.render('galeria',
		{
			domain : src_dom, desc : src_desc, motto : src_motto, title : src_title,
			contact : src_contact, links : src_links, autor : src_autor, lang : src_lang,
			social : src_social, address : src_address
		}
	); 
});
/*
app.get('/', function(req, res){
  res.sendfile(__dirname + '/pagina-proyecto/index.html');
  });
*/

//app.use(subdomain('api', router));

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));

