const express = require('express');
const app = express();
const morgan = require('morgan');//this is the reason why we have the next in every argument on the paramater for eacth request response

//loads the routes
const productRoutes = require('../node-restapi-shopping/api/routes/products');
const orderRoutes  = require('./api/routes/orders');

//MORGAN MIDDLEWARE
app.use(morgan('dev'));


//Middleware for the products routes 
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//middleware for error checking error if none of the above routes could support any of the request 
//this error will be the default
app.use((req,res,next) => {
    //error object is available by default
    const error = new Error('Not Found');
    error.status(404);
    //we call next to continue on the next line at the same time we pass the error object with the value
    next(error);
});

// this is the default error if no other 
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message
    });
})

//Middleware for the server // just seprating the server,js file 
app.use((req,res,next) => {
    res.status(200).json({
        message: 'Connected to Port 3000'
    });
});

module.exports = app; 