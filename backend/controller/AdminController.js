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
  console.log("findAdminData--------", findAdminData?.length);

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
    // const checkAdminEmail = await AdminModule.findOne({ email });

    // const checkAdminEmail = await AdminModule?.findOne({ contactDetails: { email: 'vora@vora.vora' } });
    const checkAdminEmail = await AdminModule?.findOne({
      $or: [
        { "contactdetails.email": email },
        { "contactDetails.email": email },
        { email },
      ],
    });

    const findEmail = await checkAdminEmail?.contactDetails?.email;

    if(!findEmail === email){
        return res
          .status(201)
          .json({ errorMessage: "admin dosn't exists please signup!" });
    }

    const findPassword = await checkAdminEmail?.contactDetails?.password;
    const comparePassword = await bcrypt?.compare(findPassword, password)
    console.log("comparePassword------------",comparePassword);
    
    if (comparePassword)
      return res.status(201).json({ errorMessage: "password not matched!" });

    return res.status(200).json({
      errorMessage: "Admin login successfully!",
      data: { email, password, dob, employmentStatus },
    });

  } catch (error) {
    console.log(error);
  }
};

module.exports = { AdminSignup, AdminLogin };
