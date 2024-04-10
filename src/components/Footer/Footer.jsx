import React from 'react'
import { Space } from 'antd'
import logo from '../../assets/images/logos/micfix.png';

const Footer = () => {
  return (
    <div className='container-fluid'>
      <div className="row bg-color-secondary">
        <div className="row">
          <div className="col-sm-0 col-md-0 col-lg-2">&ensp;</div>
          <div className="col-sm col-md col-lg">
            <div className="row">
              {/* Desktop */}
              <div className="col-sm-12 col-md-12 col-lg p-5 bg-white flex justify-center">
                <Space size={'large'}>
                  <div className="col-sm col-md col-lg">
                    <Space>
                      <span className=''><i className="bi bi-telephone-fill text-3xl text-color-primary"></i></span>
                      <span>
                        <p className='m-0 text-color-secondary'>Phone No</p>
                        <p className='m-0 text-color-primary'>+263 773 588 222 / +263 714 760 355</p>
                      </span>
                    </Space>
                  </div>
                  <div className="col-sm col-md col-lg">
                    <Space>
                      <span className=''><i className="bi bi-envelope-fill text-3xl text-color-primary"></i></span>
                      <span>
                        <p className='m-0 text-color-secondary'>Email Address</p>
                        <p className='m-0 text-color-primary'>micfixenngineering@gmail.com</p>
                      </span>
                    </Space>
                  </div>
                  <div className="col-sm col-md col-lg">
                    <Space>
                      <span className=''><i className="bi bi-geo-alt-fill text-3xl text-color-primary"></i></span>
                      <span>
                        <p className='m-0 text-color-secondary'>Address</p>
                        <p className='m-0 text-color-primary'>489, Nyabira Shopping Centre Nyabira</p>
                      </span>
                    </Space>
                  </div>
                </Space>
              </div>
              {/* End of Desktop */}
            </div>
          </div>
          <div className="col-sm-0 col-md-0 col-lg-2">&ensp;</div>
        </div>
        <div className="row py-12">
          <div className="col-sm-0 col-md-0 col-lg-2">&ensp;</div>
          {/* Logo Desktop */}
          <div className="col-sm col-md col-lg text-white">
            <Space>
              <span><img src={logo} alt='micfix' className="object-contain" width={80} /></span>
              <span className='text-white font-bold text-4xl'>Micfix Engineering</span>
            </Space>
            <div className="row">
              <div className="col-sm col-md col-lg">
                <p className='pt-5'>
                  Micfix Engineering (Pvt) Ltd is a passionate Organization which seeks to provide customer
                  satisfaction in Electrical and Mechanical Engineering.
                  The company has a team of highly skilled and qualified professionals who offer personalized
                  services to meet the individual needs of their clients.
                </p>
                <p>
                  Micfix Engineering (Pvt) Ltd is committed to providing timely and accurate engineering services
                  to help its clients make informed decisions. With focus on delivering client satisfication, the
                  firm has built a reputation for excellence and integrity.
                </p>
                <p className='py-5'>&copy; {new Date().getFullYear()} Micfix Engineering (Pvt) Ltd. All Rights Reserved By Micfix Engineering.</p>
              </div>
              <div className="col-sm col-md col-lg flex justify-end">
                <ul>
                  <li className="py-2 font-semibold">
                    <p>QUICK LINKS</p>
                    {/* Double Lines */}
                    <div className="row">
                      <div style={{ height: 2 }} className="col bg-color-primary m-0 p-0"><div style={{ height: 2 }} className='bg-white w-10'></div></div>
                      <div className="col-sm col-md col-lg-10">&ensp;</div>
                    </div>
                    {/* End of Double Lines */}
                  </li>
                  <li className="py-2 hover:text-sky-800"><p href={'#'}>Home</p></li>
                  <li className="py-2 hover:text-sky-800"><p href={'#'}>Services</p></li>
                  <li className="py-2 hover:text-sky-800"><p href={'#'}>About Us</p></li>
                  <li className="py-2 hover:text-sky-800"><p href={'#'}>Contact Us</p></li>
                </ul>
              </div>
            </div>

          </div>
          {/* End of  Logo Desktop */}
          <div className="col-sm-0 col-md-0 col-lg-2">&ensp;</div>
        </div>
      </div>
    </div>
  )
}

export default Footer