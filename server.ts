/// <reference path="./typings/main.d.ts" />

import path = require('path');
import express = require('express');
import jade = require('jade');
import socketio = require('socket.io');
import http = require('http');

var app = express();
var server = http.createServer(app);
var io = socketio.listen(server);


app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'jade');
app.set('view options', { layout: false });

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('home.jade');
});
server.listen(3000, function() {
    console.log('Server listening on *:3000');
});

io.on('connection', function(socket) {
    console.log('A user connected');
});
