require('dotenv').config();
require('./helpers/init_mongodb');
const express = require('express');
const studentroutes = require('./routes/studentRoute');
const app = express();

// app.use is a middleware is almost like a broker 
app.use(express.json());

app.use(studentroutes);
// this is listening for the server
// strat of listening for the server

app.listen(process.env.port || 4000, function (){
    console.log('Now listening for requests on:http://localhost:4000');
});
// end of listening to server

//handling 404 error
app.use((req, res, next)=>{
    const err= new Error("Not Found");
    err.status = 404
    next(err)
})

//Error handler
app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status|| 500,
            message:err.message

        }
    })
})