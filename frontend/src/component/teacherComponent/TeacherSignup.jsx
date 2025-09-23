import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../Navbar"

const TeacherSignup = () => {

    const [selectedDepartment, setSelectedDepartment] = useState('')
    const [selectedDepartmentSalary, setSelectedDepartmentSalary] = useState('')

    const [teacherObject,setTeacherObject] = useState({
        firstName:"",
        lastName:"", 
    })

    const [teacherDepartment, setTeacherDepartment] = useState([
        { department: 'Mathematics', salary: "100000" },
        { department: 'Physics', salary: "120000" },
        { department: 'Chemistry', salary: "130000" },
        { department: 'Biology', salary: "190000" },
        { department: 'Computer-science', salary: "200000" },
        { department: 'Information', salary: "40000" },
        { department: 'Technology', salary: "45000" },
        { department: 'English', salary: "73000" },
        { department: 'Hindi', salary: "60000" },
        { department: 'Gujarati', salary: "66000" },
        { department: 'Social Studies / History', salary: "57000" },
        { department: 'Geography', salary: "540000" },
    ])

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

    const departmentHandler = (e) => {
        setSelectedDepartment(e.target.value)
        const findDepartmentSalary = teacherDepartment?.find((ele, idx) => {
            if (ele.department === e.target.value) {
                return ele.salary
            }
        })
        setSelectedDepartmentSalary(findDepartmentSalary ? findDepartmentSalary?.salary : '')
    }

    const teacherInputHandler = (e) => {
        console.log("e.target.name-------------", e.target.name);
        console.log("e.target.value-------------", e.target.value);
    }

    return (
        <div className="bg-gray-900" >
            <div>
                <Navbar />
            </div>
            <div className="p-[2px] bg-gradient-to-r via-yellow-500 " ></div>
            <div className="flex justify-center items-center " >
                <div className="bg-gray-800 flex p-8 rounded-xl my-5 border-2 border-gray-700" >
                    <div className="mx-auto">
                        {/* introduction section */}
                        <div className="grid grid-cols-12 gap-4 mb-4" >
                            <div className="col-span-6 py-1">
                                <input type="text" name="firstName" className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter first name..." required onChange={teacherInputHandler} />
                            </div>
                            <div className="col-span-6 py-1">
                                <input type="text" name="lastName" className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter last name..." required onChange={teacherInputHandler} />
                            </div>
                            <div className="col-span-6 py-1">
                                <input type="date" className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={teacherInputHandler} />
                            </div>
                            <div className="col-span-6" >
                                <div className="py-3 flex" >
                                    <h1 className="me-3 text-md text-gray-400" >Gender : </h1>
                                    <div className="flex gap-1" >
                                        <input type="radio" name="gender" id="male" value="male" onChange={teacherInputHandler} />
                                        <label htmlFor="male" className="text-gray-400" >Male</label>
                                        <input type="radio" name="gender" id="female" value="female" onChange={teacherInputHandler} />
                                        <label htmlFor="female" className="text-gray-400" >Female</label>
                                        <input type="radio" name="gender" id="other" value="other" onChange={teacherInputHandler} />
                                        <label htmlFor="other" className="text-gray-400" >Other</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* introduction section end */}


                        {/* contact section */}
                        <div className="" >
                            <label className="opacity-50 text-white">Contact Details : </label>
                            <div className="py-1">
                                {/* <label className="text-gray-300">Email : </label> */}
                                <input type="text" className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required onChange={teacherInputHandler} />
                            </div>
                            <div className="py-5">
                                {/* <label className="text-gray-300" >Phone Number : </label> */}
                                <input type="number" className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter contact number..." required onChange={teacherInputHandler} />
                            </div>

                            {/* Address section */}
                            <label className="opacity-50 text-gray-300" >Address : </label>
                            <div className="grid grid-cols-12 gap-2 ">
                                <div className="col-span-12" >
                                    {/* <label className="text-gray-300" >City : </label> */}
                                    <select onChange={teacherInputHandler} name="city" className="bg-gray-700 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option >Choose a city</option>
                                        {
                                            addressData?.map((ele, idx) => {
                                                return (
                                                    <>
                                                        <option value={ele.city}>{ele.city}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="col-span-6 py-4" >
                                    {/* <label className="text-gray-300" >State :</label> */}
                                    <select onChange={teacherInputHandler} name="state" className="bg-gray-700 border text-gray-300  border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option>Select State...</option>
                                        {
                                            addressData?.map((ele, idx) => {
                                                return (
                                                    <>
                                                        <option value={ele.state}>{ele.state}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-span-6 py-4" >
                                    {/* <label className="text-gray-300" >Country : </label> */}
                                    <select onChange={teacherInputHandler} name="country" className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option>Select Country...</option>
                                        {
                                            addressData?.map((ele, idx) => {
                                                return (
                                                    <>
                                                        <option value={ele.country}>{ele.country}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            {/* Address section end */}
                        </div>
                        {/* contact section end */}


                        {/* Admission section  */}
                        <div>
                            <div className="py-1" >
                                <span className="opacity-50 text-gray-300" >Employment Details : </span>
                            </div>
                            <div className="grid grid-cols-12 gap-2" >
                                <div className="col-span-6" >
                                    {/* <span className="text-gray-300" >Hire date : </span> */}
                                    <input type="date" name="date" onChange={teacherInputHandler} className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="type your age.." required />
                                </div>
                                <div className="col-span-6 flex items-center gap-2" >
                                    <input type="checkbox" className="text-2xl" name="employmentStatus" id="status" onChange={teacherInputHandler} />
                                    <label className="text-gray-400 hover:cursor-pointer" htmlFor="status" >EmploymentStatus </label>
                                </div>
                                <div className="col-span-6  py-4" >
                                    {/* <label className="text-gray-300" >Department : </label> */}
                                    <select
                                        value={selectedDepartment}
                                        onChange={departmentHandler}
                                        className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option>Choose department</option>
                                        {
                                            teacherDepartment?.map((ele, idx) => {
                                                return (
                                                    <option key={ele.department} value={ele?.department}>{ele.department}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-span-6 py-4" >
                                    {/* <label className="text-gray-300" >Salary : </label> */}
                                    <select className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {!selectedDepartmentSalary ? <option>Salary</option> : <option>{selectedDepartmentSalary}</option>}
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Admission section  */}

                        {/* Education Details section */}
                        <div className="mb-4" >
                            <div>
                                <span className="opacity-50 text-gray-300"  >Education Details : </span>
                            </div>
                            <div className="grid grid-cols-12 gap-2 py-1" >
                                <div className="col-span-6" >
                                    {/* <label className="text-gray-300" >highest Qualification</label> */}
                                    <input type="text" className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Qualification..." required />
                                </div>
                                <div className="col-span-6" >
                                    {/* <label className="text-gray-300" >Year Of Graduation</label> */}
                                    <input type="number" className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="graduation year" required />
                                </div>
                                <div className="col-span-12 pt-4" >
                                    {/* <span className="text-gray-300">University</span> */}
                                    <input type="text" className="bg-gray-700 text-gray-300 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="graduation year" required />
                                </div>
                            </div>
                        </div>
                        {/* Education Details section end */}
                        <div className="flex justify-center" >
                            <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default TeacherSignup