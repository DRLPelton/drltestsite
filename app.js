//included libraries
var express = require('express');

//server configuration
var app = express();

app.set('view engine', 'ejs');


//endpoints
app.get('/', function (req, res) {
  res.render('index', { name: 'Darryl' } );
});

app.get('/two', function (req, res) {
  res.send('<html><body><h1>New Page</h1></body></html>');
});

//server startup
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  console.log('WE ARE ALIVE');
});
