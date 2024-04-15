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

const HeroSection = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <motion.div variants={staggerContainer} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.25 }}>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            height: '700px'
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

          className="mySwiper"
        >
          <SwiperSlide style={{ backgroundImage: `url(${picture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay div */}
            <div className="absolute inset-0 bg-black/50 bg-opacity-80 w-full h-full m-0 p-0"></div>
            <div className="relative w-full h-full" >
              {/* Slide content */}
              <div className="title-content w-50 absolute top-[10%] left-[8rem]  bg-slide-color-primary text-white">
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
                      Micfix Engineering is committed to providing timely and accurate engineering
                      information to help its clients to make informed decisions.
                      With a focus on delivering clients satisfaction, the company has
                      built a reputation for excellences and integrity.
                    </p>
                    <div>
                      <button className='bg-color-secondary text-uppercase shadow-sm p-4 font-semibold text-lg w-80 my-5'>Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${picture1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay div */}
            <div className="absolute inset-0 bg-black/50 bg-opacity-80 w-full h-full m-0 p-0"></div>
            <div className="relative w-full h-full" >
              <div className="title-content w-50 absolute top-[10%] left-[8rem]  bg-slide-color-primary text-white">
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
                      Micfix Engineering is committed to providing timely and accurate engineering
                      information to help its clients to make informed decisions.
                      With a focus on delivering clients satisfaction, the company has
                      built a reputation for excellences and integrity.
                    </p>
                    <div>
                      <button className='bg-color-secondary text-uppercase shadow-sm p-4 font-semibold text-lg w-80 my-5'>Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${picture2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay div */}
            <div className="absolute inset-0 bg-black/50 bg-opacity-80 w-full h-full m-0 p-0"></div>
            <div className="relative w-full h-full" >
              <div className="title-content w-50 absolute top-[10%] left-[8rem]  bg-slide-color-primary text-white">
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
                      Micfix Engineering is committed to providing timely and accurate engineering
                      information to help its clients to make informed decisions.
                      With a focus on delivering clients satisfaction, the company has
                      built a reputation for excellences and integrity.
                    </p>
                    <div>
                      <button className='bg-color-secondary text-uppercase shadow-sm p-4 font-semibold text-lg w-80 my-5'>Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <motion.p variants={textVariant(0.5)}>
          <div className="container-fluid">
            <div className="row bg-color-secondary p-5 text-white ">
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
        </motion.p>
      </motion.div>
    </>
  )
}

export default HeroSection