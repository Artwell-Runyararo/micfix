import React from 'react'
import { Headerz, NavBar, Footer } from '../../components'
import { TitleText } from '../../constants/typingText'
import logo from '../../assets/images/logos/migfix-02.png';
import cardPicture from '../../assets/images/african-american-technician-checks-maintenance-solar-panels-group-three-black-engineers-meeting-solar-station.png';
import cardPicture1 from '../../assets/images/international-worker-s-day-with-engineer-tools.png';
import cardPicture2 from '../../assets/images/different-electrical-tools-wooden-background-flat-lay.png';
import { navVariants, slideIn, staggerContainer, textVariant, textVariant2, textContainer, fadeIn, zoomIn, footerVariants } from '../../utils/motion';
import { motion } from 'framer-motion';

import { Space, Flex, Card } from 'antd';

const { Meta } = Card;

const Services = () => {
    return (
        <>
            <Headerz />
            <NavBar />
            <motion.div variants={staggerContainer} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.25 }}>
                <div className="container-fluid  bgPicture  hidden lg:block">

                    {/* Welcome Section Products */}
                    <div className="row bg-slate-950/90">
                        <div className="col-sm col-md col-lg-1">&ensp;</div>
                        <div style={{ height: '50vh' }} className="col-sm col-md col-lg py-10">
                            <Flex vertical='vertical' justify='start' className='py-16'>
                                <TitleText title={(<>
                                    <p className='text-uppercase font-black text-white text-6xl flex text-left justify-start'>Services</p>
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
                <div className='container-fluid pb-32  hidden lg:block'>
                    <div className="row">
                        <div className="col-sm col-md col-lg p-5">

                            <motion.p variants={textVariant2}>
                                <Flex justify='center' align="center" vertical='vertical'>
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
                        <div className="col-sm-12 col-md-12 col-lg my-4" style={{ overflow: 'hidden', }}>
                            <motion.div variants={slideIn('left', 'spring', 0.1, 3)} style={{ overflow: 'hidden', position: 'relative' }}>
                                <Card className='h-100' cover={(<>
                                    <div class="relative overflow-hidden">
                                        <div class="overflow-hidden ">
                                            <div class="h-full">
                                                <img src={cardPicture} alt="" class="h-full w-full object-cover" />
                                            </div>
                                        </div>
                                        <div class="relative p-8 h-auto">
                                            <div class="w-full flex justify-center">
                                                <span><img src={logo} alt='micfix' className="object-contain" width={50} /></span>
                                            </div>
                                        </div>
                                    </div>
                                </>)}>
                                    <Meta title={(<span className='font-black text-color-secodary text-xl flex text-center justify-center'>Quality Installations & Services</span>)} description={(<>
                                        <ul>
                                            <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'>Procurement and Installation of industrial machines
                                                including brick making machines etc</span></li>
                                            <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Building and construction and material supplies.
                                                (Electrical, plumbing, ceiling, tiling and painting).</span></li>
                                            <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Supply of machinery spares (electrical and mechanical).</span></li>
                                            <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Electrical gates and Intercom installations and repairs.</span></li>
                                        </ul>
                                    </>)} />
                                </Card>
                            </motion.div>

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg my-4" style={{ overflow: 'hidden', }}>
                            <motion.div variants={zoomIn(0.5, 1)} style={{ overflow: 'hidden', position: 'relative' }}>
                                <Card className='h-100 ' cover={(<>
                                    <div class="relative overflow-hidden">
                                        <div class="overflow-hidden ">
                                            <div class="h-full">
                                                <img src={cardPicture1} alt="" class="h-full w-full object-cover" />
                                            </div>
                                        </div>
                                        <div class="relative p-8 h-auto">
                                            <div class="w-full flex justify-center">
                                                <span><img src={logo} alt='micfix' className="object-contain" width={50} /></span>
                                            </div>
                                        </div>
                                    </div>
                                </>)}>
                                    <Meta title={(<span className='font-black text-color-secodary text-xl flex text-center justify-center'>Quality Installations & Services</span>)} description={(<>
                                        <ul>
                                            <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Project planning, design implementation and
                                                commissioning. </span></li>
                                            <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Electrical and mechanical installations and
                                                troubleshooting. </span></li>
                                            <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Machinery, equipment and infrastructure refurbishment.</span></li>
                                            <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Solar installations, upgrades and repairs.</span></li>
                                        </ul>
                                    </>)} />
                                </Card>
                            </motion.div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg my-4" style={{ overflow: 'hidden', }}>
                            <motion.div variants={slideIn('right', 'spring', 0.1, 3)} style={{ overflow: 'hidden', position: 'relative' }}>
                                <Card className='h-100 ' cover={(<>
                                    <div class="relative overflow-hidden">
                                        <div class="overflow-hidden ">
                                            <div class="h-full">
                                                <img src={cardPicture2} alt="" class="h-full w-full object-cover" />
                                            </div>
                                        </div>
                                        <div class="relative p-8 h-auto">
                                            <div class="w-full flex justify-center">
                                                <span><img src={logo} alt='micfix' className="object-contain" width={50} /></span>
                                            </div>
                                        </div>
                                    </div>
                                </>)}>
                                    <Meta title={(<span className='font-black text-color-secodary text-xl flex text-center justify-center'>Quality Installations & Services</span>)} description={(<>
                                        <ul>
                                            <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Electrical repairs and maintenance services</span></li>
                                            <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Procurement, installation, calibration and repairs
                                                of dosing machines. </span></li>
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
            <div className="container-fluid  bgPicture block lg:hidden">

                {/* Welcome Section Products */}
                <div className="row bg-slate-950/90 px-4">
                    <div className="col-sm-0 col-md-0 col-lg-1">&ensp;</div>
                    <div style={{ height: '50vh' }} className="col-sm col-md col-lg py-10">
                        <Flex vertical='vertical' justify='start' className='py-14'>
                            <TitleText title={(<>
                                <p className='text-uppercase font-black text-white text-6xl flex text-left justify-start'>Services</p>
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
            <div className='container-fluid pb-32 block lg:hidden'>
                <div className="row">
                    <div className="col-sm col-md col-lg p-5">
                        <Flex justify='center' align="center" vertical='vertical'>
                            <p>MAKE A SMART CHOICE, CHOOSE</p>
                            <p className='text-4xl font-bold'>QUALITY SERVICES</p>

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
                    <div className="col-sm col-md col-lg my-4" style={{ overflow: 'hidden', }}>
                        <Card className='h-100' cover={(<>
                            <div class="relative overflow-hidden">
                                <div class="overflow-hidden ">
                                    <div class="h-full">
                                        <img src={cardPicture} alt="" class="h-full w-full object-cover" />
                                    </div>
                                </div>
                                <div class="relative p-8 h-auto">
                                    <div class="w-full flex justify-center">
                                        <span><img src={logo} alt='micfix' className="object-contain" width={50} /></span>
                                    </div>
                                </div>
                            </div>
                        </>)}>
                            <Meta title={(<span className='font-black text-color-secodary text-lg flex text-center justify-center'>Quality Installations & Services</span>)} description={(<>
                                <ul>
                                    <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'>Procurement and Installation of industrial machines
                                        including brick making machines etc</span></li>
                                    <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Building and construction and material supplies.
                                        (Electrical, plumbing, ceiling, tiling and painting).</span></li>
                                    <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Supply of machinery spares (electrical and mechanical).</span></li>
                                    <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Electrical gates and Intercom installations and repairs.</span></li>
                                </ul>
                            </>)} />
                        </Card>

                    </div>
                    <div className="col-sm col-md col-lg my-4" style={{ overflow: 'hidden', }}>
                        <Card className='h-100 ' cover={(<>
                            <div class="relative overflow-hidden">
                                <div class="overflow-hidden ">
                                    <div class="h-full">
                                        <img src={cardPicture1} alt="" class="h-full w-full object-cover" />
                                    </div>
                                </div>
                                <div class="relative p-8 h-auto">
                                    <div class="w-full flex justify-center">
                                        <span><img src={logo} alt='micfix' className="object-contain" width={50} /></span>
                                    </div>
                                </div>
                            </div>
                        </>)}>
                            <Meta title={(<span className='font-black text-color-secodary text-lg flex text-center justify-center'>Quality Installations & Services</span>)} description={(<>
                                <ul>
                                    <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Project planning, design implementation and
                                        commissioning. </span></li>
                                    <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Electrical and mechanical installations and
                                        troubleshooting. </span></li>
                                    <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Machinery, equipment and infrastructure refurbishment.</span></li>
                                    <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Solar installations, upgrades and repairs.</span></li>
                                </ul>
                            </>)} />
                        </Card>
                    </div>
                    <div className="col-sm col-md col-lg my-4" style={{ overflow: 'hidden', }}>
                        <Card className='h-100 ' cover={(<>
                            <div class="relative overflow-hidden">
                                <div class="overflow-hidden ">
                                    <div class="h-full">
                                        <img src={cardPicture2} alt="" class="h-full w-full object-cover" />
                                    </div>
                                </div>
                                <div class="relative p-8 h-auto">
                                    <div class="w-full flex justify-center">
                                        <span><img src={logo} alt='micfix' className="object-contain" width={50} /></span>
                                    </div>
                                </div>
                            </div>
                        </>)}>
                            <Meta title={(<span className='font-black text-color-secodary text-lg flex text-center justify-center'>Quality Installations & Services</span>)} description={(<>
                                <ul>
                                    <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Electrical repairs and maintenance services</span></li>
                                    <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Procurement, installation, calibration and repairs
                                        of dosing machines. </span></li>
                                    <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> Electrical AC and DC drives installations and repairs </span></li>
                                    <li className='p-2 text-[16px]'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span className='text-[16px]'> PLCs upgrades and troubleshooting.
                                    </span></li>
                                </ul>
                            </>)} />
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Services