var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const express = require('express');
var Client = require('azure-iothub').Client;
var connectionString = 'HostName=boschhub.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=b732GY6TyjmYDiA8Mg/bZTLrYilD9JcodJI0g4GSskk=';

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var { EventHubClient, EventPosition } = require('azure-event-hubs');
var ehClient;

io.on('connection', function(socket){
  var printError = function (err) {
    console.log(err.message);
  };

  EventHubClient.createFromIotHubConnectionString(connectionString).then(function (client) {
    console.log("Successully created the EventHub Client from iothub connection string.");
    ehClient = client;
    return ehClient.getPartitionIds();
  }).then(function (ids) {
    console.log("The partition ids are: ", ids);
    return ids.map(function (id) {
      return ehClient.receive(id, printMessage, printError, { eventPosition: EventPosition.fromEnqueuedTime(Date.now()) });
    });
  }).catch(printError);

  var printMessage = function (message) {
    console.log('Telemetry received: ');
    var datarec = JSON.stringify(message.body);
    console.log(message.body);
    var datajson = JSON.parse(datarec);
    console.log(datajson);
    socket.emit('cardata', datajson);
  };
});
server.listen(1337);
