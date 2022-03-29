var bodyParser = require('body-parser')


var page = require('./page.js');



var appRouter = function(app, /*conn*/ server)
{
	//var pgeset = page.pageset(app);

	//Importar datos CSV ------------------------------------------------------
	const csvtojson = require('csvtojson');

	const fileName = __dirname + "/data-services.csv";

	var all_serv =	[];

	csvtojson().fromFile(fileName).then(source => {

		// Fetching the data from each row 
		// and inserting to the table "sample"
		for (var i = 0; i < source.length; i++) {
			var id = source[i]["id"], title = source[i]["title"], text = source[i]["text"], category = source[i]["category"],
			type = source[i]["type"], img = source[i]["img"], swiper = source[i]["swiper"];

			all_serv.push({swiper : swiper, category : category, id : id, title : title, img : img, text : text, type : type});
		}
		//Inicia la pagina
		page.pageset(app,all_serv);

	});
//---------------------------------------------------------------------------


/*
	//Crear tabla en mysql ---------------------------------------------------
	conn.query("DROP TABLE service_data", 
	(err, drop) => {
		// Query to create table "sample"
		var sql = "CREATE TABLE service_data(id char(50), title char(50), text char(200), category char(50), type char(50), img int, swiper int)"

		// Creating table "sample"
		conn.query(sql, (err, drop) => {
			if (err)
				console.log("ERROR: ", err);

			//Importar datos CSV ------------------------------------------------------
			const csvtojson = require('csvtojson');

			const fileName = __dirname + "/data-services.csv";

			csvtojson().fromFile(fileName).then(source => {

				// Fetching the data from each row 
				// and inserting to the table "sample"
				for (var i = 0; i < source.length; i++) {
					var id = source[i]["id"], title = source[i]["title"], text = source[i]["text"], category = source[i]["category"],
					type = source[i]["type"], img = source[i]["img"], swiper = source[i]["swiper"];

					var insertStatement = "INSERT INTO service_data values(?, ?, ?, ?, ?, ?, ?)";
					var items = [id, title, text, category, type, img, swiper];

					// Inserting data of current row
					// into database
					conn.query(insertStatement, items, (err, results, fields) => {
						if (err) {
							console.log("Unable to insert item at row ", i + 1);
							return console.log(err);
						}
					});
				}
				console.log("All items stored into database successfully");
			});


			//---------------------------------------------------------------------------


		});
	});
	//--------------------------------------------------------------------------
*/



/*
	//Inserta datos en mysql ---------------------------------------------------

      var sql = "INSERT INTO proyec (id, tyt ) VALUES ("+0+", '5554')";
      conn.query(sql, function (err, result)
      {
        if (err)
        {
          return console.error(err.message);
          // throw err;
        }
        else
        {

		// get inserted id
		console.log('Todo Id:' + result.insertId);
        }
        // conn.end();
      });
		//--------------------------------------------------------------------------




	//Muestra datos de mysql ---------------------------------------------------
    sql = "Select * FROM proyec";
    conn.query(sql, function (err, result)
    {
        console.log("Got all results successfully");
      if (err)
      {
        throw err;
      }
      else
      {
        //console.log("Got all results successfully");
        // for (var i = 0; i < result.length; i++)
        // {
        //   var row = result[i];
        //   console.log(row.userName);
        // }
        var data1 = JSON.stringify(result);
        // console.log("Result :  ", data1);
        // return data1;
        respObject = "Got all results successfullyyyyyyy";
       // console.log(respObject);
        //res.send(data1);
       console.log(result);
      }
      // conn.end();
    });
	//-----------------------------------------------------------------------------


*/


}
module.exports = appRouter;

//http://localhost:3000/account?username=nraboy
