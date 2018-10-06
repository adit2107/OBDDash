var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const express = require('express');
var Client = require('azure-iothub').Client;
var connectionString = 'HostName=iothubtest1234.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=C4kzoiLVFlJJ2/Nd3mvXGYxYbiCtWH24eMUuZOVSD3c=';
app.use(express.static('public'));

var { EventHubClient, EventPosition } = require('azure-event-hubs');
var ehClient;

var printError = function (err) {
  console.log(err.message);
};

var printMessage = function (message) {
  console.log('Telemetry received: ');
  var datarec = JSON.stringify(message.body);
  var datajson = JSON.parse(datarec);
  console.log(datajson);
  console.log('Application properties (set by device): ')
  console.log(JSON.stringify(message.applicationProperties));
  console.log('System properties (set by IoT Hub): ')
  console.log(JSON.stringify(message.annotations));
  console.log('');
  sendData(datajson);
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

server.listen(3001);


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

function sendData(msg){
    io.on('connection', function (socket) {
    setInterval(function(){
      socket.emit('coolant', {'coolant': msg["Coolant"]});
      socket.emit('coord', {'x': msg["LA"], 'y': msg["LO"]});
      socket.emit('rpm', {'rpm': msg["RPM"]});
      socket.emit('speed', {'speed': msg["Speed"]});
      socket.emit('engine', {'engine': msg["Engine"]});
      socket.emit('tp', {'tp': msg["TP"]});

    }, 5000);
  });
}
