var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


var Client = require('azure-iothub').Client;
var connectionString = 'HostName=boschhub.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=UbP3q1C2JjBTkeEt4j5D+HREOl0pfgOwxmg3XxC+gXY=';

// var client = Client.fromConnectionString(connectionString);

var { EventHubClient, EventPosition } = require('azure-event-hubs');

var printError = function (err) {
  console.log(err.message);
};

var printMessage = function (message) {
  console.log('Telemetry received: ');
  console.log(JSON.stringify(message.body));
  console.log('Application properties (set by device): ')
  console.log(JSON.stringify(message.applicationProperties));
  console.log('System properties (set by IoT Hub): ')
  console.log(JSON.stringify(message.annotations));
  console.log('');

  io.on('connection', function (socket) {
    setInterval(function(){
      socket.emit('coord', {'x': '-77.243234', 'y': '23.343434'});
    }, 10000);
  });
};

var ehClient;
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
  res.sendFile(__dirname + '/test.html');
});

// io.on('connection', function (socket) {
//   setInterval(function(){
//     socket.emit('coord', { x: '19.0760', y: '72.8777' });
//   }, 10000);
// });
