import React, { useRef, useState } from 'react';
import { Headerz, NavBar, Footer } from '../../components'
import { Space, Flex, Card } from 'antd';
import { TitleText } from '../../constants/typingText';
import cardPicture from '../../assets/images/plumber-holding-something.jpg';
import cardPicture2 from '../../assets/images/logos/migfix-01.png';
import cardPicture3 from '../../assets/images/african-american-technician-checks-maintenance-solar-panels-group-three-black-engineers-meeting-solar-station.png';
import cardPicture1 from '../../assets/images/close-up-electronic-components.png';
import cardPicture4 from '../../assets/images/different-electrical-tools-wooden-background-flat-lay.png';
import logo from '../../assets/images/logos/migfix-02.png';
import { navVariants, slideIn, staggerContainer, textVariant, textVariant2, textContainer, fadeIn, zoomIn, footerVariants } from '../../utils/motion';
import { motion } from 'framer-motion';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import 'swiper/css/navigation';

// import  asdasdasd required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
const { Meta } = Card;


const About = () => {
  return (
    <>
      <Headerz />
      <NavBar />
      <motion.div variants={staggerContainer} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.25 }}>
        <div className="container-fluid  bgPicture hidden lg:block" >
          {/* style={{ overflow: 'hidden', }} */}
          {/* Welcome Section Products */}
          <div className="row bg-slate-950/90">
            <div className="col-sm-0 col-md-0 col-lg-1">&ensp;</div>
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
            <div className="col-sm-0 col-md-0 col-lg-6">&ensp;</div>
          </div>
          {/* End of Welcome Section Products */}
        </div>
        <div className='container-fluid hidden lg:block'>

          <div className="row py-20">
            <div className="col-sm col-md-0 col-lg-1">&ensp;</div>
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
                      <img src={cardPicture} alt="" class="w-100 object-cover" />
                    </div>
                  </div>
                </div>
              </>)}>
              </Card>
            </div>
            <div className="col-sm col-md-0 col-lg-1">&ensp;</div>
          </div>


          <div className="row g-0 py-20">
            <div className="col-sm-12 col-md-12 col-lg-1">&ensp;</div>
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
            <div className="col-sm-12 col-md-12 col-lg-1">&ensp;</div>
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
                  <div className="container-fluid" style={{ overflow: 'hidden', }}>
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
                  <div className="container">
                    <div className="row">

                      <div className="col-sm col-md col-lg px-5">

                        <p className='text-uppercase font-semibold text-color-secodary text-5xl' data-swiper-parallax="-300">Clients matters</p>
                        {/* Double Lines */}
                        <div className="row">
                          <div style={{ height: 2 }} className="col-sm col-md col-lg bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                          <div className="col-sm col-md col-lg-9">&ensp;</div>
                        </div>
                        {/* End of Double Lines */}

                        <p className='py-4 text-[16px]' data-swiper-parallax="-100">
                          We believe in providing excellent client service to the mutual benefit of our clients and our firm.
                        </p>
                      </div>
                    </div>
                  </div>

                </SwiperSlide>
                <SwiperSlide>
                  <div className="container">
                    <div className="row">

                      <div className="col-sm col-md col-lg px-5">

                        <p className='text-uppercase font-semibold text-color-secodary text-5xl' data-swiper-parallax="-300">teamwork matters</p>
                        {/* Double Lines */}
                        <div className="row">
                          <div style={{ height: 2 }} className="col-sm col-md col-lg bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                          <div className="col-sm col-md col-lg-9">&ensp;</div>
                        </div>
                        {/* End of Double Lines */}

                        <p className='py-4 text-[16px]' data-swiper-parallax="-100">
                          We believe in a One Firm Approach with an open exchange of ideas across all levels of our organization
                          and that each team member, by taking personal responsibility for their performance and by collaborating with and assisting others in their performance
                          ,can achieve consistent sustainable success for our entire organization.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="container">
                    <div className="row">

                      <div className="col-sm col-md col-lg px-5">

                        <p className='text-uppercase font-semibold text-color-secodary text-5xl' data-swiper-parallax="-300">people matters</p>
                        {/* Double Lines */}
                        <div className="row">
                          <div style={{ height: 2 }} className="col-sm col-md col-lg bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                          <div className="col-sm col-md col-lg-9">&ensp;</div>
                        </div>
                        {/* End of Double Lines */}

                        <p className='py-4 text-[16px]' data-swiper-parallax="-100">
                          We believe in an inclusive environment that provides our team members with balanced opportunities, the most up to date resources,constant support, and access to the information necessary that fosters personal and professional growth, learning and prosperity,and we believe that valuing opinions, demonstrating respect and caring, and promoting trust and fun within our organisation
                          is critical to sustaining our success.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="container">
                    <div className="row">

                      <div className="col-sm col-md col-lg px-5">

                        <p className='text-uppercase font-semibold text-color-secodary text-5xl' data-swiper-parallax="-300">environment matters</p>
                        {/* Double Lines */}
                        <div className="row">
                          <div style={{ height: 2 }} className="col-sm col-md col-lg bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                          <div className="col-sm col-md col-lg-9">&ensp;</div>
                        </div>
                        {/* End of Double Lines */}

                        <p className='py-4 text-[16px]' data-swiper-parallax="-100">
                          We believe that by being involved in our community we can grow both personally and professionally. By celebrating our successess and promoting a sense of family within our
                          organization we can be a source of strength, hope and help to one another.
                        </p>
                      </div>
                    </div>
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

          <div className="row px-28 pb-28 g-5 ">
            <div className="col-sm-12 col-md-12 col-lg">
              <div className="row g-2">
                <div className="col-sm col-md col-lg">
                  <div class="py-2"><img class="rounded shadow-md" src={cardPicture1} alt="" /></div>
                </div>
                <div className="col-sm col-md col-lg">
                  <div class="py-2"><img class="rounded shadow-md" src={cardPicture3} alt="" /></div>
                </div>
              </div>
              <div className="row g-2">
                <div className="col-sm col-md col-lg">
                  <div class="py-2"><img class="rounded shadow-md" src={cardPicture4} alt="" /></div>
                </div>
                <div className="col-sm col-md col-lg">
                  <div class="py-2"><img class="rounded shadow-md" src={cardPicture} alt="" /></div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg">
              <p className='text-uppercase font-bold text-color-secondary text-3xl'>Why choose us</p>
              <p className='text-[16px]'><i className="bi bi-check-circle text-color-primary"></i> &ensp; Quality services that gives clients optimum efficiency. </p>
              <p className='text-uppercase font-bold text-color-secondary text-3xl'>WHAT WE DO</p>
              <p className='text-[16px]'><i className="bi bi-check-circle text-color-primary text-[16px]"></i> &ensp; WE PARTNER WITH YOU, we don't throw costs, concerns and problems at you.
                Our approachable and trusted people spend time with you to understand where your are
                in your accounting journey so we can manage your finances for a sustainable and
                profitable future.
              </p>

              <p className='text-uppercase font-bold text-color-secondary text-[16px]'><i className="bi bi-check-circle text-color-primary"></i> &ensp; SIMPLIFIED FOR YOU</p>
              <p className='text-[16px]'>
                Our muscle-bound accounting teams and systems will take on the heavy lifting of your
                accounting, taxes, compliance, and admin. Why does it yourself when we can do it for you?
                This is where we shine.
              </p>
              <p className='text-uppercase font-bold text-color-secondary text-[16px]'><i className="bi bi-check-circle text-color-primary"></i> &ensp; BUSINESS TRANSFORMATION </p>
              <p className='text-[16px]'>
                With your data we can do more than just your accounting, we can transform your processes,
                improve your admin and make your life easier. We will help you automate, transform and refine
                your finances, data and business operations.
              </p>
              <p className='text-uppercase font-bold text-color-secondary text-[16px]'><i className="bi bi-check-circle text-color-primary"></i> &ensp;DATA DRIVEN DECISION-MAKING</p>
              <p className='text-[16px]'>
                Want to manage your data brilliantly? Want to ignite business growth but need more visibility?
                We have got the answer to these questions- yes you do, and yes, we can help you do it right now!
                We can take your data and transform it into insights today.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="container-fluid  bgPicture block lg:hidden" >
        {/* style={{ overflow: 'hidden', }} */}
        {/* Welcome Section Products */}
        <div className="row bg-slate-950/90 px-4">
          <div className="col-sm-0 col-md-0 col-lg-1">&ensp;</div>
          <div style={{ height: '50vh' }} className="col-sm col-md col-lg py-10">
            <Flex vertical='vertical' justify='start' className='py-14'>
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
          <div className="col-sm-0 col-md-0 col-lg-6">&ensp;</div>
        </div>
        {/* End of Welcome Section Products */}
      </div>
      <div className='container-fluid block lg:hidden'>

        <div className="row py-5">
          <div className="col-sm col-md-0 col-lg-1">&ensp;</div>
          <div className="col-sm-12 col-md-12 col-lg">
            <div className="row">
              <div className="col-sm col-md col-lg">
                <p className='text-uppercase text-center font-black text-color-secodary text-5xl'>About micfix engineering</p>
         

                <p className='px-4 pt-5 text-[16px]'>
                  Micfix Engineering (Pvt) Ltd is a passionate Organization which seeks to provide customer
                  satisfaction in Electrical and Mechanical Engineering.
                  The company has a team of highly skilled and qualified professionals who offer personalized
                  services to meet the individual needs of their clients.
                </p>
                <p className='px-4 text-[16px]'>
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
                    <img src={cardPicture} alt="" class="w-100 h-100 object-cover" />
                  </div>
                </div>
              </div>
            </>)}>
            </Card>
          </div>
          <div className="col-sm col-md-0 col-lg-1">&ensp;</div>
        </div>


        <div className="row g-0 ">
          <div className="col-sm-12 col-md-12 col-lg-1">&ensp;</div>
          <div className="col-sm-12 col-md-12 col-lg bg-color-primary">
            <div className="row p-12">
              <div className="col-sm col-md col-lg">
                <p className='text-uppercase font-black text-color-secodary text-xl'>our mission</p>
                {/* Double Lines */}
                <div className="row">
                  <div style={{ height: 2 }} className="col-sm col-md col-lg bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-10'></div></div>
                  <div className="col-sm col-md col-lg-10">&ensp;</div>
                </div>
                {/* End of Double Lines */}

                <p className='py-4'>
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
          <div className="col-sm-12 col-md-12 col-lg-1">&ensp;</div>
        </div>

        <div className="row">
          <div className="col-sm col-md col-lg ">
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
                height:400,
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
              // navigation={true}
              modules={[Parallax, Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <div
                slot="container-start"
                className="parallax-bg"
                data-swiper-parallax="-23%"
              ></div>
              <SwiperSlide className='p-0'>
                <div className="container-fluid py-28" style={{ overflow: 'hidden', }}>
                  <div className="row">
                    <div className="col-sm col-md col-lg ">
                      <p className='text-uppercase font-semibold text-color-secodary text-4xl' data-swiper-parallax="-300">integrity matters</p>
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
              <SwiperSlide  className='p-0'>
                <div className="container-fluid py-28">
                  <div className="row">

                    <div className="col-sm col-md col-lg">

                      <p className='text-uppercase font-semibold text-color-secodary text-4xl' data-swiper-parallax="-300">Clients matters</p>
                      {/* Double Lines */}
                      <div className="row">
                        <div style={{ height: 2 }} className="col-sm col-md col-lg bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                        <div className="col-sm col-md col-lg-9">&ensp;</div>
                      </div>
                      {/* End of Double Lines */}

                      <p className='py-4 text-[16px]' data-swiper-parallax="-100">
                        We believe in providing excellent client service to the mutual benefit of our clients and our firm.
                      </p>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide className='p-0'>
                <div className="container-fluid py-16">
                  <div className="row">

                    <div className="col-sm col-md col-lg">

                      <p className='text-uppercase font-semibold text-color-secodary text-4xl' data-swiper-parallax="-300">teamwork matters</p>
                      {/* Double Lines */}
                      <div className="row">
                        <div style={{ height: 2 }} className="col-sm col-md col-lg bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                        <div className="col-sm col-md col-lg-9">&ensp;</div>
                      </div>
                      {/* End of Double Lines */}

                      <p className='py-4 text-[16px]' data-swiper-parallax="-100">
                        We believe in a One Firm Approach with an open exchange of ideas across all levels of our organization
                        and that each team member, by taking personal responsibility for their performance and by collaborating with and assisting others in their performance
                        ,can achieve consistent sustainable success for our entire organization.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='p-0'>
                <div className="container-fluid">
                  <div className="row">

                    <div className="col-sm col-md col-lg">

                      <p className='text-uppercase font-semibold text-color-secodary text-4xl' data-swiper-parallax="-300">people matters</p>
                      {/* Double Lines */}
                      <div className="row">
                        <div style={{ height: 2 }} className="col-sm col-md col-lg bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                        <div className="col-sm col-md col-lg-9">&ensp;</div>
                      </div>
                      {/* End of Double Lines */}

                      <p className='py-4 text-[16px]' data-swiper-parallax="-100">
                        We believe in an inclusive environment that provides our team members with balanced opportunities, the most up to date resources,constant support, and access to the information necessary that fosters personal and professional growth, learning and prosperity,and we believe that valuing opinions, demonstrating respect and caring, and promoting trust and fun within our organisation
                        is critical to sustaining our success.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='p-0'>
                <div className="container-fluid py-16">
                  <div className="row">

                    <div className="col-sm col-md col-lg">

                      <p className='text-uppercase font-semibold text-color-secodary text-4xl' data-swiper-parallax="-300">environment matters</p>
                      {/* Double Lines */}
                      <div className="row">
                        <div style={{ height: 2 }} className="col-sm col-md col-lg bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                        <div className="col-sm col-md col-lg-9">&ensp;</div>
                      </div>
                      {/* End of Double Lines */}

                      <p className='py-4 text-[16px]' data-swiper-parallax="-100">
                        We believe that by being involved in our community we can grow both personally and professionally. By celebrating our successess and promoting a sense of family within our
                        organization we can be a source of strength, hope and help to one another.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="row">
       
          <div className="col-sm col-md col-lg text-center p-24">
            <Flex justify='center' align="center" vertical='vertical'>
              <p className='text-5xl font-bold'>WE ARE QUALIFIED IN ALL ELECTRICAL DISCIPLINES</p>
            </Flex>
          </div>
 
        </div>

        <div className="row p-4 g-5 ">
          <div className="col-sm-12 col-md-12 col-lg">
            <p className='text-uppercase font-bold text-color-secondary text-3xl'>Why choose us</p>
            <p className='text-[16px]'><i className="bi bi-check-circle text-color-primary"></i> &ensp; Quality services that gives clients optimum efficiency. </p>
            <p className='text-uppercase font-bold text-color-secondary text-3xl'>WHAT WE DO</p>
            <p className='text-[16px]'><i className="bi bi-check-circle text-color-primary text-[16px]"></i> &ensp; WE PARTNER WITH YOU, we don't throw costs, concerns and problems at you.
              Our approachable and trusted people spend time with you to understand where your are
              in your accounting journey so we can manage your finances for a sustainable and
              profitable future.
            </p>

            <p className='text-uppercase font-bold text-color-secondary text-[16px]'><i className="bi bi-check-circle text-color-primary"></i> &ensp; SIMPLIFIED FOR YOU</p>
            <p className='text-[16px]'>
              Our muscle-bound accounting teams and systems will take on the heavy lifting of your
              accounting, taxes, compliance, and admin. Why does it yourself when we can do it for you?
              This is where we shine.
            </p>
            <p className='text-uppercase font-bold text-color-secondary text-[16px]'><i className="bi bi-check-circle text-color-primary"></i> &ensp; BUSINESS TRANSFORMATION </p>
            <p className='text-[16px]'>
              With your data we can do more than just your accounting, we can transform your processes,
              improve your admin and make your life easier. We will help you automate, transform and refine
              your finances, data and business operations.
            </p>
            <p className='text-uppercase font-bold text-color-secondary text-[16px]'><i className="bi bi-check-circle text-color-primary"></i> &ensp;DATA DRIVEN DECISION-MAKING</p>
            <p className='text-[16px]'>
              Want to manage your data brilliantly? Want to ignite business growth but need more visibility?
              We have got the answer to these questions- yes you do, and yes, we can help you do it right now!
              We can take your data and transform it into insights today.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About