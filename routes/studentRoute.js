const express = require('express');
const routes = express.Router();
const Student = require('../models/students');
const studentController = require('../controller/studentController');

//get a list of students from the database

routes.get('/students', (req,res)=> {
    res.send({type:'Get Request Done'});
});

routes.get('/allResults',studentController.getAllstudents)

//add student to the db

routes.post('/students', (req,res)=> {
  res.send({type:'Post Request Done'});
});



routes.post('/addstudent',studentController.addstudent)




//update students in the DB

routes.put('/students/:id', (req,res)=> {
    res.send({type:'Update Request'});
});

routes.patch('/updateStudent/:id',studentController.updateStudent)


//delete student to the db

routes.delete('/students/:id', (req,res)=> {
    res.send({type:'Delete Request'});
});

module.exports = routes;