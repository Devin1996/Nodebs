//open for writing
var fs = require('fs');

//take a flag as the second argument

fs.open('mynewfile2.txt', 'w', function(err, file){     
	if(err) throw err;
console.log('Saved !'); 
});
