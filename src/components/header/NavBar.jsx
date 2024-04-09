import { Space } from 'antd'
import React, { useState } from 'react'
import logo from '../../assets/images/logos/micfix.png';
import { navLinks } from '../../constants';
import { Flex } from 'antd';


const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className='container-fluid'>
      <div className="row bg-color-secondary">
        <div className="row py-4">
          <div className="col-sm-0 col-md-0 col-lg-1">&ensp;</div>
          <div className="col-sm col-md col-lg">
            <div className="row">


              {/* Logo Desktop */}
              <div className="col-sm-12 col-md-12 col-lg-4 hidden lg:inline-flex">
                <Space>
                  <span><img src={logo} alt='micfix' className="object-contain" width={80} /></span>
                  <span className='text-white font-bold text-4xl'>Micfix Engineering</span>
                </Space>
              </div>
              {/* End of  Logo Desktop */}



              {/* Logo Mobile */}
              <div className="col-sm col-md col-lg-12 bg-warning justify-center inline-flex lg:hidden ">
                <Space size={'large'} className='w-full'>
                  <span><img src={logo} alt='micfix' className="object-contain" width={80} /></span>
                  <span className='text-white font-bold text-4xl'>Micfix Engineering</span>
                  {/* Icons Drop down menu items Mobile */}
                  <span className="bg-success inline-block justify-end lg:hidden ">
                    <Space>
                      {toggle ? (
                        <span
                          className="w-[28px] h-[28px] object-contain" onClick={() => setToggle(!toggle)} >
                          <i onClick={() => setToggle(!toggle)} className="bi bi-arrow-up-circle text-white text-6xl"></i>
                        </span>
                      ) : (
                        <span onClick={() => setToggle(!toggle)} className="w-[28px] h-[28px] object-contain">
                          <i onClick={() => setToggle(!toggle)} className="bi bi-arrow-down-circle text-white text-6xl"></i>
                        </span>
                      )}
                    </Space>
                  </span>
                  {/* End of Icons Drop down menu items Mobile */}
                </Space>
              </div>
              {/* End of  Logo Mobile */}

              {/* Desktop */}
              <div className="col-sm-12 col-md-12 col-lg flex justify-end ">
                <span className="hidden lg:inline-flex">
                  <Space size={'large'}>
                    <div className="col-sm col-md col-lg">
                      <Space>
                        <span className=''><i className="bi bi-telephone-fill text-3xl text-color-primary"></i></span>
                        <span>
                          <p className='m-0 text-white'>Phone No</p>
                          <p className='m-0 text-color-primary'>+263 773 588 222 / +263 714 760 355</p>
                        </span>
                      </Space>
                    </div>
                    <div className="col-sm col-md col-lg">
                      <Space>
                        <span className=''><i className="bi bi-envelope-fill text-3xl text-color-primary"></i></span>
                        <span>
                          <p className='m-0 text-white'>Email Address</p>
                          <p className='m-0 text-color-primary'>micfixenngineering@gmail.com</p>
                        </span>
                      </Space>
                    </div>
                    <div className="col-sm col-md col-lg">
                      <Space>
                        <span className=''><i className="bi bi-geo-alt-fill text-3xl text-color-primary"></i></span>
                        <span>
                          <p className='m-0 text-white'>Address</p>
                          <p className='m-0 text-color-primary'>489, Nyabira Shopping Centre Nyabira</p>
                        </span>
                      </Space>
                    </div>
                  </Space>
                </span>
              </div>
              {/* End of Desktop */}


              {/* Mobile device */}
              <div className="inline-flex lg:hidden flex-1 justify-end z-50 items-center">
                <div className={`${!toggle ? "hidden" : "flex"} w-full p-6 backdrop-blur-md z-50 bg-white/30 animate__animated animate__fadeInDown animate__fast border  absolute top-20 right-0 my-2  rounded-xl sidebar`} >
                  <div className="row">
                    <div className="col-sm col-md col-lg">
                      <Space wrap size={'large'}>
                        <div className="col-sm col-md col-lg">
                          <Space>
                            <span className=''><i className="bi bi-telephone-fill text-3xl text-color-primary"></i></span>
                            <span>
                              <p className='m-0 text-white'>Phone No</p>
                              <p className='m-0 text-color-primary'>+263 773 588 222 / +263 714 760 355</p>
                            </span>
                          </Space>
                        </div>
                        <div className="col-sm col-md col-lg">
                          <Space>
                            <span className=''><i className="bi bi-envelope-fill text-3xl text-color-primary"></i></span>
                            <span>
                              <p className='m-0 text-white'>Email Address</p>
                              <p className='m-0 text-color-primary'>micfixenngineering@gmail.com</p>
                            </span>
                          </Space>
                        </div>
                        <div className="col-sm col-md col-lg">
                          <Space>
                            <span className=''><i className="bi bi-geo-alt-fill text-3xl text-color-primary"></i></span>
                            <span>
                              <p className='m-0 text-white'>Address</p>
                              <p className='m-0 text-color-primary'>489, Nyabira Shopping Centre Nyabira</p>
                            </span>
                          </Space>
                        </div>
                      </Space>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Mobile device */}

              
            </div>

          </div>
          <div className="col-sm-0 col-md-0 col-lg-1">&ensp;</div>
        </div>
        <div className="row g-0">
          <div className="col-sm col-md col-lg-1">&ensp;</div>
          <div className="col-sm-12 col-md-12 col-lg-8">
            <nav>
              {/* Desktop Navigation */}
              <ul className="list-none bg-white m-0 p-5 w-full sm:flex hidden">
                {navLinks.map((nav, index) => (
                  <li key={nav.id}
                    className={`cursor-pointer px-5 ${active === nav.title ? "text-color-primary" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mr-0" : "mr-0"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <span className="text-xl font-semibold border-r border-slate-900 pr-16" >{nav.title}</span>
                  </li>
                ))}
              </ul>
              {/* End of Desktop Navigation */}
            </nav>
          </div>
          <div className="col-sm col-md col-lg ">
            <span className="bg-color-primary p-5 justify-center text-xl font-semibold  text-white sm:flex hidden" >
              CONTACT US
            </span>
          </div>
          <div className="col-sm col-md col-lg-1">&ensp;</div>
        </div>
      </div>
    </div>
  )
}

export default NavBar