'use strict';

var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.send('Hello world!');
});

app.get('/ping', function (req, res) {
	res.send('Pong!');
});

var PORT = 8080;
app.listen(PORT, function () {
	console.log('Listening on port '+ PORT +'...');
});