const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));                             // return a function similar to the callback function
}

// MIDDLEWARES
app.use(express.json());                                // how we currently use middleware
app.use(express.static(`${__dirname}/public`));         // sets public to root directory

app.use((req, res, next) => {                           // defining middleware with the 3rd value
    console.log('Hello from the middleware!');
    next();                                             // go to the next part of the code
});

app.use((req, res, next) => {                           // middleware to add time
    req.requestTime = new Date().toISOString();
    next();                                             
});

// ROUTES
app.use('/api/v1/tours', tourRouter);               // lets us automatically run at this base route
app.use('/api/v1/users', userRouter);

module.exports = app;