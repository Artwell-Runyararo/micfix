import React, { useRef, useState } from 'react';
import { Headerz, NavBar, Footer } from '../../components'
import { Space, Flex, Card } from 'antd';
import { TitleText } from '../../constants/typingText';
import cardPicture from '../../assets/images/plumber-holding-something.jpg';
import cardPicture2 from '../../assets/images/close-up-electronic-components.jpg';
import logo from '../../assets/images/logos/migfix-02.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
const { Meta } = Card;


const About = () => {
  return (
    <>
      <Headerz />
      <NavBar />
      <div className="container-fluid  bgPicture">
        {/* Welcome Section Products */}
        <div className="row bg-slate-950/90">
          <div className="col-sm col-md col-lg-1">&ensp;</div>
          <div style={{ height: '50vh' }} className="col-sm col-md col-lg py-10">
            <Flex vertical='vertical' justify='start' className='py-16'>
              <TitleText title={(<>
                <p className='text-uppercase font-black text-white text-6xl flex text-left justify-start'>about us</p>
              </>)} textStyles={'font-bold text-5xl text-white'} />

              <div className="row py-3">
                <div className="col-sm col-md col-lg">
                  <p className='text-lg text-white'>
                    Micfix Engineering is committed to providing timely and accurate engineering
                    information to help its clients to make informed decisions.
                    With a focus on delivering clients satisfaction, the company has
                    built a reputation for excellences and integrity.
                  </p>
                </div>
              </div>

              {/* Double Lines */}
              <div className="row">

                <div style={{ height: 2 }} className="col-sm col-md col-lg bg-color-primary m-0 p-0"><div style={{ height: 2 }} className='bg-white w-20'></div></div>
                <div className="col-sm col-md col-lg">&ensp;</div>
              </div>
              {/* End of Double Lines */}
            </Flex>
          </div>
          <div className="col-sm col-md col-lg-6">&ensp;</div>
        </div>
        {/* End of Welcome Section Products */}
      </div>

      <div className='container-fluid'>

        <div className="row p-20">
          <div className="col-sm-12 col-md-12 col-lg p-5">
            <div className="row">
              <div className="col-sm col-md col-lg">
                <p className='text-uppercase font-black text-color-secodary text-6xl'>About micfix engineering</p>
                {/* Double Lines */}
                <div className="row">
                  <div style={{ height: 2 }} className="col bg-color-primary m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                  <div className="col-sm col-md col-lg-1">&ensp;</div>
                </div>
                {/* End of Double Lines */}

                <p className='pt-5 text-[16px]'>
                  Micfix Engineering (Pvt) Ltd is a passionate Organization which seeks to provide customer
                  satisfaction in Electrical and Mechanical Engineering.
                  The company has a team of highly skilled and qualified professionals who offer personalized
                  services to meet the individual needs of their clients.
                </p>
                <p className='text-[16px]'>
                  Micfix Engineering (Pvt) Ltd is committed to providing timely and accurate engineering services
                  to help its clients make informed decisions. With focus on delivering client satisfication, the
                  firm has built a reputation for excellence and integrity.
                </p>

              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg">
            <Card bordered={false} className='h-50 shadow-0' cover={(<>
              <div class="relative overflow-hidden">
                <div class="overflow-hidden ">
                  <div class="h-full">
                    <img src={cardPicture} alt="" class="w-75 h-75 object-cover" />
                  </div>
                </div>
              </div>
            </>)}>
            </Card>
          </div>
        </div>


        <div className="row g-0 ">
          <div className="col-sm col-md col-lg-1">&ensp;</div>
          <div className="col-sm-12 col-md-12 col-lg bg-color-primary p-5">
            <div className="row p-14">
              <div className="col-sm col-md col-lg">
                <p className='text-uppercase font-black text-color-secodary text-xl'>our mission</p>
                {/* Double Lines */}
                <div className="row">
                  <div style={{ height: 2 }} className="col-sm col-md col-lg bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-10'></div></div>
                  <div className="col-sm col-md col-lg-10">&ensp;</div>
                </div>
                {/* End of Double Lines */}

                <p className='py-4 text-[16px]'>
                  <ul className='list-none'>
                    <li className='text-[16px] text-white'>To maintain integrity and honesty in everything we do.</li>
                    <li className='text-[16px] text-white'>To maintain an environment that encourages giving back to the community and our nation at large.</li>
                    <li className='text-[16px] text-white'>To provide for the highest level of professional services, to meet our clients' needs.</li>
                    <li className='text-[16px] text-white'>To provide for the development and growth of our team members by offering opportunities to achieve personal and professional success</li>
                  </ul>
                </p>

                <p className='text-uppercase font-black text-color-secodary text-xl'>our vision</p>
                {/* Double Lines */}
                <div className="row">
                  <div style={{ height: 2 }} className="col-sm col-md col-lg bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-10'></div></div>
                  <div className="col-sm col-md col-lg-10">&ensp;</div>
                </div>
                {/* End of Double Lines */}
                <p className='py-4 text-[16px]'>
                  <ul>
                    <li className='text-[16px] text-white'>To be a leading company that align its personal growth objectives to national aspirations. </li>
                  </ul>
                </p>

              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg">
            <img src={cardPicture2} alt="" class="w-full h-full object-cover" />
          </div>
          <div className="col-sm col-md col-lg-1">&ensp;</div>
        </div>

        <div className="row">
          <div className="col-sm col-md col-lg p-5">
            <Flex justify='center' align="center" vertical='vertical'>
              <span><img src={logo} alt='micfix' className="object-contain" width={50} /></span>
              <p className='text-5xl font-bold'>OUR CORE VALUES</p>
            </Flex>
            {/* Double Lines */}
            <div className="row">
              <div className="col-sm col-md col-lg-5">&ensp;</div>
              <div style={{ height: 2 }} className="col bg-color-primary m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
              <div className="col-sm col-md col-lg-5">&ensp;</div>
            </div>
            {/* End of Double Lines */}
          </div>
        </div>


        <div className="row bg-color-primary">
          <div className="col-sm col-md col-lg">
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              speed={600}
              parallax={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Parallax, Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <div
                slot="container-start"
                className="parallax-bg"
                data-swiper-parallax="-23%"
              ></div>
              <SwiperSlide>
                <div className="container">
                  <div className="row">

                    <div className="col-sm col-md col-lg px-5">

                      <p className='text-uppercase font-semibold text-color-secodary text-5xl' data-swiper-parallax="-300">integrity matters</p>
                      {/* Double Lines */}
                      <div className="row">
                        <div style={{ height: 2 }} className="col-sm col-md col-lg bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                        <div className="col-sm col-md col-lg-9">&ensp;</div>
                      </div>
                      {/* End of Double Lines */}

                      <p className='py-4 text-[16px]' data-swiper-parallax="-100">
                        We believe in being conscientious and operating with integrity and honesty,
                        consistently producing quality work at reasonable fees.
                      </p>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">
                  Slide 2
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  Subtitle
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                    laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                    Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                    Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                    ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                    tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">
                  Slide 3
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  Subtitle
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                    laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                    Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                    Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                    ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                    tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-0 col-md-2 col-lg-3">&ensp;</div>
          <div className="col-sm col-md col-lg text-center p-24">
            <Flex justify='center' align="center" vertical='vertical'>
              <p className='text-5xl font-bold'>WE ARE QUALIFIED IN ALL ELECTRICAL DISCIPLINES</p>
            </Flex>
          </div>
          <div className="col-sm-0 col-md-2 col-lg-3">&ensp;</div>
        </div>

        <div className="row">
          <div className="col-sm col-md col-lg"></div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About