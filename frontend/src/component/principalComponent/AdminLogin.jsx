import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";
import { GENERAL_API } from "../../../generalApi";

const PrincipalLogin = () => {
  const [adminLoginError, setAdminLoginError] = useState("");
  const [emailRegexError, setEmailRegexError] = useState("");

  const [adminLogin, setAdminLogin] = useState("");
  console.log("adminLogin--------", adminLogin);

  const [adminLoginData, setAdminLoginData] = useState({
    email: "",
    password: "",
    dob: "",
    employmentStatus: "",
  });

  const handleChange = (e) => {
    setAdminLoginError("");
    setAdminLoginData({
      ...adminLoginData,
      [e.target.name]: e.target.value,
    });
  };

  const adminStatus = (e) => {
    setAdminLoginError("");
    setAdminLoginData({
      ...adminLoginData,
      [e.target.name]: e.target.checked,
    });
  };

  const loginHandler = async () => {
    const { email, password, dob, employmentStatus } = adminLoginData;
    const checkFields = [email, password, dob, employmentStatus]?.some(
      (ele) => ele === ""
    );

    if (checkFields)
      return setAdminLoginError({
        adminLoginError: "all fields are required!",
      });

    const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!checkEmail?.test(email)) {
      return setEmailRegexError({ emailRegexError: "valid email required!" });
    }

    setEmailRegexError("");

    const loginAdmin = await axios?.post(
      `${GENERAL_API}/admin-login`,
      adminLoginData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    setAdminLogin(loginAdmin);
  };

  return (
    <div>
      <div className="bg-gray-900 w-full h-screen">
        <div>
          <div className="relative">
            <div>
              <Navbar />
            </div>
            <div className="p-[2px] bg-gradient-to-r via-purple-500"></div>
            <div className="relative">
              <div className="flex justify-center">
                <div className=" bg-gray-800 p-8 rounded-2xl my-5 border-2 border-gray-700">
                  <div className="px-20 pb-5">
                    <div className="flex justify-center">
                      <img
                        className="h-12 rounded-full"
                        src="https://thumbs.dreamstime.com/b/education-badge-logo-design-university-high-school-emblem-education-badge-logo-design-university-high-school-emblem-151924849.jpg"
                      />
                    </div>
                  </div>
                  <div className="max-w-sm mx-auto relative">
                    <div className="flex text-xl justify-center">
                      <h1 className="text-xl font-semibold text-white">
                        Admin Login
                      </h1>
                    </div>
                    <div className="flex mb-5  justify-center">
                      <h1 className="text-[12px] flex gap-1 text-white">
                        Don't have any account?{" "}
                        <Link
                          to="/admin-signup"
                          className="text-blue-500 underline"
                        >
                          {" "}
                          SignUp now
                        </Link>
                      </h1>
                    </div>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12">
                        <input
                          type="email"
                          className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter email..."
                          required
                          name="email"
                          onChange={handleChange}
                        />
                      </div>

                      {emailRegexError ? (
                        <span className="flex justify-center col-span-12 text-red-600">
                          {emailRegexError?.emailRegexError}
                        </span>
                      ) : (
                        ""
                      )}
                      <div className="col-span-12">
                        <input
                          type="password"
                          className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter password..."
                          required
                          name="password"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-span-12">
                        <div className="flex text-sm justify-end ">
                          <Link className="hover:cursor-pointer hover:text-blue-500 text-white">
                            Forgot Password?
                          </Link>
                        </div>
                      </div>

                      <div className="col-span-6 mb-3">
                        <input
                          type="date"
                          className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="type your age.."
                          required
                          name="dob"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="flex items-center mb-5">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value={adminLoginData?.employmentStatus}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        name="employmentStatus"
                        htmlFor="employmentStatus"
                        onClick={adminStatus}
                      />
                      <label
                        htmlFor="default-checkbox"
                        className="flex ms-2 gap-1 text-[12px] hover:cursor-pointer text-white "
                        id="employmentStatus"
                      >
                        I agree to the
                        <p className="text-blue-500 underline text-[12px]">
                          {" "}
                          Terms & Conditions
                        </p>
                      </label>
                    </div>

                    <div className="flex justify-center w-full">
                      <button
                        className="bg-blue-500 w-full p-2 rounded-md text-white"
                        onClick={loginHandler}
                      >
                        Login Account
                      </button>
                    </div>
                    <div className="flex justify-center text-red-600">
                      {adminLoginError ? (
                        <span>{adminLoginError?.adminLoginError}</span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="flex items-center w-full py-3">
                      <div className="flex-grow border-t border-gray-500"></div>
                      <span className="px-4 text-gray-400 text-[10px]">
                        Or login with
                      </span>
                      <div className="flex-grow border-t border-gray-500"></div>
                    </div>
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-6 flex justify-center">
                        <button className="border rounded-sm border-gray-500 w-full p-1">
                          <p className="text-[12px] flex justify-center items-center gap-1 text-white">
                            <GoogleIcon className="text-white text-3xl" />{" "}
                            Google
                          </p>
                        </button>
                      </div>
                      <div className="col-span-6 flex justify-center">
                        <button className="border rounded-sm border-gray-500 w-full">
                          <p className="text-[12px] flex justify-center items-center gap-1 text-white">
                            <AppleIcon className="text-white text-3xl" /> Apple
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalLogin;
