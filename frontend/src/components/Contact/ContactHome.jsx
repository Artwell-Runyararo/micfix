import React from 'react'
import { Input, Button, Form, message, Spin, Flex, Card } from "antd";
import logo from '../../assets/images/logos/migfix-02.png';
import { navVariants, slideIn, staggerContainer, textVariant, textVariant2, textContainer, fadeIn, zoomIn, footerVariants } from '../../utils/motion';
import { motion } from 'framer-motion';

const { TextArea } = Input;

const ContactHome = () => {
    return (
        <motion.div variants={staggerContainer} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.25 }}>
            <div className='container-fluid py-10'>
                <div className="row py-5">
                    <div className="col-sm col-md col-lg">

                        <motion.p variants={textVariant(0.5)}>
                            <Flex justify='center' align="center" vertical='vertical'>
                                <span><img src={logo} alt='micfix' className="object-contain" width={50} /></span>
                                <p className='text-5xl font-bold  hidden lg:inline-block'>PLEASE DO NOT HESITATE TO</p>
                                <p className='text-5xl font-bold'>CONTACT US</p>
                            </Flex>
                        </motion.p>
                    </div>
                </div>
                <motion.div variants={zoomIn(0.5, 1)} style={{ overflow: 'hidden', position: 'relative' }}>
                    <div className="row pb-24">
                        <div className="col-sm-0 col-md-2 col-lg-2">&ensp;</div>
                        <div className="col-sm col-md col-lg">
                            <Card className='p-5'>
                                <div className="row">
                                    <div className="col-sm col-md col-lg">
                                        <p className='font-bold text-3xl text-color-secondary m-0'>SEND US A MESSAGE</p>
                                        <p className='text-[16px]'>Feal some love, to see what we can do...</p>
                                    </div>
                                </div>
                                <Form className="p-2 sm:p-4" layout="vertical" hideRequiredMark>
                                    <div className="row">
                                        <div className="col-sm col-md col-lg">
                                            <Form.Item name={'name'} rules={[{ required: true, message: 'Please input your full name!', },]}>
                                                <Input size="large" className='rounded-0' placeholder="Complete Name" />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm col-md col-lg">
                                            <Form.Item name={'email'} rules={[{ type: 'email', message: 'The input is not valid e-mail!', }, { required: true, message: 'Please input your e-mail address!', },]}>
                                                <Input size="large" className='rounded-0' placeholder="Email Address" />
                                            </Form.Item>
                                        </div>
                                        <div className="col-sm col-md col-lg">
                                            <Form.Item name={'phone'} rules={[{ required: true, message: 'Please input your phone number!', },]}>
                                                <Input size="large" className='rounded-0' placeholder="Phone Number" />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm col-md col-lg">
                                            <Form.Item name={'message'} rules={[{ required: true, message: 'Please input your message body!', },]}>
                                                <TextArea className='rounded-0' placeholder='Descriptions ...' rows={4} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col-sm col-md col-lg'>
                                            <button className='rounded-0 bg-color-primary text-white p-4 w-50 hover:bg-color-primary border-0'> SUBMIT NOW</button>
                                        </div>
                                    </div>
                                </Form>
                            </Card>
                        </div>
                        <div className="col-sm-0 col-md-2 col-lg-2">&ensp;</div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ContactHome