const mongoose = require('mongoose');

const TeacherSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    contactDetails:{
        email:{
            type:String,
            required:true
        },
        contactNumber:{
            type:String,
            required:true
        },
        address:{
            city:{
                type:String,
                required:true
            },
            state:{
                type:String,
                required:true
            },
            country:{
                type:String,
                required:true
            }
        }
    },
    employmentDetails:{
        department:{
            type:String,
            required:true
        },
        employmentStatus:{
            type:String,
            required:true
        },
        salary:{
            type:String,
            required:true
        }
    },
    educationDetails:{
        highestQualification:{
            type:String,
            required:true
        },
        university:{
            type:String,
            required:true
        },
        yearOfGraduation:{
            type:String,
            required:true
        }
    }
})

const TeacherModel = mongoose.model('teacher-data',TeacherSchema);

module.exports = TeacherModel;