import React from 'react';
import logo from '../../assets/images/logos/migfix-02.png';
import cardPicture from '../../assets/images/Untitled-2.png';
import cardPicture1 from '../../assets/images/international-worker-s-day-with-engineer-tools.jpg';
import cardPicture2 from '../../assets/images/different-electrical-tools-wooden-background-flat-lay.jpg';

import { Space, Flex, Card } from 'antd';

const { Meta } = Card;

const ServicesHome = () => {
    return (
        <div className='container-fluid pb-32'>
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
                <div className="col-sm col-md col-lg my-4">
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
                                <li className='p-2'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span>Procurement and Installation of industrial machines
                                    including brick making machines etc</span></li>
                                <li className='p-2'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span> Building and construction and material supplies.
                                    (Electrical, plumbing, ceiling, tiling and painting).</span></li>
                                <li className='p-2'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span> Supply of machinery spares (electrical and mechanical).</span></li>
                                <li className='p-2'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span> Electrical gates and Intercom installations and repairs.</span></li>
                            </ul>
                        </>)} />
                    </Card>
                </div>
                <div className="col-sm col-md col-lg my-4">
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
                                <li className='p-2'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span> Project planning, design implementation and
                                    commissioning. </span></li>
                                <li className='p-2'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span> Electrical and mechanical installations and
                                    troubleshooting. </span></li>
                                <li className='p-2'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span> Machinery, equipment and infrastructure refurbishment.</span></li>
                                <li className='p-2'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span> Solar installations, upgrades and repairs.</span></li>
                            </ul>
                        </>)} />
                    </Card>
                </div>
                <div className="col-sm col-md col-lg my-4">
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
                                <li className='p-2'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span> Electrical repairs and maintenance services</span></li>
                                <li className='p-2'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span> Procurement, installation, calibration and repairs
                                    of dosing machines. </span></li>
                                <li className='p-2'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span> Electrical AC and DC drives installations and repairs </span></li>
                                <li className='p-2'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span> PLCs upgrades and troubleshooting.
                                </span></li>
                            </ul>
                        </>)} />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ServicesHome;