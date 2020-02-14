//replces file and cotent
var fs = require('fs');

//take a flag as the second argument

fs.writeFile('mynewfile3.txt', 'Hello content', function(err){     
	if(err) throw err;
console.log('Saved !'); 
});
