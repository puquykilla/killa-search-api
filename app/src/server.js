var express 		= require('express');
var bodyParser 		= require('body-parser');

var config 			= require('./configs');

var app 			= express();
var router 			= express.Router();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./middlewares')(router);
require('./routes')(router);

app.use(config.apiPrefix, router);

app.listen(config.port, function() {
console.log('Server listen on port: ' + config.port);
});