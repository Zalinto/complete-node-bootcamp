const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

// runs 2nd
setTimeout(() => console.log('Timer 1 finished'), 0);
// runs 4th
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile('text-file.txt', () => {
    // runs 3rd
    console.log('I/O finished');
    console.log('---------------------------');
    // runs 6th
    setTimeout(() => console.log('Timer 2 finished'), 0);
    // runs 7th
    setTimeout(() => console.log('Timer 3 finished'), 3000);
    // runs 5th
    setImmediate(() => console.log("Immediate 2 finished"));

    process.nextTick(() => console.log('Process.nextTick'));

    // Event heavy tasks gets offloaded to the Thread Pool
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Password encrypted 1");
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Password encrypted 2");
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Password encrypted 3");
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Password encrypted 4");
    });
});

// runs 1st
console.log("Hello from the top-level code");


// WITHOUT THE EVENT LOOP
// const fs = require('fs');

// // runs 2nd
// setTimeout(() => console.log('Timer 1 finished'), 0);
// // runs last
// setImmediate(() => console.log("Immediate 1 finished"));

// // runs third
//     // takes time to read
// fs.readFile('text-file.txt', () => {
//     console.log('I/O finished');
// });

// // runs first
// console.log("Hello from the top-level code");