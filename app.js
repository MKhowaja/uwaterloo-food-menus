//uwaterloo api key: d5bebdba9c36122b95b871d4b72c4ff0
var express = require('express');
var request = require('request');
var app = express();
var path = require('path');
var menuController = require(path.join(__dirname, '/public/js/core.js'));
var url = 'https://api.uwaterloo.ca/v2/foodservices/2013/12/menu.json?key=d5bebdba9c36122b95b871d4b72c4ff0';

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/menu', function(req, res){
	request(url, function(error, response, body){
		if (!error && response.statusCode == 200){
			var parsed = JSON.parse(body);
			console.log(parsed["data"]);
		}
	});
	res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

var server = app.listen(80, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Application started at http://%s:%s', host, port);
});
