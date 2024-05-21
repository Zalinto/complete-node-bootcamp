// return an object with a lot of functions to use  
const fs = require('fs');
// gives us networking capabilities
    // http server
const http = require('http');

const url = require('url');

/////////////////////////////////////////////////////////////////////////
// FILES
// // blocking. synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')

// const hello = 'Hello world';
// console.log(hello);
// console.log(textIn);

// const textOut = `Avacado facts: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt' , textOut);
// console.log(textOut);

// fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });

// console.log('Reading file...');

// Non-blocking, async way
    // reads start.txt
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if(err) 
//         return console.log('ERROR');
//     // start.txt data1 = read-this
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         // reads append.txt then outputs the data3 data and writes to final file
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your file has been written :)');
//             });
//         });
//     });
// });

// console.log('Will read file!');

/////////////////////////////////////////////////////////////////////////
// SERVER
const server = http.createServer((req, res) => {
    // console.log(req.url);

    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview') {
        res.end('This is the overview page');
    } else if (pathName === '/product') {
        res.end('This is the product page');
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found</h1>');
    }



    // res.end('Hello from the server!');
});

// 127.0.0.1:8000
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});

