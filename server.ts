/// <reference path="./typings/main.d.ts" />
import path = require('path');
import express = require('express');
import jade = require('jade');
import socketio = require('socket.io');
import http = require('http');
import bodyParser = require('body-parser');
import cookieParser = require('cookie-parser');
import serveStatic = require('serve-static');
var routes = require('./routes/index.js');

var app = express();
var server = http.createServer(app);
var io = socketio.listen(server);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view options', { layout: false });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/templates', express.static(path.join(__dirname, 'views', 'templates')));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules')));

app.use('/', routes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  next(err);
});

server.listen(3000, function() {
    console.log('Server listening on *:3000');
});

var currentMessage:string = "THE BEST MESSAGE";

io.on('connection', function(socket) {
    console.log('A user connected');
    socket.emit('messageUpdate', currentMessage);
    socket.on('sendMessage', function(data) {
      currentMessage = data;
      console.log('Message updated to ' + currentMessage);
      socket.emit('messageUpdate', currentMessage);
      socket.broadcast.emit('messageUpdate', currentMessage);
    });
    socket.on('disconnect', function(data) {
      console.log('A user disconnected');
    });
});

module.exports = app;
