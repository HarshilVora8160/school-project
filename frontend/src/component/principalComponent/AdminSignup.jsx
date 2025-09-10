import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import axios from "axios"
import { GENERAL_API } from "../../../generalApi"

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const PrincipalSignup = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [adminError, setAdminError] = useState('')
    console.log("adminError------", adminError);

    const [adminObject, setAdminObject] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        contactDetails: {
            email: "",
            contactNumber: "",
            address: {
                city: "",
                state: "",
                country: ""
            }
        },
        employmentDetails: {
            hireDate: "",
            employmentStatus: "",
            salary: "210000"
        },
        educationDetails: {
            qualification: "",
            yearOfGraduation: ""
        }
    })
    console.log("adminObject-------", adminObject);

    const addressData = [
        { state: "Andhra Pradesh", city: "Ahmedabad", country: "Afghanistan" },
        { state: "Arunachal Pradesh", city: "Surat", country: "Albania" },
        { state: "Assam", city: "Vadodara", country: "Algeria" },
        { state: "Bihar", city: "Rajkot", country: "Andorra" },
        { state: "Chhattisgarh", city: "Bhavnagar", country: "Angola" },
        { state: "Goa", city: "Jamnagar", country: "Antigua and Barbuda" },
        { state: "Gujarat", city: "Gandhinagar", country: "Argentina" },
        { state: "Haryana", city: "Junagadh", country: "Armenia" },
        { state: "Himachal Pradesh", city: "Anand", country: "Australia" },
        { state: "Jharkhand", city: "Nadiad", country: "Austria" },
        { state: "Karnataka", city: "Navsari", country: "Azerbaijan" },
        { state: "Kerala", city: "Morbi", country: "Bahamas, The" },
        { state: "Madhya Pradesh", city: "Surendranagar", country: "Bahrain" },
        { state: "Maharashtra", city: "Bharuch", country: "Bangladesh" },
        { state: "Manipur", city: "Porbandar", country: "Barbados" },
        { state: "Meghalaya", city: "Veraval", country: "Belarus" },
        { state: "Mizoram", city: "Godhra", country: "Belgium" },
        { state: "Nagaland", city: "Palanpur", country: "Belize" },
        { state: "Odisha", city: "Bhuj", country: "Benin" },
        { state: "Punjab", city: "Valsad", country: "Bhutan" },
        { state: "Rajasthan", city: "Vapi", country: "Bolivia" },
        { state: "Sikkim", city: "Gondal", country: "Bosnia and Herzegovina" },
        { state: "Tamil Nadu", city: "Amreli", country: "Botswana" },
        { state: "Telangana", city: "Dahod", country: "Brazil" },
        { state: "Tripura", city: "Botad", country: "Brunei" },
        { state: "Uttar Pradesh", city: "Deesa", country: "Bulgaria" },
        { state: "Uttarakhand", city: "Patan", country: "Burkina Faso" },
        { state: "West Bengal", city: "Wadhwan", country: "Burundi" },
        { state: "Andaman and Nicobar Islands", city: "Kalol", country: "Cabo Verde" },
        { state: "Chandigarh", city: "Vyara", country: "Cambodia" },
        { state: "Dadra and Nagar Haveli and Daman and Diu", city: "Mandvi", country: "Cameroon" },
        { state: "Delhi", city: "Jetpur", country: "Canada" },
        { state: "Jammu and Kashmir", city: "Dhoraji", country: "Central African Republic" },
        { state: "Ladakh", city: "Modasa", country: "Chad" },
        { state: "Lakshadweep", city: "Keshod", country: "Chile" },
        { state: "Puducherry", city: "Mangrol", country: "China" },
        { state: "Gujarat", city: "Una", country: "Colombia" },
        { state: "Gujarat", city: "Visnagar", country: "Comoros" },
        { state: "Gujarat", city: "Halol", country: "Congo, Democratic Republic of the" },
        { state: "Gujarat", city: "Sanand", country: "Congo, Republic of the" },
        { state: "Gujarat", city: "Dabhoi", country: "Costa Rica" },
        { state: "Gujarat", city: "Mehsana", country: "Côte d’Ivoire" },
        { state: "Gujarat", city: "Kadi", country: "Croatia" },
        { state: "Gujarat", city: "Borsad", country: "Cuba" },
        { state: "Gujarat", city: "Karjan", country: "Cyprus" }
    ];

    const adminInputHandler = (e) => {
        // console.log("e------------------", e);
        setAdminError('')
        setAdminObject({
            ...adminObject,
            [e.target.name]: e.target.value
        })
    };

    const validateEmail = (e) => {
        setAdminError("")
        const inputEmail = e.target.value;
        setAdminObject({
            ...adminObject, contactDetails: { ...adminObject.contactDetails, [e.target.name]: e.target.value }
        });
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailRegex.test(inputEmail)) {
            setAdminError({ emailError: 'Please enter a valid email address.' });
        } else {
            setAdminError('');
        }
    };

    const contactInputHandler = (e) => {
        setAdminError('')
        setAdminObject({
            ...adminObject, contactDetails: { ...adminObject.contactDetails, [e.target.name]: e.target.value }
        })
    }

    const addressInputHandler = (e) => {
        setAdminError('')
        setAdminObject({
            ...adminObject, contactDetails: { ...adminObject.contactDetails, address: { ...adminObject.contactDetails.address, [e.target.name]: e.target.value } }
        })
    }

    const employeeDetailsHandler = (e) => {
        setAdminError('')
        if (e.target.name === "employmentStatus") {
            return setAdminObject({
                ...adminObject, employmentDetails: { ...adminObject.employmentDetails, [e.target.name]: e.target.checked }
            })
        }
        setAdminObject({
            ...adminObject, employmentDetails: { ...adminObject.employmentDetails, [e.target.name]: e.target.value }
        })
    }

    const educationDetailsHandler = (e) => {
        setAdminError('')
        setAdminObject({
            ...adminObject, educationDetails: { ...adminObject.educationDetails, [e.target.name]: e.target.value }
        })
    }

    const adminSubmitHandler = async () => {
        console.log("dbsjfhjgygyb");

        setAdminError('')
        const { firstName, lastName, dob, gender, contactDetails, employmentDetails, educationDetails } = adminObject
        const { email, contactNumber, address } = contactDetails
        const { city, state, country } = address
        const { hireDate, salary } = employmentDetails
        const { qualification, yearOfGraduation } = educationDetails
        console.log("email-----------", email);


        const checkAllFields = [firstName, lastName, dob, gender, email, contactNumber, city, state, country, hireDate, salary, qualification, yearOfGraduation].some(ele => ele === "");
        if (checkAllFields) return setAdminError({ errorMessage: "all fields are required!" })

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!email) {
            setAdminError({ ...adminError, emailError: "Entar email" })
        } else if (!emailRegex.test(email)) {
            setAdminError({ emailError: 'Please enter a valid email address.' });
        } else {
            setAdminError('');
        }

        const submitData = await axios.post(`${GENERAL_API}/admin-signup`,
            adminObject,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        console.log("submitData----------", submitData);
    }

    return (
        <div className="bg-gray-900" >
            <div>
                <Navbar />
            </div>
            <div className="p-[2px] bg-gradient-to-r via-purple-500 " ></div>
            <div className="flex justify-center items-center " >
                <div className="bg-gray-600 flex p-8 rounded-xl my-5 border-2 border-gray-700" >
                    <div className="w-[650px]">
                        <div className="flex justify-center " >
                            <img className="h-12 rounded-full" src="https://thumbs.dreamstime.com/b/education-badge-logo-design-university-high-school-emblem-education-badge-logo-design-university-high-school-emblem-151924849.jpg" />
                        </div>

                        <div className="flex justify-center py-5" >
                            <div>
                                <div className="flex justify-center" >
                                    <h1 className="font-semibold text-white text-xl" >Admin SignUp</h1>
                                </div>
                                <div>
                                    <h1 className="text-sm flex gap-1 text-gray-300" >Already have an account? <Link to='/admin-login' className="text-blue-500 underline cursor-pointer" > Login</Link></h1>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-4" >
                            <div className="col-span-12 py-1 flex">
                                <div className="col-span-6 flex w-full" >
                                    <Box
                                        component="form"
                                        sx={{
                                            "& .MuiTextField-root": { width: "30ch" },     // all TextFields
                                            "& .MuiInputBase-root": { height: 50 },        // adjust height
                                            "& input": { color: "white" },                 // text color
                                            "& .MuiInputLabel-root": { color: "white" },   // label color
                                            "& .MuiFilledInput-underline:before": { borderBottomColor: "white" },
                                            "& .MuiFilledInput-underline:after": { borderBottomColor: "white" },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="filled-basic" label="First Name" variant="filled" type="text" name="firstName" placeholder="Enter first name..." required onChange={adminInputHandler} />
                                    </Box>
                                </div>
                                <div className="col-span-6 flex w-full" >

                                    <Box
                                        component="form"
                                        sx={{
                                            "& .MuiTextField-root": { width: "30ch" },     // all TextFields
                                            "& .MuiInputBase-root": { height: 50 },        // adjust height
                                            "& input": { color: "white" },                 // text color
                                            "& .MuiInputLabel-root": { color: "white" },   // label color
                                            "& .MuiFilledInput-underline:before": { borderBottomColor: "white" },
                                            "& .MuiFilledInput-underline:after": { borderBottomColor: "white" },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="filled-basic" label="Last Name" variant="filled" type="text" name="lastName" placeholder="Enter last name..." required onChange={adminInputHandler} />
                                    </Box>
                                </div>
                            </div>
                            <div className="col-span-6 py-1 flex">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Pick a date"
                                        // value={adminObject.dob}
                                        onChange={(newValue) => {
                                            adminInputHandler(newValue);
                                        }}
                                    />
                                </LocalizationProvider>
                            </div>

                            {/* Gender selector */}
                            <div className="py-3 flex col-span-6 items-center" >
                                <h1 className="me-3 text-md text-gray-400" >Gender : </h1>
                                <div className="flex gap-1" >
                                    <input type="radio" name="gender" value="male" id="male" onChange={adminInputHandler} />
                                    <label htmlFor="male" className="text-gray-400" >Male</label>
                                    <input type="radio" name="gender" value="female" id="female" onChange={adminInputHandler} />
                                    <label htmlFor="female" className="text-gray-400" >Female</label>
                                    <input type="radio" name="gender" value="other" id="other" onChange={adminInputHandler} />
                                    <label htmlFor="other" className="text-gray-400" >Other</label>
                                </div>
                            </div>
                        </div>

                        {/* introduction section */}
                        <div className="grid grid-cols-12" >
                            <label className="opacity-50 text-white col-span-12 my-2">Contact Details : </label>
                            <div className="col-span-6 w-full" >
                                <div className="col-span-12" >
                                    <Box
                                        component="form"
                                        // sx={{ '& > :not(style)': { m: 1, width: '30ch', color: 'white', input: { color: "white" } } }}
                                        sx={{
                                            input: { color: "white", width: '30ch' },                // text color
                                            "& .MuiInputLabel-root": { color: "white" }, // label color
                                            "& .MuiFilledInput-underline:before": { borderBottomColor: "white" }, // default underline
                                            "& .MuiFilledInput-underline:after": { borderBottomColor: "white" },  // focused underline
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="filled-basic" label="Email" variant="filled" type="text" name="email" placeholder="enter your email..." required onChange={validateEmail} />
                                    </Box>
                                </div>
                                <span className="flex col-span-12 text-red-500 my-2" >
                                    {adminError?.emailError ? adminError?.emailError : ""}
                                </span>
                            </div>

                            <div className="col-span-6 flex w-full" >
                                <Box
                                    component="form"
                                    // sx={{ '& > :not(style)': { m: 1, width: '30ch', color: 'white', input: { color: "white" } } }}
                                    sx={{
                                        input: { color: "white", width: '30ch' },                // text color
                                        "& .MuiInputLabel-root": { color: "white" }, // label color
                                        "& .MuiFilledInput-underline:before": { borderBottomColor: "white" }, // default underline
                                        "& .MuiFilledInput-underline:after": { borderBottomColor: "white" },  // focused underline
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="filled-basic" label="Password" variant="filled" type="text" name="password" placeholder="enter password..." required onChange={adminInputHandler} />
                                </Box>
                            </div>
                            <div className="col-span-6 flex w-full" >
                                <Box
                                    component="form"
                                    // sx={{ '& > :not(style)': { m: 1, width: '30ch', color: 'white', input: { color: "white" } } }}
                                    sx={{
                                        input: { color: "white", width: "30ch" },                // text color
                                        "& .MuiInputLabel-root": { color: "white" }, // label color
                                        "& .MuiFilledInput-underline:before": { borderBottomColor: "white" }, // default underline
                                        "& .MuiFilledInput-underline:after": { borderBottomColor: "white" },  // focused underline
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="filled-basic" label="Contact Number" variant="filled" type="password" name="password" placeholder="enter password..." required onChange={contactInputHandler} />
                                </Box>
                            </div>
                        </div>
                        {/* introduction section end */}



                        {/* contact section */}
                        <div className="py-2" >
                            {/* Address section */}
                            <label className="opacity-50 text-gray-300 flex my-3" >Address : </label>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel
                                        id="demo-simple-select-label"
                                        sx={{ color: "white", "&.Mui-focused": { color: "white" } }}
                                    >
                                        City
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="address"   // 👈 matches the key inside contactDetails
                                        value={adminObject.contactDetails.address}
                                        label="City"
                                        onChange={contactInputHandler}
                                        sx={{
                                            color: "white",
                                            ".MuiSvgIcon-root": { color: "white" }
                                        }}
                                    >
                                        {addressData?.map((ele, idx) => (
                                            <MenuItem key={idx} value={ele.city}>
                                                {ele.city}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>

                            <div className=" grid grid-cols-12 gap-2 ">
                                <div className="col-span-6 py-4" >
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel
                                                id="demo-simple-select-label"
                                                sx={{ color: "white", "&.Mui-focused": { color: "white" } }}
                                            >
                                                State
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="address"   // 👈 matches the key inside contactDetails
                                                value={adminObject.contactDetails.address}
                                                label="state"
                                                onChange={contactInputHandler}
                                                sx={{
                                                    color: "white",
                                                    ".MuiSvgIcon-root": { color: "white" }
                                                }}
                                            >
                                                {addressData?.map((ele, idx) => (
                                                    <MenuItem key={idx} value={ele.state}>
                                                        {ele.state}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="col-span-6 py-4" >
                                    {/* <label className="text-gray-300" >Country : </label> */}
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel
                                                id="demo-simple-select-label"
                                                sx={{ color: "white", "&.Mui-focused": { color: "white" } }}
                                            >
                                                Country
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="address"   // 👈 matches the key inside contactDetails
                                                value={adminObject.contactDetails.address}
                                                label="Country"
                                                onChange={contactInputHandler}
                                                sx={{
                                                    color: "white",
                                                    ".MuiSvgIcon-root": { color: "white" }
                                                }}
                                            >
                                                {addressData?.map((ele, idx) => (
                                                    <MenuItem key={idx} value={ele.country}>
                                                        {ele.country}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Box>

                                </div>
                            </div>
                            {/* Address section end */}
                        </div>
                        {/* contact section end */}



                        {/* Employeement section  */}
                        <div>
                            <div className="pb-3" >
                                <span className="opacity-50 text-gray-300" >Employment Details : </span>
                            </div>

                            <div className="grid grid-cols-12 gap-2" >
                                <div className="col-span-6 flex">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="Pick a date"
                                            // value={adminObject.dob}
                                            onChange={(newValue) => {
                                                adminInputHandler(newValue);
                                            }}
                                        />
                                    </LocalizationProvider>

                                    {/* //////////////////////////////////////////////// */}

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="Pick a date"
                                            // value={adminObject.dob}
                                            onChange={(newValue) => {
                                                adminInputHandler(newValue);
                                            }}
                                            name="date"
                                        />
                                    </LocalizationProvider>
                                </div>

                                <div className="col-span-6 flex items-center gap-2" >
                                    <input type="checkbox" name="employmentStatus" className="text-2xl" checked={adminObject.employmentDetails.employmentStatus} onChange={employeeDetailsHandler} />
                                    <p className="text-gray-400" >EmploymentStatus </p>
                                </div>
                                <div className="col-span-6" >
                                    <Box
                                        component="form"
                                        // sx={{ '& > :not(style)': { m: 1, width: '30ch', color: 'white', input: { color: "white" } } }}
                                        sx={{
                                            input: { color: "white", width: '30ch' },                // text color
                                            "& .MuiInputLabel-root": { color: "white" }, // label color
                                            "& .MuiFilledInput-underline:before": { borderBottomColor: "white" }, // default underline
                                            "& .MuiFilledInput-underline:after": { borderBottomColor: "white" },  // focused underline
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="filled-basic" label="Salary" variant="filled" type="text" name="salary" placeholder={`${adminObject?.employmentDetails?.salary}`} required onChange={employeeDetailsHandler} />
                                    </Box>
                                    {/* <input type="text" name="salary" className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="210000" required  /> */}
                                </div>

                            </div>
                        </div>
                        {/* Employeement section end  */}



                        {/* Education Details section */}
                        <div className="mt-5" >
                            <div>
                                <span className="opacity-50 text-gray-300"  >Education Details : </span>
                            </div>
                            <div className="grid grid-cols-12 gap-2 py-1" >

                                <div className="col-span-6" >
                                    <Box
                                        component="form"
                                        // sx={{ '& > :not(style)': { m: 1, width: '30ch', color: 'white', input: { color: "white" } } }}
                                        sx={{
                                            input: { color: "white", width: '30ch' },                // text color
                                            "& .MuiInputLabel-root": { color: "white" }, // label color
                                            "& .MuiFilledInput-underline:before": { borderBottomColor: "white" }, // default underline
                                            "& .MuiFilledInput-underline:after": { borderBottomColor: "white" },  // focused underline
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="filled-basic" label="Qualification" variant="filled" type="text" name="qualification" placeholder="graduation details..." required onChange={educationDetailsHandler} />
                                    </Box>
                                    {/* <input type="text" name="qualification" className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Qualification..." required onChange={educationDetailsHandler} /> */}
                                </div>
                                <div className="col-span-6" >
                                    {/* <label className="text-gray-300" >Year Of Graduation</label> */}
                                    <Box
                                        component="form"
                                        // sx={{ '& > :not(style)': { m: 1, width: '30ch', color: 'white', input: { color: "white" } } }}
                                        sx={{
                                            input: { color: "white", width: '30ch' },                // text color
                                            "& .MuiInputLabel-root": { color: "white" }, // label color
                                            "& .MuiFilledInput-underline:before": { borderBottomColor: "white" }, // default underline
                                            "& .MuiFilledInput-underline:after": { borderBottomColor: "white" },  // focused underline
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="filled-basic" label="Qualification year" variant="filled" type="number" name="yearOfGraduation" placeholder="year..." required onChange={educationDetailsHandler} />
                                    </Box>
                                    {/* <input type="number" name="yearOfGraduation" className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="graduation year" required onChange={educationDetailsHandler} /> */}
                                </div>

                                {/* <FileUpload /> */}
                                <div className="col-span-12 flex items-center pt-4" >
                                    <Stack spacing={2} direction="row" color="success">
                                        <Button variant="contained" color="primary" onClick={adminSubmitHandler} >
                                            Success
                                        </Button>
                                    </Stack>
                                    {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={adminSubmitHandler} >Submit</button> */}
                                </div>
                            </div>
                        </div>
                        {/* Education Details section end */}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PrincipalSignup