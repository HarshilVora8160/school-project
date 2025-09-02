import Navbar from './Navbar';
import Footer from './Footer';

const AboutUsPage = () => {
  return (
    <div className='bg-gray-900' >
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]"></div>
        </div>
        <div className='flex justify-center py-10' >
          <h1 className='text-white text-6xl' >About Us</h1>
        </div>
        {/* 1.image and text */}
        <div className='grid grid-cols-12 py-5' >
          <div className='col-span-12 md:col-span-6 py-5 md:pl-15 flex justify-center tece items-center px-10 order-last md:order-first' >
            <div className='col-span-6' >
              <div>
                <p className='text-white text-2xl md:text-3xl py-3 md:py-5' >Arabic Tech Solutions is a team of experienced professionals specializing in IT, pre-production, and digital marketing.</p>
              </div>
              <div>
                <p className='text-white text-xl md:text-2xl py-3 md:py-5' >Our mission is to help businesses achieve their goals and create lasting relationships with their customers.</p>
              </div>
              <div className='flex justify-center py-5' >
                <button className='text-white text-sm font-semibold py-3 bg-gradient-to-r from-blue-600 to-blue-400 px-5 rounded-sm' >Discover our Services</button>
              </div>
            </div>
          </div>
          <div className="flex justify-center col-span-12 md:col-span-6 order-first md:order-last">
            <img
              className="h-100 w-full object-cover rounded-2xl"
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?cs=srgb&dl=pexels-fauxels-3184338.jpg&fm=jpg"
              alt="Student Image"
            />
          </div>
        </div>

        {/* 2.image and text */}
        <div className='grid grid-cols-12' >

          <div className="flex col-span-12 md:col-span-6">
            <div className='flex' >
              <img
                className="xl:h-110 w-[650px] object-cover rounded-2xl"
                src="https://m.media-amazon.com/images/I/81tndPuXhSL._UF1000,1000_QL80_.jpg"
                alt="Student Image"
              />
            </div>
          </div>

          <div className='col-span-12 md:col-span-6 flex justify-center items-center xl:pr-10' >
            <div className='col-span-6' >
              <div>
                <p className='text-white text-4xl py-5' >Our History</p>
              </div>
              <div>
                <p className='text-white text-xl py-5' >Arabic Tech Solutions was founded in 2010 by a team of experienced professionals who believe in the power of technology to help businesses achieve their goals and create lasting relationships with their customers.</p>
              </div>
              <div>
                <p className='text-white text-xl ' >Over the years, we've partnered with startups, enterprises, and global clients, turning ideas into powerful digital experiences. As technology evolved, so did we embracing new tools, trends, and platforms to stay ahead. Today, we are proud to be recognized for our innovation, quality, and customer-first approach, delivering impactful solutions across industries.</p>
              </div>
            </div>
          </div>

        </div>

        {/* 3.image and text */}
        <div className='grid grid-cols-12 py-10' >
          <div className='col-span-12 md:col-span-6 py-5 px-10 flex justify-center tece items-center order-last md:order-first' >
            <div className='col-span-6' >
              <div>
                <h1 className='text-white text-4xl py-3' >Our Vision</h1>
              </div>
              <div>
                <p className='text-white text-xl py-5' >Our vision is to empower businesses with innovative media and technology solutions that drive meaningful growth and create lasting impact. We aim to be a trusted partner for brands around the world — delivering creative, user-focused, and future-ready digital experiences. Through continuous learning, collaboration, and cutting-edge technologies, we strive to shape a smarter, more connected digital future for all.</p>
              </div>
              <div>
                <p className='text-white text-xl py-5' >At the heart of our company lies a vision to bridge creativity with technology transforming ideas into impactful digital experiences that inspire, engage, and deliver results. We envision a future where businesses of all sizes can leverage the power of innovative media, mobile apps, web platforms, and digital marketing to grow, connect, and thrive in an ever-evolving digital world.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end col-span-12 md:col-span-6 order-first md:order-last">
            <div className='flex items-center' >
            <img
              className="w-[700px] h-[400px] object-cover rounded-2xl"
              src="https://t3.ftcdn.net/jpg/01/37/90/78/360_F_137907818_LNzsqtQT7OAZ98BuA3T4TKiEbEOY543G.jpg"
              alt="Student Image"
              />
              </div>
          </div>
        </div>

        <div className='px-10 md:px-10 pb-10 grid grid-cols-12' >
          <div className='col-span-12 mx-10' >
            <p className='text-4xl text-white leading-[1.30]' >At our core, we prioritize pushing boundaries, embracing the unknown, and fostering a culture of continuous learning.</p>
          </div>
          <div className='py-5 col-span-12 px-10 md:px-10'>
            <div className='flex justify-center' >
              <div className='md:w-[700px] text-white text-xl' >
                <li className='py-3' >We thrive in uncertainty — taking risks, experimenting with new technologies, and turning challenges into opportunities for growth.</li>
                <li className='py-3' >We thrive in uncertainty — taking risks, experimenting with new technologies, and turning challenges into opportunities for growth.</li>
                <li className='py-3' >We cultivate a growth mindset, encouraging our team to learn, adapt, and evolve with the fast-changing digital landscape.</li>
                <li className='py-3' >We believe the best ideas are born from teamwork. Our open culture encourages sharing knowledge and co-creating impactful solutions.</li>
                <li className='py-3' >We don't just build for today — we design and develop with the future in mind, ensuring scalability, relevance, and long-term success.</li>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
