const AdminModule = require('../modules/AdminModule')
const bcrypt = require('bcrypt');

const AdminSignup = async (req, res, next) => {
    console.log("req.body------------", req.body);
    const { firstName, lastName, dob, gender, contactDetails} = req.body

    const findAdminData = await AdminModule?.findOne({ email })
    if (findAdminData) return res.status(201).json({ errorMessage: "this admin already exists!" })

    // const hashedPassword = await bcrypt.hash()

}

module.exports = AdminSignup