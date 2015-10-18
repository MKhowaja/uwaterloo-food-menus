//uwaterloo api key: d5bebdba9c36122b95b871d4b72c4ff0
var express = require('express');
var request = require('request');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use('/public', express.static(path.join(__dirname, 'public')));
var urlStart = 'https://api.uwaterloo.ca/v2/foodservices';
var urlEnd = '.json?key=d5bebdba9c36122b95b871d4b72c4ff0';

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/menu', function(req, res){
	var requestUrl = urlStart + '/menu' + urlEnd;
	request(requestUrl, function(error, response, body){
		if (!error && response.statusCode == 200){
			var parsed = JSON.parse(body);
			res.send(parsed);
		}
		else {
			res.send(error);
		}
	});

});

app.get('/announcements', function(req, res){
	var requestUrl = urlStart + '/announcements' + urlEnd;
	request(requestUrl, function(error, response, body){
		if (!error && response.statusCode == 200){
			var parsed = JSON.parse(body);
			res.send(parsed);
		}
		else {
			res.send(error);
		}
	});
});

app.get('/locations', function(req, res){
	var requestUrl = urlStart + '/locations' + urlEnd;
	request(requestUrl, function(error, response, body){
		if (!error && response.statusCode == 200){
			var parsed = JSON.parse(body);
			res.send(parsed);
		}
		else {
			res.send(error);
		}
	});
});

var server = app.listen(80, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Application started at http://%s:%s', host, port);
});
