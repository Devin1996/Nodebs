//update file content
var fs = require('fs');

//Appned content at the end of the file

fs.appendFile('mynewfile1.txt','This is My Updated Text.', function(err){
	if(err) throw err;
	console.log('Updated !');
});
