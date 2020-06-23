
// import the models
const { Person, PhoneNumber } = require('./models');

const express = require('express');
const path = require('path');
var hbs = require('express-handlebars');

app = express();
app.set('port', 3002);

// setup handlebars and the view engine for res.render calls
// (more standard to use an extension like 'hbs' rather than
//  'html', but the Universiry server doesn't like other extensions)
app.set('view engine', 'html');
app.engine('html', hbs({
  extname: 'html',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));

// setup static file service
app.use(express.static(path.join(__dirname, 'static')));

// basic view route
app.get('/', function (req, res, next) {
  res.render('index');
});

var server = app.listen(app.get('port'), function () {
  console.log("Server started...")
});

