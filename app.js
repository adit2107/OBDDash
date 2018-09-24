var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3001);
// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/test.html');
});

io.on('connection', function (socket) {
  socket.emit('coord', { x: '12.8909', y: '-122.7' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
