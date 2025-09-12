import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import TemporaryDrawer from "./Sidebar2";

const Navbar = () => {

    const navigate = useNavigate()

    const [loginSignupStatus, setLoginSignupStatus] = useState(['admin', 'teacher', 'student'])
    const [sideBar, setSideBar] = useState(false)

    return (
        <div className="" >
            <div className="px-10 py-3" >
                <div className=" flex justify-between items-center px-5" >

                    <div className="flex gap-5 " >
                        <span className="flex items-center gap-5 font-semibold text-2xl text-white "  ><Link to="/home" ><img className="h-12 rounded-full cursor-pointer" src="https://thumbs.dreamstime.com/b/education-badge-logo-design-university-high-school-emblem-education-badge-logo-design-university-high-school-emblem-151924849.jpg" /></Link> <Link to="/home" className="hover:cursor-pointer" >Sahjanand college</Link></span>
                    </div>

                    <span className="text-white text-3xl hover:cursor-pointer sm:flex xl:hidden" onClick={() => setSideBar(!sideBar)} ><TemporaryDrawer /></span>

                    <div className="gap-5 hidden xl:flex" >
                        <div>
                            <button className="hover:cursor-pointer rounded-md border-2 border-blue-400 hover:text-blue-500 text-blue-300 text-sm p-3" onClick={() => navigate('/production')} >Production</button>
                        </div>
                        <div>
                            <button className="hover:cursor-pointer rounded-md border-2 border-blue-400 hover:text-blue-500 text-blue-300 text-sm p-3" onClick={() => navigate('/digital-marketing')} >Digital Marketing</button>
                        </div>

                        <div>
                            <button className="hover:cursor-pointer rounded-md border-2 border-blue-400 hover:text-blue-500 text-blue-300 text-sm p-3" onClick={() => navigate('/service')} >Services</button>
                        </div>
                        <div>
                            <button className="hover:cursor-pointer rounded-md border-2 border-blue-400 hover:text-blue-500 text-blue-300 text-sm p-3" onClick={() => navigate('/about-us')} >About Us</button>
                        </div>

                        <div className="relative inline-block group">
                            <div className="border-2 border-blue-400 rounded-md p-2">
                                <div className="inline-flex items-center hover:text-blue-500 text-blue-300 text-sm">
                                    <span>Login</span>
                                    <svg className="w-2.5 h-2.5 ms-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </div>

                                <div className="absolute left-0 z-10 hidden group-hover:block bg-gray-800 divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 border border-gray-700 rounded-md">
                                        {
                                            loginSignupStatus?.map((ele, idx) => {
                                                return (
                                                    <ul key={ele}>
                                                        <Link to={`/${ele}-login`} className="block px-4 py-2 hover:bg-gray-700 text-white hover:text-white">{ele}</Link>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative inline-block group">
                            <div className="border-2 border-blue-400 rounded-md p-2" >
                                <span className="inline-flex items-center hover:text-blue-500 text-blue-300 text-sm">
                                    Signup
                                    <svg className="w-2.5 h-2.5 ms-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </span>

                                <div className="absolute left-0 z-10 hidden group-hover:block bg-gray-800 divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 border border-gray-700 rounded-md">
                                        {
                                            loginSignupStatus?.map((ele, idx) => {
                                                return (
                                                    <ul key={ele}>
                                                        <Link to={`/${ele}-signup`} className="block px-4 py-2 hover:bg-gray-700 hover:text-white">{ele}</Link>
                                                    </ul>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>

                    

                </div>
            </div>
        </div>
    )
}

export default Navbar