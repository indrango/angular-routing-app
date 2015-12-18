var express = require('express');
var path = require('path');
var app = express();

//Set up the public folder to serve files to the app
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.listen(3000);
console.log('Server running at http://localhost:3000');
