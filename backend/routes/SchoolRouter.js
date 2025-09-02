const express = require('express');
const router = express.Router()
const StudentSignUp = require('../controller/StudentController');
const { Department, GetAllDepartments } = require('../controller/TeacherDetartmentController');
const AdminSignup = require('../controller/AdminController');

// for all routes = Address Data
router.post('/admin-teacher-department', Department)
router.get('/get/teacher-department', GetAllDepartments)
// router.post('/admin-add-address')
// router.post('/admin-student-standard-list')

// admin routes
// router.post('/admin-add-teacher-department')
router.post('/admin-signup',AdminSignup);
// router.post('/admin-login');
// router.get('/admin');

// // teacher routes
// router.post('/teacher-signup')
// router.post('/teacher-login')
// router.get('/all-teachers')

// Student routes
router.post('/student-signup', StudentSignUp)
// router.post('/student-login')
// router.get('/all-student')

// // new job routes
// router.post('/job-signup')
// router.post('/job-login')
// router.get('/all-jobs')

module.exports = router