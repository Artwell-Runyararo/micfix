import { Space } from 'antd'
import React, { useState } from 'react'
import logo from '../../assets/images/logos/micfix.png';
import { navLinks } from '../../constants';
import { Flex } from 'antd';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);

  return (
    <div className='container-fluid'>
      <div className="row bg-color-secondary ">
        <div className="row g-0">
          <div className="col-sm-0 col-md-0 col-lg-1">&ensp;</div>
          <div className="col-sm col-md col-lg">
            <div className="row py-4">


              {/* Logo Desktop */}
              <div className="col-sm-12 col-md-12 col-lg-4 hidden lg:inline-flex">
                <Space >
                  <span><img src={logo} alt='micfix' className="object-contain" width={70} /></span>
                  <span className='text-white font-bold text-4xl'>Micfix Engineering</span>
                </Space>
              </div>
              {/* End of  Logo Desktop */}



              {/* Logo Mobile */}
              <div className="col-sm col-md col-lg-12  justify-center inline-flex lg:hidden ">
                <Flex size={'middle'} gap="middle" justify='space-around' className='w-full'>
                  <Space>
                    <img src={logo} alt='micfix' className="object-contain" width={50} /> <span className='text-white font-bold text-3xl'>Micfix Engineering</span>
                  </Space>
                  <Space>
                    {/* Icons Drop down menu items Mobile */}
                    <span className="inline-block justify-end lg:hidden ">
                      {toggle ? (
                        <span
                          onClick={() => setToggle(!toggle)} >
                          <i onClick={() => setToggle(!toggle)} className="bi bi-x-lg text-white text-3xl"></i>
                        </span>
                      ) : (
                        <span onClick={() => setToggle(!toggle)} >
                          <i onClick={() => setToggle(!toggle)} className="bi bi-info-square text-white text-3xl "></i>
                        </span>
                      )}
                    </span>
                    <span className="inline-block justify-end lg:hidden ">

                      {toggleMobile ? (
                        <span
                          onClick={() => setToggleMobile(!toggleMobile)} >
                          <i onClick={() => setToggleMobile(!toggleMobile)} className="bi bi-x-lg text-white text-5xl"></i>
                        </span>
                      ) : (
                        <span onClick={() => setToggleMobile(!toggleMobile)} >
                          <i onClick={() => setToggleMobile(!toggleMobile)} className="bi bi-list text-white text-5xl"></i>
                        </span>
                      )}
                    </span>
                    {/* End of Icons Drop down menu items Mobile */}
                  </Space>
                </Flex>
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
                <div className={`${!toggle ? "hidden" : "flex"} w-full p-6  z-50 bg-white animate__animated animate__fadeInDown animate__fast border  absolute top-36 right-0 my-2  sidebar`} >
                  <div className="row p-3">
                    <div className="col-sm col-md col-lg">
                      <Space wrap size={'large'}>
                        <div className="col-sm col-md col-lg">
                          <Space>
                            <span className=''><i className="bi bi-telephone-fill text-3xl text-color-primary"></i></span>
                            <span>
                              <p className='m-0 text-color-secondary font-semibold'>Phone No</p>
                              <p className='m-0 text-color-primary'>+263 773 588 222 / +263 714 760 355</p>
                            </span>
                          </Space>
                        </div>
                        <div className="col-sm col-md col-lg">
                          <Space>
                            <span className=''><i className="bi bi-envelope-fill text-3xl text-color-primary"></i></span>
                            <span>
                              <p className='m-0 text-color-secondary font-semibold'>Email Address</p>
                              <p className='m-0 text-color-primary'>micfixenngineering@gmail.com</p>
                            </span>
                          </Space>
                        </div>
                        <div className="col-sm col-md col-lg">
                          <Space>
                            <span className=''><i className="bi bi-geo-alt-fill text-3xl text-color-primary"></i></span>
                            <span>
                              <p className='m-0 text-color-secondary font-semibold'>Address</p>
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
        <div className="row g-0 ">
          <div className="col-sm col-md col-lg-1 sm:flex hidden">&ensp;</div>
          <div className="col-sm-12 col-md-12 col-lg-8 hidden lg:inline-block">
            <nav>
              {/* Desktop Navigation */}
              <ul className="list-none bg-white m-0 p-4 w-full sm:flex hidden">
                {navLinks.map((nav, index) => (
                  <li key={nav.id}
                    className={`cursor-pointer my-2 px-5 ${active === nav.title ? "text-color-primary" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mr-0" : "mr-0"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <Link to={`${nav.id}`} className="text-xl text-color-secondary text-decoration-none font-semibold border-r border-slate-900 pr-16" >{nav.title}</Link>
                  </li>

                ))}

              </ul>
              {/* End of Desktop Navigation */}
            </nav>
          </div>
          <div className="col-sm col-md col-lg hidden lg:inline-block">
            <Flex className='bg-color-primary p-4'>
              <span className="justify-center my-2 text-lg font-semibold w-100  text-white sm:flex hidden" >
                CONTACT US
              </span>
            </Flex>
          </div>
          <div className="col-sm col-md col-lg-1 sm:flex hidden">&ensp;</div>
        </div>

        <div className="inline-block lg:hidden flex-1 justify-end z-50 items-center">
          <div className={`${!toggleMobile ? "hidden" : "flex"} w-full p-6  z-50 bg-white animate__animated animate__fadeInDown animate__fast border  absolute top-36 right-0 my-2  sidebar`} >
            <div className="row">
              <div className="col-sm col-md col-lg inline-block lg:hidden">
                <nav>
                  {/* Desktop Navigation */}
                  <ul className="list-none bg-white m-0 p-4 w-full inline-block lg:hidden">
                    {navLinks.map((nav, index) => (
                      <li key={nav.id}
                        className={`cursor-pointer my-5 px-5 ${active === nav.title ? "text-color-primary" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mr-0" : "mr-0"}`}
                        onClick={() => setActive(nav.title)}
                      >
                        <Link to={`${nav.id}`} className="text-xl text-color-secondary text-decoration-none font-semibold border-b border-slate-900 pr-16 " >{nav.title}</Link>
                      </li>

                    ))}

                  </ul>
                  {/* End of Desktop Navigation */}
                </nav>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NavBar