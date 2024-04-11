import React from 'react'
import { Headerz, NavBar, Footer } from '../../components'
import { TitleText } from '../../constants/typingText'
import { Input, Button, Form, message, Spin, Flex, Card, Space, Divider } from "antd";
import logo from '../../assets/images/logos/migfix-02.png';

const { TextArea } = Input;

const Contact = () => {
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
                <p className='text-uppercase font-black text-white text-6xl flex text-left justify-start'>contact us</p>
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
      <div className='container-fluid py-10'>
        <div className="row py-5">
          <div className="col-sm col-md col-lg">
            <Flex justify='center' align="center" vertical='vertical'>
              <span><img src={logo} alt='micfix' className="object-contain" width={50} /></span>
              <p className='text-5xl font-bold  hidden lg:inline-block'>PLEASE DO NOT HESITATE TO</p>
              <p className='text-5xl font-bold'>CONTACT US</p>
            </Flex>
          </div>
        </div>
        <div className="hidden lg:inline">
          <div className="row g-0 px-28 pb-44">
            <div className="col-sm-12 col-md-12 col-lg-7 ">
              <Card className='p-5 bg-color-primary border-0'>
                <div className="row">
                  <div className="col-sm col-md col-lg">
                    <p className='font-bold text-3xl text-color-secondary m-0'>SEND US A MESSAGE   4566</p>
                    <p className='text-white'>Feal some love, to see what we can do...</p>
                  </div>
                </div>
                <Form className="p-2 sm:p-4" layout="vertical" hideRequiredMark>
                  <div className="row">
                    <div className="col-sm col-md col-lg">
                      <Form.Item name={'name'} rules={[{ required: true, message: 'Please input your full name!', },]}>
                        <Input size="large" className='rounded-0 border-0' placeholder="Complete Name" />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm col-md col-lg">
                      <Form.Item name={'email'} rules={[{ type: 'email', message: 'The input is not valid e-mail!', }, { required: true, message: 'Please input your e-mail address!', },]}>
                        <Input size="large" className='rounded-0 border-0' placeholder="Email Address" />
                      </Form.Item>
                    </div>
                    <div className="col-sm col-md col-lg">
                      <Form.Item name={'phone'} rules={[{ required: true, message: 'Please input your phone number!', },]}>
                        <Input size="large" className='rounded-0 border-0' placeholder="Phone Number" />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm col-md col-lg">
                      <Form.Item name={'message'} rules={[{ required: true, message: 'Please input your message body!', },]}>
                        <TextArea className='rounded-0 border-0' placeholder='Descriptions ...' rows={4} />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className='col-sm col-md col-lg'>
                      <button className='rounded-0 bg-white text-color-secondary font-bold p-4 w-50 hover:bg-color-primary border-0'> SUBMIT NOW</button>
                    </div>
                  </div>
                </Form>
              </Card>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 bg-color-secondary p-12">

              <Flex className='p-16' vertical='vertical'>
                <p className='text-white'>INFORMTION</p>
                <div className="col-sm col-md col-lg ">
                  <Space>
                    <span className=''><i className="bi bi-telephone-fill text-3xl text-color-primary"></i></span>
                    <span>
                      <p className='m-0 text-white font-semibold'>Phone No</p>
                      <p className='m-0 text-color-primary'>+263 773 588 222 / +263 714 760 355</p>
                    </span>
                  </Space>
                  <Divider className='bg-white' />
                </div>

                <div className="col-sm col-md col-lg">
                  <Space>
                    <span className=''><i className="bi bi-envelope-fill text-3xl text-color-primary"></i></span>
                    <span>
                      <p className='m-0 text-white font-semibold'>Email Address</p>
                      <p className='m-0 text-color-primary'>micfixenngineering@gmail.com</p>
                    </span>
                  </Space>
                  <Divider className='bg-white' />
                </div>

                <div className="col-sm col-md col-lg">
                  <Space>
                    <span className=''><i className="bi bi-geo-alt-fill text-3xl text-color-primary"></i></span>
                    <span>
                      <p className='m-0 text-white font-semibold'>Address</p>
                      <p className='m-0 text-color-primary'>489, Nyabira Shopping Centre Nyabira</p>
                    </span>
                  </Space>
                  <Divider className='bg-white' />
                </div>
              </Flex>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="inline-flex lg:hidden">
          <div className="row g-0 ">
            <div className="col-sm-12 col-md-12 col-lg-7 ">
              <Card className='p-5 bg-color-primary border-0'>
                <div className="row">
                  <div className="col-sm col-md col-lg">
                    <p className='font-bold text-3xl text-color-secondary m-0'>SEND US A MESSAGE</p>
                    <p className='text-white'>Feal some love, to see what we can do...</p>
                  </div>
                </div>
                <Form className="p-2 sm:p-4" layout="vertical" hideRequiredMark>
                  <div className="row">
                    <div className="col-sm col-md col-lg">
                      <Form.Item name={'name'} rules={[{ required: true, message: 'Please input your full name!', },]}>
                        <Input size="large" className='rounded-0 border-0' placeholder="Complete Name" />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm col-md col-lg">
                      <Form.Item name={'email'} rules={[{ type: 'email', message: 'The input is not valid e-mail!', }, { required: true, message: 'Please input your e-mail address!', },]}>
                        <Input size="large" className='rounded-0 border-0' placeholder="Email Address" />
                      </Form.Item>
                    </div>
                    <div className="col-sm col-md col-lg">
                      <Form.Item name={'phone'} rules={[{ required: true, message: 'Please input your phone number!', },]}>
                        <Input size="large" className='rounded-0 border-0' placeholder="Phone Number" />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm col-md col-lg">
                      <Form.Item name={'message'} rules={[{ required: true, message: 'Please input your message body!', },]}>
                        <TextArea className='rounded-0 border-0' placeholder='Descriptions ...' rows={4} />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className='col-sm col-md col-lg'>
                      <button className='rounded-0 bg-white text-color-secondary font-bold p-4 w-50 hover:bg-color-primary border-0'> SUBMIT NOW</button>
                    </div>
                  </div>
                </Form>
              </Card>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 bg-color-secondary p-12">

              <Flex className='p-16' vertical='vertical'>
                <p className='text-white'>INFORMTION</p>
                <div className="col-sm col-md col-lg ">
                  <Space>
                    <span className=''><i className="bi bi-telephone-fill text-3xl text-color-primary"></i></span>
                    <span>
                      <p className='m-0 text-white font-semibold'>Phone No</p>
                      <p className='m-0 text-color-primary'>+263 773 588 222 / +263 714 760 355</p>
                    </span>
                  </Space>
                  <Divider className='bg-white' />
                </div>

                <div className="col-sm col-md col-lg">
                  <Space>
                    <span className=''><i className="bi bi-envelope-fill text-3xl text-color-primary"></i></span>
                    <span>
                      <p className='m-0 text-white font-semibold'>Email Address</p>
                      <p className='m-0 text-color-primary'>micfixenngineering@gmail.com</p>
                    </span>
                  </Space>
                  <Divider className='bg-white' />
                </div>

                <div className="col-sm col-md col-lg">
                  <Space>
                    <span className=''><i className="bi bi-geo-alt-fill text-3xl text-color-primary"></i></span>
                    <span>
                      <p className='m-0 text-white font-semibold'>Address</p>
                      <p className='m-0 text-color-primary'>489, Nyabira Shopping Centre Nyabira</p>
                    </span>
                  </Space>
                  <Divider className='bg-white' />
                </div>
              </Flex>
            </div>
          </div>
        </div>
        {/* End of Moblie  */}

      </div>
      <Footer />
    </>
  )
}

export default Contact