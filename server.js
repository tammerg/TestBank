var express = require('express');
var app = express();
var exphb = require('express-handlebars');
var PORT = process.env.PORT || 8080;
var path = require ('path');

app.use(express.static(__dirname + "/public"));
app.engine('handlebars', exphb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
  res.render('index');
});

app.listen(PORT, function(){
  console.log("You are listening on:" , PORT)
});
