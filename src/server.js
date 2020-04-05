const http = require('http');
const express = require('express');
const logEvent = require('./events/myEmitter');
const loggingListener = require('./events/logging.listener');
const appMiddleware = require('./middlewares/app-middlewares');
const appRoutes = require('./routes/index');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);


loggingListener();
io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
    socket.emit('type:string', 'hallo');
});
app.use(appMiddleware);
app.use(appRoutes);
server.on('error', function(e) {
    logEvent.emit('APP_ERROR', {
        logTitle: 'APP_FAILED',
        logMessage: e
    });
});


module.exports = server;