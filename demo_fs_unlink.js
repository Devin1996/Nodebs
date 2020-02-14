var fs = require('fs');

//repalces the content

fs.unlink('mynewfile2.txt', function(err){
	if(err) throw err;
	console.log('File Deleted !');
});
