const AdminModule = require('../modules/AdminModule');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AdminSignup = async (req, res, next) => {
    console.log("req.body------------", req.body);
    const { firstName, lastName, dob, gender, contactDetails, employmentDetails, educationDetails } = req.body
    const { email, contactNumber, password, address } = contactDetails
    const { city, state, country } = address
    const { employmentStatus, salary } = employmentDetails
    const { qualification, yearOfGraduation } = educationDetails

    const findAdminData = await AdminModule.find();
    if (findAdminData) return res.status(201).json({ errorMessage: "admin is already exists!" })

    const hashedPassword = await bcrypt.hash(password, 10);

    const token = await jwt.sign({ foo: 'bar' }, process.env.PRIVATE_KEY, { expiresIn: '1d' })
    const createAdmin = await AdminModule.create({ firstName, lastName, dob, gender, contactDetails: { email, contactNumber, password: hashedPassword, address: { city, state, country } }, employmentDetails: { employmentStatus, salary }, educationDetails: { qualification, yearOfGraduation } });

    return res.status(200).json({ token, data: createAdmin })
}

module.exports = AdminSignup;