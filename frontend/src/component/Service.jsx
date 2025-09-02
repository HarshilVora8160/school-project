import Footer from "./Footer"
import Navbar from "./Navbar"

const ServicePage = () => {
    return (
        <div className="bg-gray-900" >
            <div>
                <Navbar />
            </div>
            <div>
                <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]"></div>
            </div>
            <div>
                <div className="text-white flex justify-center items-center text-center" >
                    <div className="" >
                        <div className="text-6xl mt-5 py-5" >
                            <h1>Services</h1>
                        </div>
                        <div className="pb-10" >
                            <div className="text-2xl py-5" >
                                <h1>We provide top-notch solutions to take your business to the next level.</h1>
                            </div>
                            <div className="" >
                                <button className="bg-gradient-to-br from-blue-700 to-blue-300 text-sm font-semibold rounded-sm py-3 px-5" >Get a free Consultation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-10 xl:px-20" >
                {/* 1.first image and text */}
                <div className="grid grid-cols-12 py-3" >
                    <div className="col-span-12 md:col-span-6 px-10 order-last md:order-first" >
                        <div>
                            <h1 className="text-white text-4xl xl:text-5xl py-5 md:py-7" >App Development</h1>
                            <p className="text-white text-base/7 xl:text-[18px]" >We turn bold ideas into polished, high-performance mobile experiences. From initial concept to App Store launch, our team handles every stage: market research, UX/UI design, native and cross-platform coding (iOS, Android, Flutter), rigorous QA testing, and ongoing post-release support. We emphasize clean architecture, scalable cloud back-ends, and secure API integrations, ensuring your app is fast, reliable, and ready to grow with your business. Whether you need a consumer-facing product, an internal enterprise tool, or an ecommerce engine in your users’ pockets, we deliver intuitive interfaces, smooth performance, and data-driven features that keep users engaged and drive measurable results.</p>
                        </div>
                    </div>
                    <div className="w-full col-span-12 md:col-span-6 flex justify-center items-center py-5 rounded-sm order-first md:order-last" >
                        <div>
                            <img className="w-auto rounded-xl h-full xl:h-96" src="https://media.gettyimages.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.jpg?s=612x612&w=0&k=20&c=zLh00Lt30vgOdyHmcB8LGBuZloVc5iODcj_hDQAzVAs=" />
                        </div>
                    </div>
                </div>
                {/* 2.second image and text */}
                <div className="grid grid-cols-12" >
                    <div className="col-span-12 md:col-span-6 flex justify-center items-center py-5 rounded-sm" >
                        <img className="w-auto rounded-xl xl:h-96" src="https://media.gettyimages.com/id/1735411371/photo/close-up-of-a-woman-website-developer-designing-a-webpage-on-laptop-at-creative-office.jpg?s=612x612&w=0&k=20&c=kjhoW4escVjUV5M4DcIgYh3KeMdbSTCk8ohtSAAVcd8=" />
                    </div>
                    <div className="col-span-12 md:col-span-6 px-10" >
                        <h1 className="text-white text-4xl md:text-5xl py-5 md:py-10" >Web Design</h1>
                        <p className="text-white text-base/7 xl:text-[18px] " >At the heart of every great website is thoughtful, user-focused design—and that’s exactly what we deliver. Our web design services combine creativity, strategy, and functionality to craft digital experiences that not only look stunning but also perform seamlessly. We focus on clean layouts, intuitive navigation, and responsive design to ensure your website looks great and works flawlessly on all devices, from desktops to smartphones. Whether you’re building a brand-new site or revamping an existing one, we work closely with you to understand your brand, audience, and goals.</p>
                    </div>
                </div>
                {/* 3.third image and text */}
                <div className="grid grid-cols-12" >
                    <div className="col-span-12 md:col-span-6 px-10 order-last md:order-first" >
                        <div>
                            <h1 className="text-white text-4xl xl:text-5xl py-5 md:py-10" >E-Commerce Website</h1>
                            <p className="text-white text-base/7  xl:text-[18px]" >We build secure, conversion-focused online stores that make shopping effortless and enjoyable. Starting with a deep dive into your products, target audience, and sales goals, we craft a responsive storefront that looks great on every device. Behind the scenes, we integrate robust product catalogs, advanced search and filtering, multiple payment gateways, real-time shipping calculations, and automated tax rules. Our checkout flows are streamlined to reduce cart abandonment, while built-in SEO, analytics, and marketing tools help you attract and retain customers.</p>
                        </div>
                    </div>
                    <div className="w-full col-span-12 md:col-span-6 flex justify-center items-center py-5 rounded-sm order-first md:order-last" >
                        <img className="w-auto rounded-xl xl:h-96" src="https://media.gettyimages.com/id/1407968044/photo/senior-asian-man-working-on-laptop-in-bicycle-shop.jpg?s=612x612&w=0&k=20&c=taVHRGkEBoVTZcnkSdmMCwbYj1axoOWuwjli4OPdMWg=" />
                    </div>
                </div>
                {/* 4.four image and text */}
                <div className="grid grid-cols-12 py-3" >
                    <div className="col-span-12 md:col-span-6 flex justify-center items-center py-5 rounded-sm" >
                        <img className="w-auto rounded-xl xl:h-96" src="https://media.gettyimages.com/id/2166193783/photo/data-analytics-team-meeting-at-night.jpg?s=612x612&w=0&k=20&c=MBhix9YGEH0JQ39j2K8Dp4mA-tZ4QMWFm6V90rJGRJg=" />
                    </div>
                    <div className="col-span-12 md:col-span-6 px-10" >
                        <h1 className="text-white text-4xl xl:text-5xl py-5 md:py-10" >Digital Marketing</h1>
                        <p className="text-white text-base/7 xl:text-[18px]" >Our digital marketing strategies blend data, creativity, and cutting-edge tech to amplify your brand’s reach and revenue. We start with in-depth audience and competitor analysis, then craft tailored campaigns across SEO, pay-per-click (Google & Meta Ads), social media, email automation, and content marketing. Every tactic is tracked with precise analytics and A/B testing, so we can continuously refine messaging, targeting, and budget for maximum ROI. Whether you need to boost organic traffic, generate qualified leads, or scale an e-commerce funnel.</p>
                    </div>
                </div>
                {/* 5.five image and text */}
                <div className="grid grid-cols-12 py-3" >
                    <div className="col-span-12 md:col-span-6 px-10 order-last md:order-first" >
                        <h1 className="text-white text-4xl xl:text-5xl py-5 md:py-10" >Flutter Development</h1>
                        <p className="text-white text-base/7 xl:text-[18px]" >We specialize in building high-quality, cross-platform mobile apps using Flutter, Google’s powerful UI toolkit. With Flutter, we create stunning, natively compiled applications for both Android and iOS from a single codebase — saving you time, cost, and complexity. Our Flutter development process focuses on performance, scalability, and smooth user experiences with pixel-perfect UI designs and fast load times. Whether it’s an MVP for a startup or a feature-rich enterprise app, we handle everything from architecture and state management to API integration and deployment. Let us help you bring your app idea to life — faster, smarter, and with native-like performance.</p>
                    </div>

                    <div className="col-span-12 md:col-span-6 flex justify-center items-center py-5 rounded-sm order-first md:order-last" >
                        <img className="w-auto rounded-xl xl:h-96" src="https://media.gettyimages.com/id/1081869356/photo/taking-on-the-late-shift-with-true-dedication.jpg?s=612x612&w=0&k=20&c=6cd0XCc7SXbwh3gDTDgg7yjljBPbW8gAmUUmDCQqs9E=" />
                    </div>
                </div>
                {/* 6.six image and text */}
                <div className="grid grid-cols-12 py-3" >
                    <div className="col-span-12 md:col-span-6 flex justify-center items-center py-5 rounded-sm" >
                        <img className="w-auto rounded-xl xl:h-96" src="https://media.gettyimages.com/id/1488105061/photo/the-power-of-ai-transforming-industries-and-customer-service-a-look-into-the-future-yellow-ai.jpg?s=612x612&w=0&k=20&c=I2n0qzivdUE467LOkCe6p-QRRISHbgaHeKP0TAdsI2U=" />
                    </div>
                    <div className="col-span-12 md:col-span-6 px-10 flex items-center" >
                        <div>
                            <h1 className="text-white text-4xl md:ext-5xl py-5 md:py-10" >Mobile App Development</h1>
                            <p className="text-white text-base/7 xl:text-[18px]" >We design and build high-performance mobile apps that combine intuitive UX/UI with rock-solid native or cross-platform code (iOS, Android, Flutter). From concept and architecture to testing, launch, and post-release support, we deliver secure, scalable apps that engage users and drive real business results.</p>
                        </div>
                    </div>
                </div>
                {/* 7.seven image and text */}
                <div className="grid grid-cols-12 py-3" >
                    <div className="col-span-12 md:col-span-6 px-10 flex items-center order-last md:order-first" >
                        <div>
                            <h1 className="text-white text-4xl xl:text-5xl py-5 md:py-10" >24/7 Technical Support</h1>
                            <p className="text-white text-base/7 xl:text-[18px]" >Our dedicated support team ensures your business operates smoothly with round-the-clock assistance. Whether it’s troubleshooting, maintenance, or emergency fixes, we provide reliable technical support tailored to your needs.</p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 flex justify-center items-center py-5 rounded-sm order-first md:order-last" >
                        <img className="w-auto rounded-xl xl:h-96" src="https://media.gettyimages.com/id/1377619296/photo/customer-feedback-can-improve-product-and-service-group-of-customer-service-agent-in-a-tech.jpg?s=612x612&w=0&k=20&c=M9g2eJz7bR_EN-OI7JDBrA2_OrI7EC4-DFMmtvDEPaw=" />
                    </div>
                </div>
                <div className="flex justify-center pb-15" >
                    <button className="p-3 text-sm font-semibold text-white bg-gradient-to-br from-blue-700 to-blue-400 rounded-sm px-5" >Enquire</button>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default ServicePage