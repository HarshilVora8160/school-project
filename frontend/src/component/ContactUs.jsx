import Footer from "./Footer"
import Navbar from "./Navbar"

const ContactUs = () => {
    return (
        <div className="bg-gray-900" >
            <div>
                <Navbar />
            </div>
            <div className="bg-gradient-to-r from-yellow-500 via-green-500 to-orange-500 p-[2px]" ></div>
            <div className="flex justify-center" >
                <div className="flex">
                    <div className="w-[400px] sm:w-[500px] md:w-[700px]" >
                        <div className="flex justify-center py-10" >
                            <h1 className="text-white text-5xl md:text-6xl" >Contact Us</h1>
                        </div>
                        <div className="flex justify-center" >
                            <h4 className="text-xl text-gray-300" >Have a question or need assistance? Our team is here to help you.</h4>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl py-6 text-white" >Address</h2>
                            <h4 className="text-[16px] md:text-[18px] text-gray-300" >405 Shreepad World Pal main road, Opp JK motors, Nr, Umara bridge Pal Gam, Surat, Gujarat 395009</h4>
                            <h2 className="text-2xl md:text-3xl py-6 text-white" >Phone Numbee</h2>
                            <h4 className="text-[16px] md:text-[18px] text-gray-300" >6352427532</h4>
                            <h2 className="text-2xl md:text-3xl py-6 text-white" >Email ID</h2>
                            <h4 className="text-[16px] md:text-[18px] text-gray-300" >harshilvora8160@gmail.com</h4>
                        </div>
                        <div className="py-5" >
                            <div className="flex justify-center py-5" >
                                <h1 className="text-white text-4xl" >Find Us on Map</h1>
                            </div>
                            <div className="py-3" >
                                <img src="https://www.mapsofindia.com/maps/gujarat/gujarat-index-20map.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default ContactUs