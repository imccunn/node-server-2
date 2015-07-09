'use strict';

const express = require('express');
var app = express();
var app1 = express();
var bodyParser = require('body-parser');
var services = [];

app.use(bodyParser());

app.set('port', 3333);

app.get('/', function(req, res) {
  var o = {msg: 'hello from 1'};
  res.json(o);
});

app.post('/', function(req, res) {
  var service = req.body.serviceName;
  var host = req.body.hostName;
  var newService = {
    serviceName: service,
    hostName: host
  };
  services.push(newService);
  res.json({msg: 'New Service successfully added.'});
  console.log(services);
  
});

app.listen(3333, function() {
  console.log('Server listenening on port: ', app.get('port'));
});

app1.set('port', 2222);

app1.get('/', function(req, res) {
  res.send('hello');
});

app1.listen(2222, function() {
  console.log('Server listenening on port: ', app1.get('port'));
});
