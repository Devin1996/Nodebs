//include libraries
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.write("The Date and Time Currently is: "+dt.myDateTime());
  res.write(req.url);
  
  res.end('Hello Wor ld!');

}).listen(8080); 

