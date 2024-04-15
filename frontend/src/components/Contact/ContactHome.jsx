import React from 'react'
import { Input, Button, Form, message, Spin, Flex, Card } from "antd";
import logo from '../../assets/images/logos/migfix-02.png';
import { navVariants, slideIn, staggerContainer, textVariant, textVariant2, textContainer, fadeIn, zoomIn, footerVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import { sendingEmails, getErrorMessage } from '../../api/Services';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

const { TextArea } = Input;

const ContactHome = () => {

    const [form] = Form.useForm();
    const queryClient = useQueryClient();
    const [messageApi, contextHolder] = message.useMessage();
    const sendEmailMutation = useMutation({
        mutationFn: sendingEmails,
        onSuccess: () => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries();
            messageApi.open({
                type: 'success',
                content: 'Your Email Has Been Successfully Sent!.',
                duration: 6,
            });
        },
        onError: (error) => {
            messageApi.open({
                type: 'error',
                content: getErrorMessage(error),
                duration: 6,
            });
        }
    });
    const submitEmai = (values) => {
        const details = {
            'from_name': values?.from_name,
            'email': values?.email,
            'user_phone': values?.user_phone,
            'message': values?.message
        }
        sendEmailMutation.mutate(details);
        form.resetFields();
    }

    return (
        <>
            {contextHolder}
            <motion.div variants={staggerContainer} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.25 }}>
                <div className='container-fluid hidden lg:block' style={{ overflow: 'hidden' }}>
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
                    <motion.div variants={slideIn('left', 'spring', 0.1, 3)} style={{ overflow: 'hidden', position: 'relative' }}>
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
                                    {sendEmailMutation.isError ? (
                                        <div className='py-2'><Alert onClose={() => sendEmailMutation.reset()} message={`An error occured: ` + getErrorMessage(sendEmailMutation.error)} type="error" showIcon closable /></div>
                                    ) : null}
                                    <Form className="p-2 sm:p-4" form={form} onFinish={submitEmai} layout="vertical" hideRequiredMark>
                                        <div className="row">
                                            <div className="col-sm col-md col-lg">
                                                <Form.Item name={'from_name'} rules={[{ required: true, message: 'Please input your full name!', },]}>
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
                                                <Form.Item name={'user_phone'} rules={[{ required: true, message: 'Please input your phone number!', },]}>
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
                                                <Button className='rounded-0 bg-color-primary text-black font-semibold w-75 hover:bg-color-primary border-0' htmlType='submit' > SUBMIT NOW</Button>
                                            </div>
                                            <div className="col-sm col-md col-lg d-flex justify-end">
                                                {sendEmailMutation.isPending ? (<span style={{ color: '#00AAB9' }} className="flex items-center rounded-lg px-4 py-2">
                                                    <svg style={{ color: '#00AAB9' }} className="mr-3 h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    <span className="font-medium"> Sending ... </span>
                                                </span>) : <span></span>}
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
            <div className='container-fluid block lg:hidden'>
                <div className="row py-5">
                    <div className="col-sm col-md col-lg">
                        <Flex justify='center' align="center" vertical='vertical'>
                            <span><img src={logo} alt='micfix' className="object-contain" width={50} /></span>
                            <p className='text-5xl font-bold  hidden lg:inline-block'>PLEASE DO NOT HESITATE TO</p>
                            <p className='text-5xl font-bold'>CONTACT US</p>
                        </Flex>
                    </div>
                </div>
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
                            {sendEmailMutation.isError ? (
                                <div className='py-2'><Alert onClose={() => sendEmailMutation.reset()} message={`An error occured: ` + getErrorMessage(sendEmailMutation.error)} type="error" showIcon closable /></div>
                            ) : null}
                            <Form className="p-2 sm:p-4" form={form} onFinish={submitEmai} layout="vertical" hideRequiredMark>
                                <div className="row">
                                    <div className="col-sm col-md col-lg">
                                        <Form.Item name={'from_name'} rules={[{ required: true, message: 'Please input your full name!', },]}>
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
                                        <Form.Item name={'user_phone'} rules={[{ required: true, message: 'Please input your phone number!', },]}>
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
                                        <Button className='rounded-0 bg-color-primary text-black font-semibold w-75 hover:bg-color-primary border-0' htmlType='submit' > SUBMIT NOW</Button>
                                    </div>
                                    <div className="col-sm col-md col-lg d-flex justify-end">
                                        {sendEmailMutation.isPending ? (<span style={{ color: '#00AAB9' }} className="flex items-center rounded-lg px-4 py-2">
                                            <svg style={{ color: '#00AAB9' }} className="mr-3 h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span className="font-medium"> Sending ... </span>
                                        </span>) : <span></span>}
                                    </div>
                                </div>
                            </Form>
                        </Card>
                    </div>
                    <div className="col-sm-0 col-md-2 col-lg-2">&ensp;</div>
                </div>
            </div>
        </>
    )
}

export default ContactHome