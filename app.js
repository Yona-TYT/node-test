
//const host = 'localhost';
var port = process.env.PORT || 3000;


// Se cargan los modulos necesarios.
//var subdomain = require('express-subdomain');
var express = require('express');

// Crea una Express app.
var app = express();

// Para que los archivos estaticos queden disponibles.
// Require static assets from public folder
var path = require('path');
app.use(express.static(path.join(__dirname, 'views')));

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

// Configurar pug con Express
app.set('view engine', 'pug');

// Base de datos ----------------------------------------------------------------
//var ConnService = require('./ProjFiles/Services/ConnectionService.js');
//var conn = ConnService.GetConnection1(port);
//------------------------------------------------------------------------------

// start the server listening for requests
var server = app.listen(port, function () {
    console.log("Listening on port %s...", server.address().port);
});

var routes = require("./ProjFiles/Services/routes.js")(app, /*conn*/ server);

