import React from 'react'
import { Space, Flex } from 'antd'
import logo from '../../assets/images/logos/micfix.png';
import { navVariants, slideIn, staggerContainer, textVariant, textVariant2, textContainer, fadeIn, zoomIn, footerVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (<>
    <motion.footer variants={footerVariants} initial="hidden" whileInView="show">
      <div className='container-fluid  bg-color-secondary hidden lg:block'>
        <Flex justify='space-evenly' size='large'>
          <div className="row p-4 w-75 bg-white">
            <div className="col-sm-12 col-md-12 col-lg">
              <Space>
                <span className=''><i className="bi bi-telephone-fill text-3xl text-color-primary"></i></span>
                <span>
                  <p className='m-0 text-color-secondary'>Phone No</p>
                  <p className='m-0 text-color-primary'>+263 773 588 222 / +263 714 760 355</p>
                </span>
              </Space>
            </div>
            <div className="col-sm-12 col-md-12 col-lg">
              <Space>
                <span className=''><i className="bi bi-envelope-fill text-3xl text-color-primary"></i></span>
                <span>
                  <p className='m-0 text-color-secondary'>Email Address</p>
                  <p className='m-0 text-color-primary'>michael@micfix.co.zw</p>
                </span>
              </Space>
            </div>
            <div className="col-sm-12 col-md-12 col-lg">
              <Space>
                <span className=''><i className="bi bi-geo-alt-fill text-3xl text-color-primary"></i></span>
                <span>
                  <p className='m-0 text-color-secondary'>Address</p>
                  <p className='m-0 text-color-primary'>489, Nyabira Shopping Centre Nyabira</p>
                </span>
              </Space>
            </div>
          </div>
        </Flex>
        <Flex justify='center' size='large'>
          <div className="row  w-75">
            <div className="col-sm col-md col-lg  text-white">
              <Space className='pt-20'>
                <span><img src={logo} alt='micfix' className="object-contain" width={80} /></span>
                <span className='text-white font-bold text-4xl'>Micfix Engineering</span>
              </Space>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg">
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
                  <p className='py-5 text-[16px]'>&copy; {new Date().getFullYear()} Micfix Engineering (Pvt) Ltd. All Rights Reserved By Micfix Engineering. <i className='text-color-primary'>Designed By Artwell R Murimi</i></p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg flex lg:justify-end">
                  <ul>
                    <li className="py-2 font-semibold">
                      <p>QUICK LINKS</p>

                      <div className="row">
                        <div style={{ height: 2 }} className="col bg-color-primary m-0 p-0"><div style={{ height: 2 }} className='bg-white w-10'></div></div>
                        <div className="col-sm col-md col-lg-10">&ensp;</div>
                      </div>
                    </li>
                    <li className="py-2 hover:text-sky-800"><Link className='text-[16px] text-white text-decoration-none' to={'/'}>Home</Link></li>
                    <li className="py-2 hover:text-sky-800"><Link className='text-[16px] text-white text-decoration-none' to={'/services'}>Services</Link></li>
                    <li className="py-2 hover:text-sky-800"><Link className='text-[16px] text-white text-decoration-none' to={'/about'}>About Us</Link></li>
                    <li className="py-2 hover:text-sky-800"><Link className='text-[16px] text-white text-decoration-none' to={'/contact'}>Contact Us</Link></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </Flex>
      </div>
    </motion.footer>
    <div className='container-fluid  bg-color-secondary block lg:hidden'>
      <Flex justify='space-evenly' size='large'>
        <div className="row p-2 w-100 bg-white">
          <div className="col-sm-12 col-md-12 col-lg">
            <Space>
              <span className=''><i className="bi bi-telephone-fill text-3xl text-color-primary"></i></span>
              <span>
                <p className='m-0 text-color-secondary'>Phone No</p>
                <p className='m-0 text-color-primary'>+263 773 588 222 / +263 714 760 355</p>
              </span>
            </Space>
          </div>
          <div className="col-sm-12 col-md-12 col-lg">
            <Space>
              <span className=''><i className="bi bi-envelope-fill text-3xl text-color-primary"></i></span>
              <span>
                <p className='m-0 text-color-secondary'>Email Address</p>
                <p className='m-0 text-color-primary'>michael@micfix.co.zw</p>
              </span>
            </Space>
          </div>
          <div className="col-sm-12 col-md-12 col-lg">
            <Space>
              <span className=''><i className="bi bi-geo-alt-fill text-3xl text-color-primary"></i></span>
              <span>
                <p className='m-0 text-color-secondary'>Address</p>
                <p className='m-0 text-color-primary'>489, Nyabira Shopping Centre Nyabira</p>
              </span>
            </Space>
          </div>
        </div>
      </Flex>
      <Flex justify='center' size='large'>
        <div className="row  w-100">
          <div className="col-sm col-md col-lg  text-white">
            <Space className='pt-20'>
              <span><img src={logo} alt='micfix' className="object-contain" width={60} /></span>
              <span className='text-white font-bold text-4xl'>Micfix Engineering</span>
            </Space>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg">
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
                <p className='py-5 text-[16px]'>&copy; {new Date().getFullYear()} Micfix Engineering (Pvt) Ltd. All Rights Reserved By Micfix Engineering. <i className='text-color-primary'>Designed By Artwell R Murimi</i></p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <ul>
                  <li className="py-2 font-semibold">
                    <p>QUICK LINKS</p>

                    <div className="row">
                      <div style={{ height: 2 }} className="col bg-color-primary m-0 p-0"><div style={{ height: 2 }} className='bg-white w-10'></div></div>
                      <div className="col-sm col-md col-lg-10">&ensp;</div>
                    </div>
                  </li>
                  <span className="py-3 px-2 hover:text-sky-800"><Link className='text-[12px] text-white text-decoration-none' to={'/'}>Home</Link></span>
                  <span className="py-3 px-2 hover:text-sky-800"><Link className='text-[12px] text-white text-decoration-none' to={'/services'}>Services</Link></span>
                  <span className="py-3 px-2 hover:text-sky-800"><Link className='text-[12px] text-white text-decoration-none' to={'/about'}>About Us</Link></span>
                  <span className="py-3 px-2 hover:text-sky-800"><Link className='text-[12px] text-white text-decoration-none' to={'/contact'}>Contact Us</Link></span>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </Flex>
    </div>
  </>

  )
}

export default Footer