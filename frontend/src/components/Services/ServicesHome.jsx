import React from 'react';
import logo from '../../assets/images/logos/migfix-02.png';
import cardPicture from '../../assets/images/african-american-technician-checks-maintenance-solar-panels-group-three-black-engineers-meeting-solar-station.png';
import cardPicture1 from '../../assets/images/international-worker-s-day-with-engineer-tools.png';
import cardPicture2 from '../../assets/images/different-electrical-tools-wooden-background-flat-lay.png';
import { navVariants, slideIn, staggerContainer, textVariant, textVariant2, textContainer, fadeIn, zoomIn, footerVariants } from '../../utils/motion';
import { motion } from 'framer-motion';

import { Space, Flex, Card } from 'antd';

const { Meta } = Card;

const ServicesHome = () => {
    return (<>
        <motion.div variants={staggerContainer} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.25 }}>
            <div className='container-fluid pb-32 hidden lg:block'>
                <div className="row">
                    <div className="col-sm col-md col-lg p-5">
                        <motion.p variants={textVariant2}>
                            <Flex justify='center' align="center" vertical='vertical'>
                                <span><img src={logo} alt='micfix' className="object-contain" width={50} /></span>
                                <p>MAKE A SMART CHOICE, CHOOSE</p>
                                <p className='text-5xl font-bold'>QUALITY SERVICES</p>
                            </Flex>
                        </motion.p>

                        {/* Double Lines */}
                        <div className="row">
                            <div className="col-sm col-md col-lg-5">&ensp;</div>
                            <div style={{ height: 2 }} className="col bg-color-primary m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                            <div className="col-sm col-md col-lg-5">&ensp;</div>
                        </div>
                        {/* End of Double Lines */}
                    </div>
                </div>
                <div className="row sm:px-0 md:px-0 lg:px-32">
                    <div className="col-sm col-md col-lg " style={{ overflow: 'hidden', }}>
                        <motion.div variants={slideIn('left', 'spring', 0.1, 3)} style={{ overflow: 'hidden', position: 'relative' }}>
                            <Card className='h-100' cover={(<>
                                <div class="relative overflow-hidden">
                                    <div class="overflow-hidden ">
                                        <div class="h-full">
                                            <img src={cardPicture} alt="" class="h-full w-full object-cover" />
                                        </div>
                                    </div>
                                    <div class="relative p-8 h-auto">
                                        <div class="absolute -top-20 left-0 w-full flex justify-center">
                                            <div class="rounded-full p-4 text-gray-100 bg-color-primary text-xs mb-2">
                                                <span className=''><i class="bi bi-gear-wide text-8xl"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>)}>
                                <Meta title={(<span className='font-black text-color-secodary text-3xl flex text-center justify-center'>Quality Installations & Services</span>)} description={(<>
                                    <ul>
                                        <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'>Procurement and Installation of industrial machines including brick making machines etc</span></li>
                                        <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Building and construction and material supplies. (Electrical, plumbing, ceiling, tiling and painting).</span></li>
                                        <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Supply of machinery spares (electrical and mechanical).</span></li>
                                        <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Electrical gates and Intercom installations and repairs.</span></li>
                                    </ul>
                                </>)} />
                            </Card>
                        </motion.div>
                    </div>
                    <div className="col-sm col-md col-lg " style={{ overflow: 'hidden', }}>
                        <motion.div variants={zoomIn(0.2, 1)} style={{ overflow: 'hidden', position: 'relative' }}>
                            <Card className='h-100 ' cover={(<>
                                <div class="relative overflow-hidden">
                                    <div class="overflow-hidden ">
                                        <div class="h-full">
                                            <img src={cardPicture1} alt="" class="h-full w-full object-cover" />
                                        </div>
                                    </div>
                                    <div class="relative p-8 h-auto">
                                        <div class="absolute -top-20 left-0 w-full flex justify-center">
                                            <div class="rounded-full p-4 text-gray-100 bg-color-primary text-xs mb-2">
                                                <span className=''><i class="bi bi-fan text-8xl"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>)}>
                                <Meta title={(<span className='font-black text-color-secodary text-3xl flex text-center justify-center'>Quality Installations & Services</span>)} description={(<>
                                    <ul>
                                        <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Project planning, design implementation and commissioning. </span></li>
                                        <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Electrical and mechanical installations and troubleshooting. </span></li>
                                        <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Machinery, equipment and infrastructure refurbishment.</span></li>
                                        <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Solar installations, upgrades and repairs.</span></li>
                                    </ul>
                                </>)} />
                            </Card>
                        </motion.div>
                    </div>
                    <div className="col-sm col-md col-lg " style={{ overflow: 'hidden', }}>
                        <motion.div variants={slideIn('right', 'spring', 0.1, 3)} style={{ overflow: 'hidden', position: 'relative' }}>
                            <Card className='h-100 ' cover={(<>
                                <div class="relative overflow-hidden">
                                    <div class="overflow-hidden ">
                                        <div class="h-full">
                                            <img src={cardPicture2} alt="" class="h-full w-full object-cover" />
                                        </div>
                                    </div>
                                    <div class="relative p-8 h-auto">
                                        <div class="absolute -top-20 left-0 w-full flex justify-center">
                                            <div class="rounded-full p-4 text-gray-100 bg-color-primary text-xs mb-2">
                                                <span className=''><i class="bi bi-hammer text-8xl"></i></span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>)}>
                                <Meta title={(<span className='font-black text-color-secodary text-3xl flex text-center justify-center'>Quality Installations & Services</span>)} description={(<>
                                    <ul>
                                        <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Electrical repairs and maintenance services</span></li>
                                        <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Procurement, installation, calibration and repairs of dosing machines. </span></li>
                                        <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Electrical AC and DC drives installations and repairs </span></li>
                                        <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> PLCs upgrades and troubleshooting.
                                        </span></li>
                                    </ul>
                                </>)} />
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
        <div className='container-fluid pb-32 block lg:hidden'>
            <div className="row">
                <div className="col-sm col-md col-lg p-5">
                    <Flex justify='center' align="center" vertical='vertical'>
                        <span><img src={logo} alt='micfix' className="object-contain" width={50} /></span>
                        <p>MAKE A SMART CHOICE, CHOOSE</p>
                        <p className='text-5xl font-bold'>QUALITY SERVICES</p>
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
            <div className="row sm:px-0 md:px-0 lg:px-32">
                <div className="col-sm col-md col-lg " style={{ overflow: 'hidden', }}>
                    <Card className='h-100' cover={(<>
                        <div class="relative overflow-hidden">
                            <div class="overflow-hidden ">
                                <div class="h-full">
                                    <img src={cardPicture} alt="" class="h-full w-full object-cover" />
                                </div>
                            </div>
                            <div class="relative p-8 h-auto">
                                <div class="absolute -top-20 left-0 w-full flex justify-center">
                                    <div class="rounded-full p-4 text-gray-100 bg-color-primary text-xs mb-2">
                                        <span className=''><i class="bi bi-gear-wide text-8xl"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)}>
                        <Meta title={(<span className='font-black text-color-secodary text-3xl flex text-center justify-center'>Quality Installations & Services</span>)} description={(<>
                            <ul>
                                <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'>Procurement and Installation of industrial machines including brick making machines etc</span></li>
                                <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Building and construction and material supplies. (Electrical, plumbing, ceiling, tiling and painting).</span></li>
                                <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Supply of machinery spares (electrical and mechanical).</span></li>
                                <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Electrical gates and Intercom installations and repairs.</span></li>
                            </ul>
                        </>)} />
                    </Card>
                </div>
                <div className="col-sm col-md col-lg " style={{ overflow: 'hidden', }}>
                    <Card className='h-100 ' cover={(<>
                        <div class="relative overflow-hidden">
                            <div class="overflow-hidden ">
                                <div class="h-full">
                                    <img src={cardPicture1} alt="" class="h-full w-full object-cover" />
                                </div>
                            </div>
                            <div class="relative p-8 h-auto">
                                <div class="absolute -top-20 left-0 w-full flex justify-center">
                                    <div class="rounded-full p-4 text-gray-100 bg-color-primary text-xs mb-2">
                                        <span className=''><i class="bi bi-fan text-8xl"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)}>
                        <Meta title={(<span className='font-black text-color-secodary text-3xl flex text-center justify-center'>Quality Installations & Services</span>)} description={(<>
                            <ul>
                                <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Project planning, design implementation and commissioning. </span></li>
                                <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Electrical and mechanical installations and troubleshooting. </span></li>
                                <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Machinery, equipment and infrastructure refurbishment.</span></li>
                                <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Solar installations, upgrades and repairs.</span></li>
                            </ul>
                        </>)} />
                    </Card>
                </div>
                <div className="col-sm col-md col-lg " style={{ overflow: 'hidden', }}>
                    <Card className='h-100 ' cover={(<>
                        <div class="relative overflow-hidden">
                            <div class="overflow-hidden ">
                                <div class="h-full">
                                    <img src={cardPicture2} alt="" class="h-full w-full object-cover" />
                                </div>
                            </div>
                            <div class="relative p-8 h-auto">
                                <div class="absolute -top-20 left-0 w-full flex justify-center">
                                    <div class="rounded-full p-4 text-gray-100 bg-color-primary text-xs mb-2">
                                        <span className=''><i class="bi bi-hammer text-8xl"></i></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)}>
                        <Meta title={(<span className='font-black text-color-secodary text-3xl flex text-center justify-center'>Quality Installations & Services</span>)} description={(<>
                            <ul>
                                <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Electrical repairs and maintenance services</span></li>
                                <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Procurement, installation, calibration and repairs of dosing machines. </span></li>
                                <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Electrical AC and DC drives installations and repairs </span></li>
                                <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> PLCs upgrades and troubleshooting.
                                </span></li>
                            </ul>
                        </>)} />
                    </Card>
                </div>
            </div>
        </div>
    </>
    )
}

export default ServicesHome;