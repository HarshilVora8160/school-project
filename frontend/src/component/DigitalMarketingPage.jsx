import Footer from "./Footer"
import Navbar from "./Navbar"

const DigitalMarketing = () => {
    return (
        <div className="bg-gray-900" >
            <div>
                <Navbar />
            </div>
            <div>
                <div className="bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 p-[2px]" ></div>
            </div>
            <div>
                <div className="flex justify-center" >
                    <div className="w-[400px] md:w-[650px]" >
                        <div className="flex justify-center text-center py-10" >
                            <div>
                                <h1 className="text-white text-4xl md:text-6xl py-4" >Digital Marketing Solutions</h1>
                                <h4 className="text-white text-xl md:text-2xl py-4" >Grow your business with expert digital marketing strategies</h4>
                                <h3 className="text-white text-2xl md:text-4xl py-4" >Explore What Services are We offering</h3>
                                <h5 className="text-white md:text-xl py-4" >At Arabic Tech Solutions, we provide cutting-edge digital marketing strategies that ensure maximum online visibility and business growth. Our expert team helps in SEO, Social Media, PPC, and Email Marketing.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {/* 1.image and text */}
                <div className="grid grid-cols-12 py-5" >
                    <div className="col-span-12 md:col-span-6 flex justify-center items-center" >
                        <img className="rounded-xl" src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?cs=srgb&dl=pexels-fauxels-3183150.jpg&fm=jpg" />
                    </div>
                    <div className="col-span-12 md:col-span-6 px-10 xl:px-15" >
                        <h1 className="text-4xl xl:text-5xl font-semibold text-white pt-10 md:pt-0" >SEO Optimization</h1>
                        <p className="text-gray-300 py-5 text-base/6 sm:text-base/8 md:text-[16px] xl:text-[20px]" >Our SEO optimization services are designed to help your business rank higher on search engines and attract more qualified traffic. We use proven strategies including keyword research, on-page optimization, technical SEO, content creation, and backlink building to improve your visibility and drive long-term growth. Whether you’re a small business or an established brand, our goal is to enhance your online presence and ensure your website stands out in a competitive digital landscape. Let us help you get found by the right audience at the right time. Search Engine Optimization (SEO) is the foundation of a strong digital presence. Our SEO services are focused on increasing your website’s visibility in search engine results to drive organic traffic and improve rankings. We conduct in-depth keyword research, optimize website content and meta tags, enhance site speed, and ensure mobile responsiveness.</p>
                    </div>
                </div>

                {/* 2.image and text */}
                <div className="grid grid-cols-12 py-5 flex-col-reverse" >
                    <div className="col-span-12 md:col-span-6 px-10 order-last md:order-first" >
                        <div className="xl:px-15 pt-10" >
                            <h1 className="text-4xl md:4xl xl:text-5xl font-semibold text-white" >Social Media Marketing</h1>
                            <p className="text-gray-300 py-5 text-base/6 sm:text-base/8 md:text-[16px] xl:text-[20px]" >Our social media marketing services are crafted to build brand awareness, engage your audience, and drive real results across platforms like Facebook, Instagram, LinkedIn, and more. We create targeted content, run data-driven ad campaigns, and manage your social presence to ensure consistent growth and meaningful customer connections. Whether you’re launching a new product or growing an existing brand, we help you stand out in the social space turning followers into loyal customers and clicks into conversions. In today’s digital world, your audience lives on social media and so should your brand. Our social media marketing services help you build a strong and consistent presence across platforms like Facebook, Instagram, Twitter, LinkedIn, and more.</p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 flex items-center order-first md:order-last" >
                        <div className="flex w-full" >
                            <img className="rounded-xl w-full h-auto xl:h-[420px]" src="https://t4.ftcdn.net/jpg/05/14/20/47/360_F_514204772_mT0EpTdZkScyiRPn2PInaKaqd88QGrzE.jpg" />
                        </div>
                    </div>
                </div>

                {/* 3.image and text */}
                <div className="grid grid-cols-12 py-10" >
                    <div className="col-span-12 md:col-span-6 flex items-center" >
                        <img className="rounded-xl" src="https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg" />
                    </div>
                    <div className="col-span-12 md:col-span-6 px-10 xl:px-15 pt-10" >
                        <h1 className="text-4xl xl:text-5xl font-semibold text-white" >PPC Advertising</h1>
                        <p className="text-gray-300 py-5 text-base/8 xl:text-[20px]" >Our PPC (Pay-Per-Click) advertising services are designed to deliver instant visibility and measurable results. By creating highly targeted ad campaigns on platforms like Google Ads, Facebook, and Instagram, we help you reach the right audience at the right time. From keyword research and ad copywriting to bidding strategies and performance tracking, we handle every aspect to maximize your return on investment. Whether you’re looking to increase website traffic, generate leads, or boost sales, our PPC solutions are tailored to meet your business goals efficiently and effectively. Pay-Per-Click (PPC) advertising offers one of the fastest ways to attract high-converting traffic to your website. Our PPC experts create strategic ad campaigns on platforms like Google Ads, Bing, Facebook, and Instagram.</p>
                    </div>
                </div>

                {/* 4.image and text */}
                <div className="grid grid-cols-12 py-5" >
                    <div className="col-span-12 md:col-span-6 px-10 md:px-15 order-last md:order-first" >
                        <div className="" >
                            <h1 className="text-4xl xl:text-5xl font-semibold text-white" >Email Marketing</h1>
                            <p className="text-gray-300 py-5 text-base/8 xl:text-[20px]" >Our PPC (Pay-Per-Click) advertising services are designed to deliver instant visibility and measurable results. By creating highly targeted ad campaigns on platforms like Google Ads, Facebook, and Instagram, we help you reach the right audience at the right time. From keyword research and ad copywriting to bidding strategies and performance tracking, we handle every aspect to maximize your return on investment. Whether you’re looking to increase website traffic, generate leads, or boost sales, our PPC solutions are tailored to meet your business goals efficiently and effectively. Pay-Per-Click (PPC) advertising offers one of the fastest ways to attract high-converting traffic to your website. Our PPC experts create strategic ad campaigns on platforms like Google Ads, Bing, Facebook, and Instagram.</p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 order-first md:order-last flex items-center" >
                        <div className="flex w-full" >
                            <img className="rounded-xl w-full" src="https://media.istockphoto.com/id/1282806068/photo/email-marketing-concept-person-reading-e-mail-on-smartphone.jpg?s=612x612&w=0&k=20&c=NDoQ6NcTNAYi4Xsn30XVmB-QXdr907PTOQPnqLNdAlc=" />
                        </div>
                    </div>
                </div>

                {/* 5.image and text */}
                <div className="grid grid-cols-12 py-5" >
                    <div className="col-span-12 md:col-span-6 flex justify-center items-center" >
                        <div className="w-full" >
                            <img className="rounded-xl w-full" src="https://synergiseit.com.au/wp-content/uploads/2019/11/1-1170x782.png" />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 px-10 xl:px-15" >
                        <h3 className="text-xl font-semibold text-white py-5" >GET TO KNOW US</h3>
                        <h1 className="text-4xl xl:text-5xl font-semibold text-white py-5" >We Provide the Best IT Solutions</h1>
                        <p className="text-gray-300 py-5 text-base/7 text-[18px] xl:text-[20px]" >At Arabic TechSolutions, we specialize in delivering top-tier IT and web development solutions. Our team focuses on innovation, scalability, and performance to empower businesses in the digital world.</p>
                        <p className="text-2xl font-semibold text-white py-5" >Innovative Strategies</p>
                        <p className="text-gray-300 py-5 text-base/7 text-[18px] xl:text-[20px]" >We craft digital solutions tailored to drive growth and engagement. We craft innovative strategies that blend creativity with data-driven insights to deliver exceptional digital outcomes</p>
                        <p className="text-2xl font-semibold text-white py-5" >Expert Developers</p>
                        <p className="text-gray-300 py-5 text-base/7 text-[18px] xl:text-[20px]" >Our team ensures seamless and secure web applications for businesses. Our team of expert developers transforms ideas into high-performing digital solutions with precision, skill, and reliability.</p>
                        <h1 className="text-2xl font-semibold text-white py-5" >Lead Tech Strategist</h1>
                        <p className="text-gray-300 py-5 text-base/7 text-[18px] xl:text-[20px]" >Crafting smart tech strategies that drive digital growth. Our Lead Tech Strategist ensures every project is guided by smart technology choices, scalable architecture, and forward-thinking innovation.</p>
                    </div>
                </div>

                {/* 6.image and text */}
                <div className="grid grid-cols-12 py-5" >
                    <div className="col-span-12 md:col-span-6 flex items-center order-last md:order-last" >
                        <div className="col-span-6 px-10 md:px-15 py-5" >
                            <h1 className="text-[16px] md:text-xl text-white" >COMPANY BENEFITS</h1>
                            <h1 className="text-3xl xl:text-5xl text-white py-5 md:py-10" >Why should choose our agency?</h1>
                            <p className="text-gray-300 text-base/8 text-[18px] xl:text-[20px]" >At our company, we blend creativity, innovation, and technical expertise to deliver digital solutions that truly make an impact. With a customer-first mindset, we take the time to understand your unique goals and craft strategies tailored specifically to your needs.</p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 order-first md:order-last flex items-center" >
                        <div className="w-full" >
                            <img className="rounded-xl w-full" src="https://img.freepik.com/premium-photo/content-marketing-concept-businessman-with-global-internet-network-connection-technology-digital-marketing-business-intelligence_27634-749.jpg" />
                        </div>
                    </div>
                </div>

                <div className="pt-10" >
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default DigitalMarketing