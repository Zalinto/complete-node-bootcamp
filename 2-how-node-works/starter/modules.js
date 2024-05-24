console.log(arguments);
console.log(require('module').wrapper);

const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(1, 2));

// exports
// const calc2 = require('./test-module-2');
// can selectively import the functions we want
const { add, multiply, divide } = require('./test-module-2');
console.log(add(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));

// caching
require('./test-module-3')();   // returns the function
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();