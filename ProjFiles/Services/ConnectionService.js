// $servername = "mysql4.gear.host";
//       $username = "mmplayerdb";
//       $password = "\$iva02071992mmplayer";
//       $dbName = "mmplayerdb";
//       $host = 3306;

var mysql = require('mysql');




module.exports =
{
  GetConnection1 : function (port){
	var con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "Yona128.",
      database: "proyec",
  insecureAuth : true
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	});
    return con;
  }
}


/*var mysql = require('mysql');
module.exports =
{
  GetConnection1 : function (port){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Yona128.",
      database: "proyec",
      port : 3000
    });
    con.connect(function(err) {
      if (err) throw err;
      console.log("Database Connected!");
    });
    return con;
  }
}
*/
