var socket = require('socket.io-client')('http://127.0.0.1:54000');
socket.on('connect', function(){ console.log('Connected'); });
socket.on('event', function(data){ console.log('Data', data); });
socket.on('disconnect', function(){ console.log('Dis-Connected'); });
