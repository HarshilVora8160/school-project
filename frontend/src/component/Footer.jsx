import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import UpgradeIcon from '@mui/icons-material/Upgrade';


const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // This makes the scroll smooth
            block: 'start',

        });
    }

    return (
        <div>
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]"></div>
            <div className="px-10 md:px-20 grid grid-cols-12 ">
                <div className="col-span-12 md:col-span-5">
                    <div className="flex py-5">
                        <span className="hover:text-blue-100 flex items-center gap-5 font-semibold text-xl text-white "><img className="h-10 rounded-full" src="https://thumbs.dreamstime.com/b/education-badge-logo-design-university-high-school-emblem-education-badge-logo-design-university-high-school-emblem-151924849.jpg" /> <Link to='/home' onClick={handleScrollToTop} className='hover:cursor-pointer' >Sahjanand college</Link></span>
                    </div>
                    <div>
                        <p className="text-white " >We provide a professional renovation and installation service with a real focus on customer satisfaction.</p>
                    </div>
                    <div className="py-5 gap-3 flex" >
                        <div>
                            <input type="text" className="p-3 bg-gray-800 w-60 md:w-42 xl:w-60 rounded-sm text-white" placeholder="enter search text..." />
                        </div>
                        <div>
                            <button className="bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 p-3 w-16 rounded-sm" ><SearchIcon className='text-white' /></button>
                        </div>
                    </div>
                    <div className='flex gap-x-3' >
                        <p className='text-white hover:cursor-pointer' onClick={handleScrollToTop} ><FacebookIcon sx={{ height: 18 }} /></p>
                        <p className='text-white hover:cursor-pointer' onClick={handleScrollToTop} ><XIcon sx={{ height: 18 }} /></p>
                        <p className='text-white hover:cursor-pointer' onClick={handleScrollToTop} ><InstagramIcon sx={{ height: 18 }} /></p>
                        <p className='text-white hover:cursor-pointer' onClick={handleScrollToTop} ><GitHubIcon sx={{ height: 18 }} /></p>
                    </div>
                    {/* <h1 className="text-white">Hello</h1> */}
                </div>
                <div className='col-span-12 md:col-span-7' >
                    <div className='py-10 md:py-5 text-white'>
                        <p className='text-white text-xl ' >Contact Us</p>
                        <p className='py-3 text-2xl' >Sahjanand college</p>
                        <div className='pt-5 ' >
                            <div className='flex items-center gap-x-1 py-1' onClick={handleScrollToTop} >
                                <span className='hover:underline hover:text-blue-400 hover:cursor-pointer' ><strong>Address :</strong> Jay Saradar Shaikshnik Sankul, near High Way Gurukul, Gondal, Gujarat 360311</span>
                            </div>

                            <div className='py-1' >
                                <span className='hover:text-blue-400 hover:underline hover:cursor-pointer' onClick={handleScrollToTop}>Contact No : +91 1234567890</span>
                            </div>
                            <div className='py-1' >
                                <span className='hover:text-blue-400 hover:underline hover:cursor-pointer' onClick={handleScrollToTop} >Email : harshilvora8160@gmail.com</span>
                            </div>
                        </div>
                        <div className='pt-5 pb-3' >
                            <p className='text-xl' >About</p>
                        </div>
                        <div>
                            <div className='py-1' >
                                <Link to="/service" onClick={handleScrollToTop} ><span className='py-[2px] hover:text-blue-400 hover:underline hover:cursor-pointer' >Service</span></Link>
                            </div>
                            <div className='py-1' >
                                <Link to="/production" onClick={handleScrollToTop} ><span className='py-[2px] hover:text-blue-400 hover:underline hover:cursor-pointer' >Production</span></Link>
                            </div>
                            <div className='py-1' >
                                <span className='py-[2px] hover:text-blue-400 hover:underline hover:cursor-pointer' ><Link to="/digital-marketing" onClick={handleScrollToTop}>Digital Marketing</Link></span>
                            </div>
                            <div className='py-1' >
                                <span className='py-[2px] hover:text-blue-400 hover:underline hover:cursor-pointer' ><Link to="/about-us" onClick={handleScrollToTop}>About Us</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-10'>
                    <div >
                        <h2 className='text-white underline hover:text-blue-400 hover:cursor-pointer text-sm flex' onClick={handleScrollToTop} >Top <UpgradeIcon /></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer