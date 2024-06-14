const express =  require('express')
const routes = express.Router();
const Student = require('../models/Students');
const StudentController = require('../controller/StudentController');




routes.get('/students', (req,res)=> {
    res.send({type:"Get Request"});
})

routes.post('students', (req,res) =>{
    res.send({type: "post Request"});
})

routes.put('/stdudents/:id', (req, res)=>{
    res.send({type: 'Update Request'})
})

routes.delete('/stdudents/:id', (req, res)=>{
    res.send({type: 'Delete Request'})
})

routes.post('/addstudent', StudentController.addStudent)



module.exports = routes;