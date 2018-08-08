const net = require('net');
const PORT = 4000;
const ADDRESS = '127.0.0.1';

const server = net.createServer(socket => {
    socket.write('Hello from Socket server.');
    socket.on('data', data => console.log('Socket server received data:', data.toString()));
    socket.on('error', err => console.log('Socket server encountered error:', err));
});

server.listen(PORT, ADDRESS, () => console.log(`Socket server listening @ ${ADDRESS}:${PORT}`));
