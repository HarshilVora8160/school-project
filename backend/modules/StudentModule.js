const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    lastLoginDate:{
        type: String,
        required: true
    },
    contactDetails: {
        email: {
            type: String,
            required: true
        },
        contactNumber: {
            type: String,
            required: true
        },
        address: {
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            }
        }
    },
    admission: {
        standard: {
            type: String,
            required: true
        },
        admissionDate: {
            type: Date,
            required: true
        },
        preferredSubjects: {
            type: [String],
            required: true
        }
    }
});

const StudentModel = mongoose.model('student-data', StudentSchema);

module.exports = StudentModel;