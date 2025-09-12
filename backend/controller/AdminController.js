const AdminModule = require('../modules/AdminModule')
const bcrypt = require('bcrypt');

const AdminSignup = async (req, res, next) => {
    console.log("req.body------------", req.body);
    const { firstName, lastName, dob, gender, contactDetails, employmentDetails, educationDetails } = req.body
    const {email, contactNumber, password, address} = contactDetails
    const {city, state, country } = address
    const {employmentStatus, salary } = employmentDetails
    const {qualification, yearOfGraduation } = educationDetails


    const findAdminData = await AdminModule?.findOne({ email });
    if (findAdminData) return res.status(201).json({ errorMessage: "this admin already exists!" })

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashedPassword----------------",hashedPassword);
    


}

module.exports = AdminSignup;