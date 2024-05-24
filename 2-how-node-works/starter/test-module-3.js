// loaded the entire module once so that's why this line executes once
console.log('Hello from the module');

module.exports = () => console.log("Log this beautiful text");