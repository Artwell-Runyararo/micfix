import React from 'react'
import { Button, Flex, Card } from 'antd'
import cardPicture from '../../assets/images/plumber-pointing-lateral.jpg';
const { Meta } = Card;
import { navVariants, slideIn, staggerContainer, textVariant, textVariant2, textContainer, fadeIn, zoomIn, footerVariants } from '../../utils/motion';
import { motion } from 'framer-motion';

const AboutHome = () => {
    return (<>
        <motion.div variants={staggerContainer} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.25 }}>
            <div className='container-fluid hidden lg:block'>
                <div className="row px-20">
                    <div className="col-sm-12 col-md-12 col-lg px-5">
                        <div className="row">
                            <div className="col-sm col-md col-lg">
                                <motion.p variants={textVariant(0.3)}>
                                    <p className='text-uppercase font-black text-color-secodary text-6xl'>
                                        About Us
                                    </p>
                                </motion.p>

                                {/* Double Lines */}
                                <div className="row">
                                    <div style={{ height: 2 }} className="col bg-color-primary m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                                    <div className="col-sm col-md col-lg-8">&ensp;</div>
                                </div>
                                {/* End of Double Lines */}
                                <motion.p variants={textVariant(1.0)}>
                                    <p className='pt-5 text-[16px]'>
                                        Micfix Engineering (Pvt) Ltd is a passionate Organization which seeks to provide customer
                                        satisfaction in Electrical and Mechanical Engineering.
                                        The company has a team of highly skilled and qualified professionals who offer personalized
                                        services to meet the individual needs of their clients.
                                    </p>
                                </motion.p>
                                <motion.p variants={textVariant(1.1)}>
                                    <p className='text-[16px]'>
                                        Micfix Engineering (Pvt) Ltd is committed to providing timely and accurate engineering services
                                        to help its clients make informed decisions. With focus on delivering client satisfication, the
                                        firm has built a reputation for excellence and integrity.
                                    </p>
                                </motion.p>

                                {/* <div>
                                    <button className='rounded-0 bg-color-primary text-white p-4 w-50 hover:bg-color-primary border-0'>READ MORE &ensp;<i className="bi bi-arrow-right"></i></button>
                                </div> */}

                                <motion.Card variants={textVariant(1.2)}>
                                    <Card bordered={false} className='m-0 py-20 shadow-0'>
                                        <Meta title={(<>
                                            <p>MICFIX IS MODERN, AGILE AND RELEVANT.</p>
                                            <p className='text-uppercase font-black text-color-secodary text-6xl'>WHY CHOOSE US</p>
                                            {/* Double Lines */}
                                            <div className="row">
                                                <div style={{ height: 2 }} className="col bg-color-primary m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                                                <div className="col-sm col-md col-lg-4">&ensp;</div>
                                            </div>
                                            {/* End of Double Lines */}
                                        </>)} description={(<>
                                            <p className='text-[16px]'>We are rated 5 star <i class="bi bi-star-fill text-color-primary mx-2"></i><i class="bi bi-star-fill text-color-primary mx-2"></i><i class="bi bi-star-fill text-color-primary mx-2"></i><i class="bi bi-star-fill text-color-primary mx-2"></i><i class="bi bi-star-fill text-color-primary mx-2"></i></p>
                                            <p className='py-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'>Quality services that gives clients optimum efficiency.</span></p>
                                        </>)} />
                                    </Card>
                                </motion.Card>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg" style={{ overflow: 'hidden', }}>
                        <motion.div variants={slideIn('right', 'spring', 0.1, 3)} style={{ overflow: 'hidden', position: 'relative' }}>
                            <Card bordered={false} className='h-50 shadow-0' cover={(<>
                                <div class="relative overflow-hidden">
                                    <div class="overflow-hidden ">
                                        <div class="h-full">
                                            <img src={cardPicture} alt="" class="w-75 object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </>)}>
                                &ensp;
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
        <div className='container-fluid block lg:hidden'>
            <div className="row px-16">
                <div className="col-sm-12 col-md-12 col-lg">
                    <div className="row">
                        <div className="col-sm col-md col-lg">
                            <p className='text-uppercase font-black text-color-secodary text-6xl'>
                                About Us
                            </p>

                            {/* Double Lines */}
                            <div className="row">
                                <div style={{ height: 2 }} className="col bg-color-primary m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                                <div className="col-sm col-md col-lg-8">&ensp;</div>
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

                            {/* <div>
                                    <button className='rounded-0 bg-color-primary text-white p-4 w-50 hover:bg-color-primary border-0'>READ MORE &ensp;<i className="bi bi-arrow-right"></i></button>
                                </div> */}

                            <Card bordered={false} className='m-0 py-20 shadow-0'>
                                <Meta title={(<>
                                    <p>MICFIX IS MODERN, AGILE AND RELEVANT.</p>
                                    <p className='text-uppercase font-black text-color-secodary text-6xl'>WHY CHOOSE US</p>
                                    {/* Double Lines */}
                                    <div className="row">
                                        <div style={{ height: 2 }} className="col bg-color-primary m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                                        <div className="col-sm col-md col-lg-4">&ensp;</div>
                                    </div>
                                    {/* End of Double Lines */}
                                </>)} description={(<>
                                    <p className='text-[16px]'>We are rated 5 star <i class="bi bi-star-fill text-color-primary mx-2"></i><i class="bi bi-star-fill text-color-primary mx-2"></i><i class="bi bi-star-fill text-color-primary mx-2"></i><i class="bi bi-star-fill text-color-primary mx-2"></i><i class="bi bi-star-fill text-color-primary mx-2"></i></p>
                                    <p className='py-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'>Quality services that gives clients optimum efficiency.</span></p>
                                </>)} />
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg" style={{ overflow: 'hidden', }}>
                    <Card bordered={false} className='h-50 shadow-0' cover={(<>
                        <div class="relative overflow-hidden">
                            <div class="overflow-hidden ">
                                <div class="h-full">
                                    <img src={cardPicture} alt="" class="w-100 object-cover" />
                                </div>
                            </div>
                        </div>
                    </>)}>
                        &ensp;
                    </Card>
                </div>
            </div>
        </div>
    </>
    )
}

export default AboutHome