import React from 'react';
import logo from '../../assets/images/logos/migfix-02.png';
import cardPicture from '../../assets/images/Untitled-2.png';
import { Space, Flex } from 'antd';

const ServicesHome = () => {
    return (
        <div className='container-fluid'>
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
            <div className="row">
                <div className="col-sm col-md col-lg">
                    <div class="w-full flex justify-center">
                        <div class="relative overflow-hidden rounded bg-gray-100 my-4">
                            <div class="h-80 overflow-hidden rounded-t">
                                <div class="h-full">
                                    <img src={cardPicture} alt="" class="h-full w-full object-cover" />
                                </div>
                            </div>
                            <div class="relative p-8 h-auto">
                                <div class="absolute -top-14 left-0 w-full flex justify-center">
                                    <div class="rounded-full p-2 text-gray-100 bg-blue-600 hover:bg-blue-700 text-xs mb-2">
                                        <span className=''><i class="bi bi-browser-firefox text-8xl"></i></span>
                                    </div>
                                </div>
                                <div class="text-2xl mb-2 leading-7">
                                    <a href="#" class="text-blue-800 hover:text-blue-900 hover:underline hover:underline-offset-4 ">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </a>
                                </div>
                                <div class="flex align-items-center font-medium">
                                    <a href="#" class="block mr-1 text-sky-800">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-sm col-md col-lg">
                    <div class="w-full flex justify-center">
                        <div class="relative overflow-hidden rounded bg-gray-100 my-4">
                            <div class="h-80 overflow-hidden rounded-t">
                                <div class="h-full">
                                    <img src={cardPicture} alt="" class="h-full w-full object-cover" />
                                </div>
                            </div>
                            <div class="relative p-8 h-auto">
                                <div class="absolute -top-14 left-0 w-full flex justify-center">
                                    <div class="rounded-full p-2 text-gray-100 bg-blue-600 hover:bg-blue-700 text-xs mb-2">
                                        <span className=''><i class="bi bi-browser-firefox text-8xl"></i></span>
                                    </div>
                                </div>
                                <div class="text-2xl mb-2 leading-7">
                                    <a href="#" class="text-blue-800 hover:text-blue-900 hover:underline hover:underline-offset-4 ">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </a>
                                </div>
                                <div class="flex align-items-center font-medium">
                                    <a href="#" class="block mr-1 text-sky-800">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm col-md col-lg">
                    <div class="w-full flex justify-center">
                        <div class="relative overflow-hidden rounded bg-gray-100 my-4">
                            <div class="h-80 overflow-hidden rounded-t">
                                <div class="h-full">
                                    <img src={cardPicture} alt="" class="h-full w-full object-cover" />
                                </div>
                            </div>
                            <div class="relative p-8 h-auto">
                                <div class="absolute -top-14 left-0 w-full flex justify-center">
                                    <div class="rounded-full p-2 text-gray-100 bg-blue-600 hover:bg-blue-700 text-xs mb-2">
                                        <span className=''><i class="bi bi-browser-firefox text-8xl"></i></span>
                                    </div>
                                </div>
                                <div class="text-2xl mb-2 leading-7">
                                    <a href="#" class="text-blue-800 hover:text-blue-900 hover:underline hover:underline-offset-4 ">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </a>
                                </div>
                                <div class="flex align-items-center font-medium">
                                    <a href="#" class="block mr-1 text-sky-800">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesHome;