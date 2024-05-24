const EventEmitter = require('events');
const http = require('http');

// Sales class inherits everything for EventEmitter
class Sales extends EventEmitter {
    constructor() {
        super();    // inherits EventEmitter
    }
}

const myEmitter = new Sales();

// Observer Pattern Structure
// Observers that listen for events
myEmitter.on('newSale', () => {
    console.log('New sale has been made!');
});

myEmitter.on('newSale', () => {
    console.log('Customer name: Joshua');
});

myEmitter.on('newSale', (stock, original) => {
    console.log(`There are now ${stock} items left in stock, there were ${original} stocked.`);
});

// Object that emits events
myEmitter.emit('newSale', 9, 10);

////////////////////////////////////

const server = http.createServer();

// listen to different events the server will emit
// Server Listening to events
server.on('request', (req, res) => {
    console.log('Request received!');
    console.log(req.url);
    res.end('Request Received!');
});

server.on('request', (req, res) => {
    console.log('Another request received!');
});

server.on('close', () => {
    console.log('Server closed');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Waiting for requests...');
});

server.emit('close');