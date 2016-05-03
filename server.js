var express = require('express');
var app = express();
var exphb = require('express-handlebars');
var PORT = process.env.PORT || 8080;
var path = require ('path');
app.use(express.static(path.join(__dirname + '.../public')));
app.set('views', __dirname + '/views');
app.use('/scripts', express.static('public/scripts'));
app.use('/css', express.static('public/css'));
app.use('/images', express.static('public/images'));
app.engine('handlebars', exphb({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('index', {msg: req.query.msg});
});

app.listen(PORT, function(){
  console.log("You are listening on:" , PORT)
});
