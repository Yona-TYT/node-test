

module.exports =
{
  pageset : function (app,all_serv){
	//Variables para la pagina ---------------------------------------------------------
	//Informacion general----------------------------------------------------------------------------------------------------------------------
	var src_dom = "https://www.hidroingelec.cl";
	var src_desc = "Servicios de mantenimiento e instalación de equipos hidráulicos.";
	var src_motto = "Ingeniería hidráulica y eléctrica.";
	var src_title = "Hidroingelec";
	var src_info = "Servicios y asesorías Hidroingelec S.P.A. Somos una empresa dedicada a trabajos de ingeniería hidráulica y eléctrica con alcance en la región de Los Lagos, región de Los Rios y La Araucanía, también contamos con una amplia gama de  productos para la venta.";
	var src_vision = "Ser reconocidos por los valores y profesionalidad anticipando el futuro del área hídrica, a través de tecnología de vanguardia y el desarrollo del personal.";
	var src_mision = "Ser líderes en asesoría y prestación de servicios en la captación, y abastecimiento de agua, proporcionar servicios integrales, soluciones flexibles a través de innovación tecnológica y gente comprometida, para así superar las expectativas de nuestros clientes.";
	var src_address = "Calle fray Juan de ibarguen # 249 diagonal al hogar Alemán kolbe Alto comuna Osorno Los Lagos";
	// -------------------------------------------------------------------------------------------------------------------------------------------------

	//Menus , enlaces  etc ----------------------------------------------------------------------------
	var src_contact =[
					{font: "fa fa-envelope-o", inner : "correo@mail.com", url : "mailto:correo@mail.com", title : "Correo Electronico", text : "Dirección de correo electrónico."},
					{font: "fa fa-phone", inner : "001001000", url : "tel:001001000", title : "Telefono", text : "Linea telefónica para atención al cliente."},
					{font: "fa fa-whatsapp", inner : "+58 414000000", url : "https://wa.me/58414000000", title : "WhatsApp", text : "WhatsApp oficial de la empresa."}
				];
	var src_social =[
						{title : "Facebook", font : "fab fa-facebook-f", url : "/", text : "Siguenos en Facebook"}, 
						{title : "Twitter", font : "fab fa-twitter", url : "/", text : "Siguenos en Twitter"}, 
						{title : "Instagram", font : "fab fa-instagram", url : "/", text : "Siguenos en Instagram"}
					];
	var src_links =	[
					{name : "Inicio", url : "/"}, 
					{name : "Contacto", url : "contacto"},
					{name : "Servicios", url : "servicios"},
					{name : "Galeria", url : "galeria"},
					{name : "Vídeos", url : "videos"}
				];
	var src_autor = {name : "Yona-TYT", url : "https://forum.simutrans.com/index.php?action=profile;u=8727"};
	var src_lang =	[
					{name : "es", inner : "Español", url : "index.html"}, {name : "en", inner : "Ingles", url : "index.html"}
				];

	//-----------------------------------------------------------------------------------------------------
	//Videos --------------------------------------------------------------------------------------------
	var video_list =	[
							{src : "video_1", text : "Desc Video", img : "poster_1.png", post : false},
							{src : "video_1", text : "Desc Video", img : "poster_1.png", post : false},
							{src : "video_1", text : "Desc Video", img : "poster_1.png", post : false},
							{src : "video_1", text : "Desc Video", img : "poster_1.png", post : true},
							{src : "video_2", text : "Stephen Bishop- Losing Myself In You (Bish, 1978)", img : "poster_1.png", post : false}
						]

	//Servicios --------------------------------------------------------------------------------------------
	var cat_list = {vis : "visita", agu : "agua", equ : "equipos", man : "mantenimiento", ele : "electrico"};
	/*var all_serv =	[
						{
						  swiper : true, category : cat_list.equ, id : "bombas", title : "Bombas", img : 1,
						  text : "Mantenimiento correctivo y preventivo en salas de bombas.", type : "Mantenimiento"
						},
						{ 
						  swiper : true, category : cat_list.agu, id : "estanques", title : "Estanques", img : 2,
					 	  text : "Venta e instalación de estanques de presión.", type : "instalación"
						},
						{ 
						  swiper : true, category : cat_list.man, id : "piscinas", title : "Piscinas",img : 3,
						  text : "Limpieza y mantenimiento a piscinas.", type : "Mantenimiento"
						},
						{ 
						  swiper : true, category : cat_list.ele, id : "tableros", title : "Tableros",img : 4,
						  text : "Diseño y control en tableros de fuerza y control.", type : "Diseño"
						},
						{
						  swiper : true, category : cat_list.agu, id : "plantas", title : "Plantas",img : 5,
						  text : "Construcción de plantas de tratamiento.", type : "Diseño"
						},
						{
						  swiper : true, category : cat_list.vis, id : "terreno", title : "Técnicos",img : 6,
						  text : "Servicio Técnico en terreno.", type : "General"
						}
					];
	*/

	var src_swiper = [];

	//Servicios por categoria
	var elm_siz = 5; //cat_list.length;
	var src_list_elem = new Array(elm_siz);

	//Se inicializan los array bidimencionales
	for(var j = 0; j<elm_siz;j++){
		src_list_elem[j] = new Array();
		//console.log(""+j);
	}

	//Se crea la lista para los servicios en swiper y las categorias añ inicio
	all_serv.forEach(function(serv) {
		if(serv.swiper) {
			src_swiper.push(
							{ 
								id : serv.id, title : serv.title, img : serv.img, text : serv.text, type : serv.type
							}
						);
		}
		if(serv.category == cat_list.vis){
			src_list_elem[0].push({text : serv.text, id : serv.id});
			//console.log(serv.text);
		}
		else if(serv.category == cat_list.agu){
			src_list_elem[1].push({text : serv.text, id : serv.id});
			//console.log(serv.text);
		}
		else if(serv.category == cat_list.equ){
			src_list_elem[2].push({text : serv.text, id : serv.id});
			//console.log(serv.text);
		}
		else if(serv.category == cat_list.man){
			src_list_elem[3].push({text : serv.text, id : serv.id});
			//console.log(serv.text);
		}
		else if(serv.category == cat_list.ele){
			src_list_elem[4].push({text : serv.text, id : serv.id});
			//console.log(serv.text);
		}
	  //console.log(serv.text);
	});
	//----------------------------------------------------------------------------------

	app.get('/', function (req, res) {
		res.render('index', 
			{
				domain : src_dom, desc : src_desc, motto : src_motto, title : src_title,
				contact : src_contact, links : src_links, autor : src_autor, lang : src_lang,
				social : src_social, address : src_address, address : src_address, info : src_info,
				mision : src_mision, vision : src_vision, list_elem : src_list_elem
			}
		); 
	});

	app.get('/swiper', function (req, res) {
		res.render('swiper', 
			{
				serv : src_swiper, links : src_links
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
				social : src_social, address : src_address, serv : all_serv
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

	app.get('/videos', function (req, res) {
		res.render('videos',
			{
				domain : src_dom, desc : src_desc, motto : src_motto, title : src_title,
				contact : src_contact, links : src_links, autor : src_autor, lang : src_lang,
				social : src_social, address : src_address, video : video_list
			}
		); 
	});
	app.get('/player', function (req, res) {
		res.render('player',
			{
				domain : src_dom, desc : src_desc, motto : src_motto, title : src_title,
				contact : src_contact, links : src_links, autor : src_autor, lang : src_lang,
				social : src_social, address : src_address, video : video_list
			}
		); 
	});

  }
}




