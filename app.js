var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const express = require('express');
var Client = require('azure-iothub').Client;
var connectionString = 'HostName=iothubtest1234.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=C4kzoiLVFlJJ2/Nd3mvXGYxYbiCtWH24eMUuZOVSD3c=';

// var printError = function (err) {
//   console.log(err.message);
// };

// var printMessage = function (message) {
//   console.log('Telemetry received: ');
//   var datarec = JSON.stringify(message.body);
//   var datajson = JSON.parse(datarec);
//   console.log(datajson);
//   // console.log('Application properties (set by device): ')
//   // console.log(JSON.stringify(message.applicationProperties));
//   // console.log('System properties (set by IoT Hub): ')
//   // console.log(JSON.stringify(message.annotations));
//   // console.log('');
//  // sendData(datajson);
//  setInterval(function(){
//         console.log("*******************Emitting***************")
//         socket.emit('coolant', {'coolant': datajson["Coolant_temp"]});
//         socket.emit('coord', {'x': datajson["LA"], 'y': datajson["LO"]});
//         socket.emit('rpm', {'rpm': datajson["RPM"]});
//         socket.emit('speed', {'speed': datajson["Speed"]});
//         socket.emit('engine', {'engine': datajson["Engine_load"]});
//         socket.emit('tp', {'tp': datajson["Throttle_position"]});
//       }, 1000);
// };

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var { EventHubClient, EventPosition } = require('azure-event-hubs');
var ehClient;

// EventHubClient.createFromIotHubConnectionString(connectionString).then(function (client) {
//   console.log("Successully created the EventHub Client from iothub connection string.");
//   ehClient = client;
//   return ehClient.getPartitionIds();
// }).then(function (ids) {
//   console.log("The partition ids are: ", ids);
//   return ids.map(function (id) {
//     return ehClient.receive(id, printMessage, printError, { eventPosition: EventPosition.fromEnqueuedTime(Date.now()) });
//   });
// }).catch(printError);

// function sendData(msg){
//   console.log("Called sendData " + msg["Speed"]);
//     io.on('connection', function (socket) {
//     setInterval(function(){
//       socket.emit('coolant', {'coolant': msg["Coolant_temp"]});
//       socket.emit('coord', {'x': msg["LA"], 'y': msg["LO"]});
//       socket.emit('rpm', {'rpm': msg["RPM"]});
//       socket.emit('speed', {'speed': msg["Speed"]});
//       socket.emit('engine', {'engine': msg["Engine_load"]});
//       socket.emit('tp', {'tp': msg["Throttle_position"]});

//     }, 200);
//   });
// }

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
    var datajson = JSON.parse(datarec);
    console.log(datajson);
    // console.log('Application properties (set by device): ')
    // console.log(JSON.stringify(message.applicationProperties));
    // console.log('System properties (set by IoT Hub): ')
    // console.log(JSON.stringify(message.annotations));
    // console.log('');
   // sendData(datajson);
  
          // socket.emit('coolant', {'coolant': datajson["Coolant_temp"]});
          // socket.emit('coord', {'x': datajson["LA"], 'y': datajson["LO"]});
          // socket.emit('rpm', {'rpm': datajson["RPM"]});
          // socket.emit('speed', {'speed': datajson["Speed"]});
          // socket.emit('engine', {'engine': datajson["Engine_load"]});
          // socket.emit('tp', {'tp': datajson["Throttle_position"]});

          socket.emit('cardata', datajson);
        
  };

});

server.listen(3001);
