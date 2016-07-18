'use strict'

var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 5001));

// index
app.get('/', function (req, res) {
	res.send('hello world i am a secret bot')
});

// spin spin sugar
app.listen(app.get('port'), function() {
	console.log('running on port', app.get('port'))
});