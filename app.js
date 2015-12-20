var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('We got called!!!  We get to do something!');
  res.send('Hello sweet chuck');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  console.log('WE ARE ALIVE');
});
