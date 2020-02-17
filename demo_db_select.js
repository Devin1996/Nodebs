var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ptms"
});

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM passengers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });



// The Fields Object
// The third parameter of the callback function is an array containing information about each field in the result.

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT name, address FROM passengers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(fields);
//   });
// });



// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT name, address FROM passengers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//where

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM passengers WHERE address = 'Park Lane 38'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


//wildcard

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM passengers WHERE address LIKE 'S%'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//Escaping Query Values

// con.connect(function(err) {
//   if (err) throw err;
//   var adr = 'Mountain 21';
//   //Escape the address value:
//   var sql = 'SELECT * FROM passengers WHERE address = ' + mysql.escape(adr);
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var adr = 'Mountain 21';
//   //Escape the address value:
//   var sql = 'SELECT * FROM passengers WHERE address = ?';
//   //Send an array with value(s) to replace the escaped values:
//   con.query(sql, [adr], function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var name = 'Amy';
//   var adr = 'Mountain 21';
//   //Escape the name and the address values:
//   var sql = 'SELECT * FROM passengers WHERE name = ? OR address = ?';
//   //Send an array with value(s) to replace the escaped values:
//   con.query(sql, [name, adr], function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


//order by

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM passengers ORDER BY name", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM passengers ORDER BY name DESC", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM passengers LIMIT 5";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//Start From Another Position

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM passengers LIMIT 5 OFFSET 2";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//shorter syntax

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM passengers LIMIT 2, 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});