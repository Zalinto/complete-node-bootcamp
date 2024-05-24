const fs = require('fs');
// automatically creates a server object
const server = require('http').createServer();

server.on('request', (req, res) => {
    // Solution 1
    // fs.readFile('test-file.txt', (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // })

    // Solution 2: Streams
    // const readable = fs.createReadStream('test-fiaasdle.txt');
    // readable.on('data', chunk => {
    //     res.write(chunk);
    // });

    // readable.on('end', () => {
    //     // signals no more data will be written to the stream
    //     res.end();
    // })

    // readable.on('error', err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end("File not found!");
    // })

    // Solution 3: Pipe Operator
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);     // readablSource.pipe(writeableDestination)
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Waiting for requests...');
});