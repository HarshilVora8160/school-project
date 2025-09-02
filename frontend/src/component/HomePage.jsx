import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import Navbar from './Navbar';
import CheckIcon from '@mui/icons-material/Check';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { useState } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const HomePage = () => {

  const [openIndex, setOpenIndex] = useState('');

  const toggleDropdown = (index) => {
    // setOpenIndex(openIndex === index ? null : index)
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This makes the scroll smooth
      block: 'start',

    });
  }

  return (
    <div>
      {/*i. Documentation department */}
      <div className='bg-gray-900 ' >
        <div>

          <img
            // className="absolute top-0 w-full object-cover rounded-2xl h-dvh bg-cover"
            // this item is picked on chat-gpt
            className="absolute w-full h-full object-cover opacity-60"
            src="https://plus.unsplash.com/premium_photo-1664110691200-0d37f5d0aea5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjaG9vbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
            alt="Student Image"
          />

          <div className="relative h-screen ">
            <div>
              <Navbar />
            </div>
            <div className='relative justify-center items-center flex h-screen' >
              <div className='w-[800px]' >
                <div>
                  <h1 className='text-2xl md:text-5xl xl:text-7xl font-bold flex justify-center text-center p-8 text-white' >Travel. Capture. Share</h1>
                  <h1 className='text-[18px] flex justify-center text-center p-8 text-white' >We provide innovative digital solutions to help businesses thrive in the modern era. Our expertise in web development, AI-driven strategies, and custom software solutions ensures success. Partner with us to transform your digital journey.</h1>
                </div>
                <div className='flex justify-center p-8 ' >
                  <Link to="/contact-us">
                    <button className='bg-gradient-to-br from-blue-600 to-cyan-300 hover:text-blue-600 px-5 py-3 text-sm  rounded-md text-white' onClick={handleScrollToTop} >JOIN NOW <NorthEastIcon sx={{ height: 15 }} /> </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-5 ">
          {/* Image Section */}
          <div className="flex justify-center px-10 py-10 items-center xl:block">
            <img
              className="h-72 xl:h-100 w-full md:w-[700px] object-cover rounded-2xl"
              src="https://media.istockphoto.com/id/1410336700/photo/happy-elementary-school-teacher-in-the-classroom-looking-at-camera.jpg?s=612x612&w=0&k=20&c=1ynz_zCPoYaAJWGKL_0gkYM2lX_vrhDRMRH0cNLuRrE="
              alt="Student Image"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col px-10 justify-center">
            <div className="font-semibold">
              <h1 className="text-cyan-400 font-semibold py-5">About Us</h1>
              {/* <h2 className='text-5xl text-white' >We are the top</h2> */}
              <h2 className="text-4xl xl:text-5xl text-white leading-[1.3] ">tech-driven team dedicated to crafting high quality web and mobile solutions.</h2>
            </div>
            <div className="py-5 text-white">
              <h2>We are a team of experienced engineers and digital specialists dedicated to delivering innovative solutions that will help our clients achieve their goals.</h2>
            </div>
            <div className="flex gap-5 flex-wrap">
              <button className="bg-gray-400 py-2 rounded-sm px-10 text-gray-800 hover:text-gray-200 hover:cursor-pointer">
                Register now
              </button>
              <button className="border border-gray-400 py-2 rounded-sm px-10 text-white hover:text-gray-400 hover:cursor-pointer">
                Learn more
              </button>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-5">
          {/* Text Section */}
          <div className="flex flex-col px-10 justify-center order-last md:order-first">
            <div className="font-semibold">
              <h1 className="text-blue-400 font-semibold py-5">Our Expertise</h1>
              <h2 className="text-xl sm:text-2xl md:text-5xl text-white">What makes us sparkle</h2>
            </div>
            <div className="py-8">
              <span className="flex text-blue-400 gap-2 py-[1px]"><CheckIcon /><p className="text-white"> Web Design</p></span>
              <span className="flex text-blue-400 gap-2 py-[1px]"><CheckIcon /><p className="text-white"> Web Application</p></span>
              <span className="flex text-blue-400 gap-2 py-[1px]"><CheckIcon /><p className="text-white"> Digital Marketing</p></span>
              <span className="flex text-blue-400 gap-2 py-[1px]"><CheckIcon /><p className="text-white"> Mobile Application</p></span>
            </div>
            <div className="flex gap-5 flex-wrap">
              <Link to="/service">
                <button className="bg-gradient-to-br from-blue-600 to-cyan-300 py-3 rounded-sm px-7 text-white hover:text-blue-200 hover:cursor-pointer" onClick={handleScrollToTop}>
                  Get started
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center px-5 md:px-10 py-10 order-first md:order-last">
            <img
              className="h-90 w-full md:w-[700px] object-cover rounded-2xl"
              src="https://media.istockphoto.com/id/1358014313/photo/group-of-elementary-students-having-computer-class-with-their-teacher-in-the-classroom.jpg?s=612x612&w=0&k=20&c=3xsykmHXFa9ejL_sP2Xxiow7zdtmKvg15UxXFfgR98Q="
              alt="Student Image"
            />
          </div>
        </div>


        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center px-10 py-5">
          <div className="bg-gray-400 p-8 flex items-center gap-5 rounded-lg">
            <ManageAccountsIcon className="text-white" sx={{ fontSize: 60 }} />
            <div className="text-gray-50">
              <h1 className="text-lg font-semibold">Quality Teachers</h1>
              <p className="text-[12px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus aperiam repellat voluptates?
              </p>
            </div>
          </div>

          <div className="bg-gray-500 p-8 flex items-center gap-5 rounded-lg">
            <ImportContactsOutlinedIcon className="text-white" sx={{ fontSize: 60 }} />
            <div className="text-gray-200">
              <h1 className="text-lg font-semibold">Best Curriculum</h1>
              <p className="text-[12px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus aperiam repellat voluptates?
              </p>
            </div>
          </div>

          <div className="bg-gray-600 p-8 flex items-center gap-5 rounded-lg">
            <TravelExploreOutlinedIcon className="text-white" sx={{ fontSize: 60 }} />
            <div className="text-gray-200">
              <h1 className="text-lg font-semibold">Global Recognition</h1>
              <p className="text-[12px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus aperiam repellat voluptates?
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*i. Documentation department end */}

      {/*ii. Product Design department */}
      <div className='bg-gray-900 ' >
        <div className='px-10 md:px-20 py-10' >
          {/* 1. Product Design */}
          <div>
            <div className='flex justify-center items-center text-center p-5'>
              <span className='text-3xl md:text-5xl text-white ' >Product Design</span>
            </div>
            <div className='flex justify-center text-center' >
              <div className='w-[700px]' >
                <span className='text-white text-[18px]' >We provide end-to-end digital solutions to bring your ideas to life. Whether you’re a startup looking to launch fast or an established business aiming to modernize your digital presence, we deliver tailored solutions that combine creativity, performance, and user-centric design. With a focus on quality, speed, and innovation.</span>
              </div>
            </div>
          </div>
          {/* 1. Product Design end */}

          {/* 2. Four boxes Department */}
          <div className='py-10'>
            <div className='grid grid-cols-12 gap-6' >

              <div className='col-span-12 sm:col-span-6 md:col-span-6 xl:col-span-3 bg-gray-700 rounded-md px-8 py-5' >
                <div className='flex justify-center' >
                  <img className='h-15' src='https://cdn-icons-png.flaticon.com/512/712/712065.png' />
                </div>
                <h1 className='flex justify-center py-4 text-white text-3xl' >Planning</h1>
                <p className='flex text-center text-[18px] text-white' >We gather requirements, define goals, and outline a clear roadmap for success.</p>
              </div>

              <div className='col-span-12 sm:col-span-6 md:col-span-6 xl:col-span-3 bg-gray-700 rounded-md px-8 py-5' >
                <div className='flex justify-center' >
                  <img className='h-15' src='https://cdn-icons-png.flaticon.com/128/7991/7991055.png' />
                </div>
                <h1 className='flex justify-center py-4 text-white text-3xl' >Development</h1>
                <p className='flex text-center text-[18px] text-white' >Our team brings the plan to life with clean, scalable, and efficient code.</p>
              </div>

              <div className='col-span-12 sm:col-span-6 md:col-span-6 xl:col-span-3 bg-gray-700 rounded-md px-8 py-5' >
                <div className='flex justify-center' >
                  <img className='h-15' src='https://cdn-icons-png.flaticon.com/128/1205/1205526.png' />
                </div>
                <h1 className='flex justify-center py-4 text-white text-3xl' >Testing</h1>
                <p className='flex text-center text-[18px] text-white' >Rigorous testing ensures the product is bug-free, secure, and performs flawlessly.</p>
              </div>

              <div className='col-span-12 sm:col-span-6 md:col-span-6 xl:col-span-3  bg-gray-700 rounded-md px-8 py-5' >
                <div className='flex justify-center' >
                  {/* <img className='h-15' src='https://cdn-icons-png.flaticon.com/128/4727/4727286.png' /> */}
                  <img className='h-15' src='https://cdn-icons-png.flaticon.com/128/10629/10629607.png' />
                </div>
                <h1 className='flex justify-center text-center py-4 text-white text-3xl' >Project Delivery</h1>
                <p className='flex text-center text-[18px] text-white' >We deliver the final product on time, fully functional and ready to launch.</p>
              </div>

            </div>
          </div>
          {/* 2. Four boxes Department end */}

          {/* 3. Custom Software Solution Designs development */}
          <div className='grid grid-cols-12 py-20' >

            <div className='col-span-12 md:col-span-6 md:text-center md:flex items-center pb-5' >
              <h1 className='text-white text-3xl sm:text-5xl' >Custom Software Solution</h1>
            </div>

            <div className='col-span-12 sm:col-span-12 md:col-span-6 flex items-center justify-center ' >
              <div className="border-l-4 border-blue-500 h-32 sm:h-32 md:h-24 pr-5"></div>
              {/* <div className='flex justify-center py-5 sm:py-0' >
                  <div className="border-t-4 border-blue-500 w-52 sm:w-0 sm:block mx-5 flex justify-center"></div>
                </div> */}
              {/* <div className="border-t-4 border-blue-500 w-24 my-5"></div> */}
              <div className='text-white text-[19px] w-auto' >Our custom software solution offers a comprehensive suite of tools, software, and services to help businesses achieve their goals. We focus on creating software that is user-friendly, efficient, and reliable.</div>
            </div>

          </div>
          <div className='mb-50' >
            <Link to='/production' >
              <button className='bg-gradient-to-br from-blue-600 to-cyan-300 px-6 py-3 font-semibold text-sm rounded-sm  hover:text-gray-300 text-white' onClick={handleScrollToTop} ><p>Click Hear</p></button>
            </Link>
          </div>
          {/* 3. Custom Software Solution Designs and development */}

          {/* 4.pamphlet development */}
          {/* <div className='grid grid-cols-12' >
            <div className='h-20 col-span-3' >
              <div class="col-span-3">
                <img className='absolute w-32 h-32' src="https://media.istockphoto.com/id/1033164992/photo/teenage-boy-listening-to-music-while-doing-homework.jpg?s=612x612&w=0&k=20&c=ZWuzj9h6dsY2Frv5Av5ixodNsfjju_ZFm9WhZhvM7YE=" alt="Description" class="w-full h-auto" />
              </div>
            </div>

            <div className='h-20 col-span-3' >
              <div class="col-span-3">
                <img className='' src="https://media.istockphoto.com/id/1033164992/photo/teenage-boy-listening-to-music-while-doing-homework.jpg?s=612x612&w=0&k=20&c=ZWuzj9h6dsY2Frv5Av5ixodNsfjju_ZFm9WhZhvM7YE=" alt="Description" class="w-full h-auto" />
              </div>
            </div>

            <div className='h-20 col-span-3' >
              <div class="col-span-3">
                <img className='' src="https://media.istockphoto.com/id/1033164992/photo/teenage-boy-listening-to-music-while-doing-homework.jpg?s=612x612&w=0&k=20&c=ZWuzj9h6dsY2Frv5Av5ixodNsfjju_ZFm9WhZhvM7YE=" alt="Description" class="w-full h-auto" />
              </div>
            </div>

            <div className='h-20 col-span-3' >
              <div class="col-span-3">
                <img className='' src="https://media.istockphoto.com/id/1033164992/photo/teenage-boy-listening-to-music-while-doing-homework.jpg?s=612x612&w=0&k=20&c=ZWuzj9h6dsY2Frv5Av5ixodNsfjju_ZFm9WhZhvM7YE=" alt="Description" class="w-full h-auto" />
              </div>
            </div>

          </div> */}
          {/* 4.pamphlet development end */}

          {/* 5.What Our Customers Says department */}
          <div className='grid grid-cols-12 gap-5' >
            <div className='col-span-12 md:col-span-6' >
              <h1 className='text-white text-5xl py-2' >What Our Customers Says</h1>
              <h1 className='text-white py-5 text-xl' >Don't just take our word for it. Listen to what our customers have to say.</h1>
              <div className='bg-gray-700 rounded-md' >
                <div className='p-8 text-[19px]' >
                  <p className='text-white' >As a startup, finding the right development partner was crucial for us — and we couldn’t have made a better choice. The team not only helped us build a fast and responsive mobile app using Flutter but also guided us through the entire development process with professionalism and patience. Their design sense is excellent, and their attention to user experience really shows in the final product.</p>
                  <div className='flex items-center space-x-4 pt-5'>
                    <div className='relative w-15 h-15 rounded-full overflow-hidden'>
                      <img
                        className='object-cover w-full h-full'
                        src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg'
                      />
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-white'>Harry Read</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-12 md:col-span-6' >
              <div className='bg-gray-700 rounded-md' >
                <div className='p-8 text-[19px]' >
                  <p className='text-white' >Working with this team has been a fantastic experience from start to finish. They truly understood our vision and turned it into a fully functional and beautifully designed application. Communication was clear, deadlines were met, and every detail was handled with care. Whether it was web development, mobile app design, or integrating complex APIs, they delivered high-quality work on time. We’re extremely happy with the final result and would highly recommend them to anyone looking for a reliable and skilled development partner.</p>
                  <div className='flex items-center space-x-4 pt-5'>
                    <div className='relative w-15 h-15 rounded-full overflow-hidden'>
                      <img
                        className='object-cover w-full h-full'
                        src='https://static.vecteezy.com/system/resources/thumbnails/067/519/411/small/black-male-entrepreneur-working-at-home-office-typing-on-laptop-and-taking-notes-smiling-millennial-freelancer-guy-using-computer-enjoying-remote-work-and-distance-job-opportunities-free-space-photo.jpg'
                      />
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-white'>Lois Pope</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-gray-700 rounded-md mt-5' >
                <div className='p-8 text-[19px]' >
                  <p className='text-white' >I approached them to create an ecommerce site for my small business, and I couldn’t be happier with the outcome. They delivered a sleek, mobile-friendly design with a smooth shopping experience. The team was attentive to every detail and offered helpful suggestions along the way. Sales and engagement have significantly improved since the launch.</p>
                  <div className='flex items-center space-x-4 pt-5'>
                    <div className='relative w-15 h-15 rounded-full overflow-hidden'>
                      <img
                        className='object-cover w-full h-full'
                        src='https://media.istockphoto.com/id/1322304048/photo/shot-of-a-businessman-giving-a-presentation-during-a-business-meeting.jpg?s=612x612&w=0&k=20&c=XYrCGgevPBXs4fhY_U4gyC59IqzL8szUPcMqUc08njc='
                      />
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-white'>Walter Trivett</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 5.What Our Customers Says department end */}

          {/* 6.Our Status department */}
          <div className='flex justify-center xl:px-50 py-20 pb-10' >
            <div className='w-[750px]' >
              <div className='flex justify-center text-3xl sm:text-5xl' >
                <h1 className='text-white ' >Our Status</h1>
              </div>
              <div className='flex justify-center text-[19px] text-center py-5' >
                <h1 className='text-white' >We pride ourselves on having a dedicated and passionate team of travel professionals who are committed to making your travel experience exceptional.</h1>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-12 gap-5 pb-20' >
            <div className='py-5 col-span-12 sm:col-span-6 xl:col-span-3' >
              <div className='flex justify-center' >
                <h1 className='text-5xl text-white' >3+</h1>
              </div>
              <div className='flex justify-center text-3xl md:text-5xl text-center py-5' >
                <h3 className='text-white'>Projects Completed</h3>
              </div>
            </div>

            <div className='col-span-12 sm:col-span-6 xl:col-span-3' >
              <div className='flex justify-center' >
                <h1 className='text-5xl text-white' >75+</h1>
              </div>
              <div className='flex justify-center text-3xl md:text-5xl text-center py-5' >
                <h3 className='text-white'>Clients Served</h3>
              </div>
            </div>

            <div className='col-span-12 sm:col-span-6 xl:col-span-3' >
              <div className='flex justify-center' >
                <h1 className='text-5xl text-white' >9+</h1>
              </div>
              <div className='flex justify-center text-3xl md:text-5xl text-center py-5' >
                <h3 className='text-white' >Years of Experience</h3>
              </div>
            </div>

            <div className='col-span-12 sm:col-span-6 xl:col-span-3' >
              <div className='flex justify-center' >
                <h1 className='text-5xl text-white' >57+</h1>
              </div>
              <div className='flex justify-center text-3xl md:text-5xl text-center py-5' >
                <h3 className='text-white' >Happy Clients</h3>
              </div>
            </div>
          </div>
          <div className='pt-10' >
            <div className='relative w-full h-[500px]' >
              <img className='absolute object-cover w-full h-full opacity-60 rounded-xl ' src='https://static.vecteezy.com/system/resources/previews/026/423/787/non_2x/abstract-technology-background-with-circuit-board-and-blue-lights-digital-communication-line-concept-graphic-hardware-computer-tech-integrated-energy-design-information-internet-generative-ai-photo.jpg' />

              <div className='relative h-[500px]' >
                <div className='relative flex justify-center items-center h-[500px]' >

                  <div className='w-72 md:w-[700px]' >
                    <div className='flex justify-center text-center text-3xl md:text-5xl' >
                      <h1 className='text-white ' >Time to Start Your Journey</h1>
                    </div>
                    <div className='flex justify-center text-[19px] text-center py-5 md:py-10' >
                      <h1 className='text-white' >Whether it's a consumer-facing ecommerce platform or a complex backend-driven app, each project reflects our commitment to innovation, precision, and delivering measurable value.</h1>
                    </div>
                    <div className='bg-black p-5 md:p-6 mt-8 md:flex justify-between rounded-sm ' >
                      <div className='flex items-center justify-center p-2' >
                        <span className='text-white text-xl' >Start your journey today!</span>
                      </div>
                      <div className='bg-gradient-to-r from-blue-600 to-cyan-300 md:px-4 rounded-sm flex justify-center' >
                        {/* <Link to="/contact-us" onClick={handleScrollToTop} >
                          <button className='text-white px-3 py-3 hover:text-gray-300' >BOOK A MEETING <NorthEastIcon sx={{ height: 15 }} /></button>
                        </Link> */}

                        <button className='text-white px-3 py-3 hover:text-gray-300' >
                          <Link to="/contact-us" onClick={handleScrollToTop} >
                            BOOK A MEETING <NorthEastIcon sx={{ height: 15 }} />
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-cyan-300 my-5 rounded-xl">
            <div className='py-15 px-15'>
              <div>
                <h1 className=' text-xl text-white'>Contact Support</h1>
                <h1 className='text-xl text-white py-5'>If you have any questions feel free to contact our support and we will get back to you within 24 hours.</h1>
                <h1 className='text-xl text-white'>arbictechsolutions8gmail.com</h1>
              </div>
            </div>
          </div>
          <div className='pt-30' >
            <div className='flex justify-center'>
              <div>
                <div className='flex justify-center py-2'>
                  <h1 className='text-xl text-blue-500 font-bold' >FAQ</h1>
                </div>
                <div className='flex justify-center py-2'>
                  <h1 className='text-3xl md:text-5xl text-white' >Frequently Asked Questions</h1>
                </div>
                <div className=' flex justify-center py-2'>
                  <h1 className='text-md sm:text-xl md:text-2xl text-white' >What are the questions we usually get…?</h1>
                </div>
              </div>
            </div>
          </div>
          {/* summary */}
          <div className="grid grid-cols-12 gap-x-6 gap-y-6 mt-5">

            <div className="col-span-12 md:col-span-6 p-6 cursor-pointer text-white bg-gray-700 rounded-xl" onClick={() => toggleDropdown(0)}>
              <h1 className='xl:text-lg font-semibold' >
                What services do you offer?
              </h1>
              {
                openIndex === 0 ?
                  <p className='text-gray-500 mt-2' >
                    We offer end-to-end services including web design, mobile and web
                    application development, Flutter app development, digital marketing,
                    ecommerce solutions, and WordPress development.                  </p>
                  : ''
              }
            </div>

            <div className={`col-span-12 md:col-span-6 p-6 cursor-pointer text-white bg-gray-700 rounded-xl`} onClick={() => toggleDropdown(1)}>
              <h1 className='xl:text-lg font-semibold' >
                How long does it take to complete a project?
              </h1>
              {
                openIndex === 1 ?
                  <p className='text-gray-500 mt-2' >
                    The time varies based on the project complexity, but typically it
                    takes between 2 to 6 weeks.
                  </p>
                  : ''
              }
            </div>

            <div className="col-span-12 md:col-span-6 p-6 cursor-pointer text-white bg-gray-700 rounded-xl" onClick={() => toggleDropdown(2)}>
              <h1 className='xl:text-lg font-semibold' >
                Do you provide ongoing support after project delivery?
              </h1>
              {
                openIndex === 2 ?
                  <p className='text-gray-500 mt-2' >
                    Yes, we offer ongoing support packages for maintenance and updates.
                  </p>
                  : ''
              }
            </div>

            <div className="col-span-12 md:col-span-6 p-6 cursor-pointer text-white bg-gray-700 rounded-xl" onClick={() => toggleDropdown(3)}>
              <h1 className='xl:text-lg font-semibold' >Can you redesign an existing website or app?</h1>
              {
                openIndex === 3 ?
                  <p className='mt-2 text-gray-500' >
                    Yes, we specialize in redesigning existing websites and apps to
                    enhance performance and user experience.
                  </p>
                  : ""
              }
            </div>

            <div className="col-span-12 md:col-span-6 p-6 cursor-pointer text-white bg-gray-700 rounded-xl" onClick={() => toggleDropdown(4)}>
              <h2 className="xl:text-lg font-semibold"> What is your pricing model?</h2>
              {
                openIndex === 4 ?
                  <p className="mt-2 text-gray-500">
                    We offer flexible pricing based on project requirements—either fixed-price, hourly, or monthly packages depending on what suits you best.
                  </p>
                  : ''
              }
            </div>

            <div className="col-span-12 md:col-span-6 p-6 cursor-pointer text-white bg-gray-700 rounded-xl" onClick={() => toggleDropdown(4)}>
              <h2 className="xl:text-lg font-semibold"> How do I get started with a project?</h2>
              {
                openIndex === 4 ?
                  <p className="mt-2 text-gray-500">
                    You can contact us via our website or email to schedule an initial
                    consultation, where we'll discuss your requirements and project
                    scope.</p>
                  : ''
              }
            </div>

          </div>
          {/* 6.Our Status department end */}

        </div>

        {/* footer */}

        <div>
          <Footer />
        </div>
      </div>
      {/*ii. Product Design department end */}
    </div>
  );
};

export default HomePage;