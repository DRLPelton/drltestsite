module.exports = function(app){
  //endpoints
  app.get('/', function (req, res) {
    res.render('index', { name: 'Darryl' } );
  });

  app.get('/two', function (req, res) {
    res.send('<html><body><h1>New Page</h1></body></html>');
  });
};
