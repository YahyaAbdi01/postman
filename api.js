const express = require('express');
const routes = express.Routes();

// get a list of students from the database
routes.get('/students', (req,res)=> {
    res.send({type:'Get Request'});
});

// Add students to the database

routes.post('/students', (req,res)=> {
    res.send({type:'Post Request'});
});

// update students in the database
routes.put('/students/:id', (req,res)=> {
    res.send({type:'Update Request'});
});

// delete students from the database
routes.delete('/students/:id' (req,res)=> {
    res.send({type:'Delete Request'});
})

module.exports = routes;