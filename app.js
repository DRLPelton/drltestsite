//included libraries
var express = require('express');
var controllers = require('./controllers');

//server configuration
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
controllers(app);

//server startup
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  console.log('WE ARE ALIVE');
});
