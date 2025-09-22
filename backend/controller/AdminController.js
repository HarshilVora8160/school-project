const AdminModule = require("../modules/AdminModule");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AdminSignup = async (req, res, next) => {
  const {
    firstName,
    lastName,
    dob,
    gender,
    contactDetails,
    employmentDetails,
    educationDetails,
  } = req.body;

  const { email, contactNumber, password, address } = contactDetails;
  const { city, state, country } = address;
  const { employmentStatus, salary } = employmentDetails;
  const { qualification, yearOfGraduation } = educationDetails;

  const findAdminData = await AdminModule?.find();

  if (findAdminData?.length > 0)
    return res.status(201).json({ errorMessage: "admin is already exists!" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const token = await jwt.sign({ foo: "bar" }, process.env.PRIVATE_KEY, {
    expiresIn: "1d",
  });
  const createAdmin = await AdminModule.create({
    firstName,
    lastName,
    dob,
    gender,
    contactDetails: {
      email,
      contactNumber,
      password: hashedPassword,
      address: { city, state, country },
    },
    employmentDetails: { employmentStatus, salary },
    educationDetails: { qualification, yearOfGraduation },
  });

  return res.status(200).json({
    token,
    data: createAdmin,
  });
};

const AdminLogin = async (req, res, next) => {
  try {
    const { email, password, dob, employmentStatus } = req.body;
    const checkAdminEmail = await AdminModule?.findOne({
      $or: [
        { "contactdetails.email": email },
        { "contactDetails.email": email },
        { email },
      ],
    });

    if (!checkAdminEmail) return res.status(201).json({ errorMessage: "admin not exists!" })

    const hashedPassword = checkAdminEmail?.contactDetails?.password || password

    if (!hashedPassword) {
      return res.status(500).json({ errorMessage: "Password not found for admin!" });
    }

    const isPasswordValid = await bcrypt.compare(password, hashedPassword);
    
    if (!isPasswordValid) {
      return res.status(201).json({ errorMessage: "Invalid credentials!" });
    }

    return res.status(200).json({
      message: "Admin login successfully!",
      data: { email, password, dob, employmentStatus },
    });

  } catch (error) {
    console.log(error);
  }

};

module.exports = { AdminSignup, AdminLogin };
