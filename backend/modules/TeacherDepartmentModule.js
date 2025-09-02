const mongoose = require('mongoose');

const TeacherDepartmentSchema = mongoose.Schema({
    department:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    isAdmin:{
        type:String,
        required:true
    }
})

const TeacherDepartmentModel = mongoose.model('teacher-department',TeacherDepartmentSchema)

module.exports = TeacherDepartmentModel