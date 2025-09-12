const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
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
        password:{
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
    employmentDetails: {
        employmentStatus: {
            type: String,
            required: true
        },
        salary: {
            type: String,
            required: true
        }
    },
    educationDetails: {
        qualification: {
            type: String,
            required: true
        },
        yearOfGraduation: {
            type: String,
            required: true
        }
    },
    isAdmin: {
        type:Boolean,
        required:true
    }
})

const AdminModule = mongoose.model('principal-data', AdminSchema)

module.exports = AdminModule;