//update file content
var fs = require('fs');

//repalces the content

fs.appendFile('mynewfile1.txt','This is My Replaced Text.', function(err){
	if(err) throw err;
	console.log('Replaced !');
});

// run:
// node demo_fs_replace.js
