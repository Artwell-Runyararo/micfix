import React, { useRef, useState } from 'react';
import picture from '../../assets/images/afric.png';
import picture1 from '../../assets/images/carpenter.png';
import picture2 from '../../assets/images/close-up-man-cutting-wires.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// import required modules
import { Parallax, EffectFade, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Space, Flex } from 'antd';
import CountUp from 'react-countup';
import { navVariants, slideIn, staggerContainer, textVariant, textVariant2, textContainer, fadeIn, zoomIn, footerVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {

  return (
    <>
      <motion.div variants={staggerContainer} className='p-0 m-0' initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.25 }}>
        {/* Desktop */}
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            height: '800px'
          }}
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}

          className="mySwiper p-0 m-0 hidden lg:block"
        >
          <SwiperSlide className='m-0' style={{ backgroundImage: `url(${picture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay div */}
            <div className="absolute inset-0 bg-black/50 bg-opacity-80 w-full h-full m-0 p-0"></div>
            <div className="relative w-full h-full" >
              {/* Slide content */}
              <motion.div variants={slideIn('right', 'spring', 0.1, 3)} style={{ overflow: 'hidden', position: 'relative' }}></motion.div>
              <div className="title-content w-50 absolute top-[10%] left-[8rem]  bg-slide-color-primary text-white animate__animated animate__fadeInRight">
                <div className="px-24 py-16">
                  <p>INTRODUCTION</p>

                  <div className="row">
                    <div style={{ height: 2 }} className="col bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                  </div>

                  <div className="title font-bold py-4" data-swiper-parallax="-300">
                    MICFIX ENGINEERING
                  </div>
                  <div className="subtitle" data-swiper-parallax="-200">

                  </div>
                  <div className="text" data-swiper-parallax="-100">
                    <p className='text-xl'>
                      Micfix Engineering is committed to providing timely and accurate engineering
                      information to help its clients to make informed decisions.
                      With a focus on delivering clients satisfaction, the company has
                      built a reputation for excellences and integrity.
                    </p>
                    <div className='py-16'>
                      <Link to={`/about`} className='bg-color-secondary text-uppercase text-white text-decoration-none shadow-sm p-4 font-semibold text-lg w-100 my-5'>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Learn more &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='m-0' style={{ backgroundImage: `url(${picture1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay div */}
            <div className="absolute inset-0 bg-black/50 bg-opacity-80 w-full h-full m-0 p-0"></div>
            <div className="relative w-full h-full" >
              <div className="title-content w-50 absolute top-[10%] left-[8rem]  bg-slide-color-primary text-white animate__animated animate__fadeInRight">
                <div className="px-24 py-16">
                  <p>AN EXTENSIVE RANGE OF SERVICES</p>

                  <div className="row">
                    <div style={{ height: 2 }} className="col bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                  </div>

                  <div className="title font-bold py-4" data-swiper-parallax="-300">
                    OUR SERVICES
                  </div>
                  <div className="subtitle" data-swiper-parallax="-200">

                  </div>
                  <div className="text" data-swiper-parallax="-100">
                    <p className='text-xl'>
                      We offer a comprehensive range of engineering services, including Procurement and Installation,
                      Building and construction and material supplies, Electrical gates and Intercom installations and repairs, and Project planning, design implementation and commissioning etc.
                      Our multidisciplinary approach ensures holistic solutions for every project
                    </p>
                    <div className='py-16'>
                      <Link to={`/services`} className='bg-color-secondary text-uppercase text-white text-decoration-none shadow-sm p-4 font-semibold text-lg w-100 my-5'>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Learn more &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide className='m-0' style={{ backgroundImage: `url(${picture2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay div */}
            <div className="absolute inset-0 bg-black/50 bg-opacity-80 w-full h-full m-0 p-0"></div>
            <div className="relative w-full h-full" >
              <div className="title-content w-50 absolute top-[10%] left-[8rem]  bg-slide-color-primary text-white animate__animated animate__fadeInRight">
                <div className="px-24 py-16">
                  <p>Engineering Excellence in Action</p>

                  <div className="row">
                    <div style={{ height: 2 }} className="col bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                  </div>

                  <div className="title font-bold py-4 text-uppercase" data-swiper-parallax="-300"> Engineering Excellence</div>

                  <div className="text" data-swiper-parallax="-100">
                    <p className='text-xl'>
                      Experience the impact of our engineering prowess through our success stories.
                      From concept to completion, we deliver results that exceed expectations.
                      Explore our portfolio to see how we've helped clients overcome challenges and achieve their goals
                    </p>
                    <div className='py-16'>
                      <Link to={`/contact`} className='bg-color-secondary text-uppercase text-white text-decoration-none shadow-sm p-4 font-semibold text-lg w-100 my-5'>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Learn more &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* end of Desktop */}
        
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            height: '800px'
          }}
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper m-0 p-0 block lg:hidden"
        >
          <SwiperSlide className='m-0' style={{ backgroundImage: `url(${picture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay div */}
            <div className="absolute inset-0 bg-black/50 bg-opacity-80 w-full h-full m-0 p-0"></div>
            <div className="relative w-full h-full" >
              {/* Slide content */}
              <motion.div variants={slideIn('right', 'spring', 0.1, 3)} style={{ overflow: 'hidden', position: 'relative' }}></motion.div>
              <div className="title-content w-full absolute  text-white animate__animated animate__fadeInRight">
                <div className="py-16">
                  <p>INTRODUCTION</p>

                  <div className="title font-bold py-4" data-swiper-parallax="-300">
                    MICFIX ENGINEERING
                  </div>

                  <div className="text" data-swiper-parallax="-100">
                    <p className='text-xl'>
                      Micfix Engineering is committed to providing timely and accurate engineering
                      information to help its clients to make informed decisions.
                      With a focus on delivering clients satisfaction, the company has
                      built a reputation for excellences and integrity.
                    </p>
                    <div className='py-16'>
                      <Link to={`/about`} className='bg-color-secondary text-uppercase text-white text-decoration-none shadow-sm p-4 font-semibold text-lg w-100 my-5'>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Learn more &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='m-0' style={{ backgroundImage: `url(${picture1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay div */}
            <div className="absolute inset-0 bg-black/50 bg-opacity-80 w-full h-full m-0 p-0"></div>
            <div className="relative w-full h-full" >
              <div className="title-content w-full absolute text-white animate__animated animate__fadeInRight">
                <div className="py-16">
                  <p>AN EXTENSIVE RANGE OF SERVICES</p>

                  <div className="title font-bold py-4" data-swiper-parallax="-300">
                    OUR SERVICES
                  </div>
                  <div className="subtitle" data-swiper-parallax="-200">

                  </div>
                  <div className="text" data-swiper-parallax="-100">
                    <p className='text-xl'>
                      We offer a comprehensive range of engineering services, including Procurement and Installation,
                      Building and construction and material supplies, Electrical gates and Intercom installations and repairs, and Project planning, design implementation and commissioning etc.
                      Our multidisciplinary approach ensures holistic solutions for every project
                    </p>
                    <div className='py-16'>
                      <Link to={`/services`} className='bg-color-secondary text-uppercase text-white text-decoration-none shadow-sm p-4 font-semibold text-lg w-100 my-5'>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Learn more &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide className='m-0' style={{ backgroundImage: `url(${picture2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay div */}
            <div className="absolute inset-0 bg-black/50 bg-opacity-80 w-full h-full m-0 p-0"></div>
            <div className="relative w-full h-full" >
              <div className="title-content w-full absolute text-white animate__animated animate__fadeInRight">
                <div className="py-16">
                  <p>Engineering Excellence in Action</p>

                  <div className="title font-bold py-4 text-uppercase" data-swiper-parallax="-300"> Engineering Excellence</div>

                  <div className="text" data-swiper-parallax="-100">
                    <p className='text-xl'>
                      Experience the impact of our engineering prowess through our success stories.
                      From concept to completion, we deliver results that exceed expectations.
                      Explore our portfolio to see how we've helped clients overcome challenges and achieve their goals
                    </p>
                    <div className='py-16'>
                      <Link to={`/contact`} className='bg-color-secondary text-uppercase text-white text-decoration-none shadow-sm p-4 font-semibold text-lg w-100 my-5'>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Learn more &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="container-fluid p-0 m-0 bg-danger">
          <div className="row bg-color-secondary m-0 p-5 text-white ">
            <div className="col-sm col-md col-lg flex justify-center py-3">
              <span>
                <p className='m-0 text-6xl font-bold font-bolder'><CountUp className='m-0 text-6xl font-bold font-bolder' end={10} /> +</p>
                <p className='m-0 text-xl '>Professional Experience</p>
              </span>
            </div>
            <div className="col-sm col-md col-lg flex justify-center py-3">
              <span>
                <p className='m-0 text-6xl font-bold font-bolder'><CountUp className='m-0 text-6xl font-bold font-bolder' end={250} /> +</p>
                <p className='m-0 text-xl '>Our Satisfied Clients &ensp;&ensp;&ensp;&ensp;&ensp;</p>
              </span>
            </div>
            <div className="col-sm col-md col-lg flex justify-center py-3">
              <span>
                <p className='m-0 text-6xl font-bold font-bolder'><CountUp className='m-0 text-6xl font-bold font-bolder' end={100} /> +</p>
                <p className='m-0 text-xl '>Employees in current tea</p>
              </span>
            </div>
            <div className="col-sm col-md col-lg flex justify-center py-3">
              <span>
                <p className='m-0 text-6xl font-bold font-bolder'><CountUp className='m-0 text-6xl font-bold font-bolder' end={15} /> +</p>
                <p className='m-0 text-xl '>Years Industry Experience</p>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default HeroSection