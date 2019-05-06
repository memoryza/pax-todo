var express = require('express');
var app = express();

app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/dist', express.static('dist'));
app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen(3005, function () {
  console.log('Example app listening on port 3005!');
});
