const express = require('express');
const app = express();
const parser = require('body-parser');
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(parser.json());

//routes imports
const todoRoutes = require('./routes/todo.routes');

//middleware
app.use((req, res, next) => {
    console.log("middle ware running");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','POST, PUT, DELETE, PATCH, GET');
        return res.status(200).json({});
    }
    next();
});
app.use(parser.urlencoded({extended:true}));



//routes
app.use('/todos', todoRoutes);
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});
app.use((error, req,res, next) => {
    res.status(500||error.status);
    res.json({
        error:{
           message: error.message 
        }        
    });
});


module.exports = app;