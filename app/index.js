var http = require('http');
var url = require('url');
var express = require('express');
var bodyParser = require('body-parser');
var faye = require('faye');
var request = require('request');
var MongoClient = require('mongodb').MongoClient;
var server_url = 'http://localhost:8000/';



MongoClient.connect("mongodb://localhost:27017/civ5", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});

//create faye adapter
var bayeux = new faye.NodeAdapter({mount: '/comm'});
var app = express();
app.use(bodyParser());

app.post('/game', function (req, res) {
	console.log("request made");
	bayeux.getClient().publish('/' + req.body.gameID, {
  		type: 'winner',
  		userID: parseInt(req.body.winnerID),
	});
	res.writeHead(202);
  	res.end();
});

var server = app.listen(2000, function(){
	var host = server.address().address;
	var port = server.address().port;
});

//finalize server, attach faye and listen to port

bayeux.attach(server);