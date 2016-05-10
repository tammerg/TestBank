var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));     //serve static assets
app.use("/", express.static("public"));
app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));
app.use("/partials", express.static("public/partials"));

app.listen(PORT, function(){
  console.log("You are listening on:" , PORT)
});
