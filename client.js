const net = require('net');
const PORT = 4000;
const ADDRESS = '127.0.0.1';

function makeClient(name) {
    const client = new net.Socket();
    client.connect(PORT, ADDRESS, () => {
        console.log(`Client ${name} connected to ${ADDRESS}:${PORT}`);
        client.write(`Hello from client ${name}!`);
        client.write(`Hello again from client ${name}!`);
    });
    client.on('data', data => console.log(`Client ${name} received data:`, data.toString()));
    client.on('close', () => console.log(`Client ${name} now closing connection.`));
    return client;
}

const client1 = makeClient('One');
