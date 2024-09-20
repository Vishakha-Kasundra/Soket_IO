// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);
// app.use(express.static('public'));
// io.on('connection', (socket) => {
//     console.log('A user connected');
//     const clientIp = socket.handshake.address;
//     console.log(`User connected with IP : ${clientIp}`);

//     socket.on('message', (msg) => {
//         console.log(`Message from ${msg}`);
//         io.emit('message', msg);
//     });

//     socket.on('disconnect', () => {
//         console.log('A User Disconnected');
//     });
// });
// server.listen(3000, () => {
//     console.log('Server runnig in 3000');
// });


const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');
    const clientIp = socket.handshake.address;
    console.log(`User connected with IP : ${clientIp}`);

    socket.on('message', (msg) => {
        console.log(`Message: ${msg}`);
        io.emit('message', msg);
    });

    socket.on('disconnect', () => {
        console.log('A User Disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
