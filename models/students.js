const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstname:{
        type: String,
        required:[true, "Firstname is requred"]
    },
    lastname:{
        type: String,
        required:[true, "lasttname is requred"]
    },
    gender: { 
        type: String
    }

});
const Student = mongoose.model("student", studentSchema);
module.exports = Student

