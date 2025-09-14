import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"

// import aadmin data // show // show in all pages admin data
// import student-table data
// import teacher-table data

const SchoolData = () => {

    const navigate = useNavigate()

    return (
        <div className="bg-gray-900 h-screen">
            <Navbar />
            <div className="p-[2px] bg-gradient-to-r from-red-500 to-green-500" ></div>

            <span className="text-white text-4xl flex justify-center my-5" >School Data</span>

            <div className="flex justify-center" >
                <div className="text-white w-[500px] bg-gray-700 rounded-xl px-2" >
                    <h3 className="py-3 flex justify-center my-2 p-2 text-2xl" >Admin</h3>
                    <h3 className="py-3 my-2 border border-gray-500 rounded-xl p-2 hover:bg-gray-600" onClick={()=>navigate("/teachers-table")} >Teachers Table</h3>
                    <h3 className="py-3 my-2 border border-gray-500 rounded-xl p-2 hover:bg-gray-600" onClick={()=>navigate("/students-table")} >Student Table</h3>
                    <h3 className="py-3 my-2 border border-gray-500 rounded-xl p-2 hover:bg-gray-600" onClick={()=>navigate("/teachers-table")} >Students Subjects & Activities</h3>
                </div>
            </div>
        </div>
    )
}

export default SchoolData