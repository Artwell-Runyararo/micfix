import React from 'react'
import { Button, Flex, Card } from 'antd'
import cardPicture from '../../assets/images/different-electrical-tools-wooden-background-flat-lay.jpg';
const { Meta } = Card;

const AboutHome = () => {
    return (
        <div className='container-fluid'>
            <div className="row gray-extenal-color p-20">
                <div className="col-sm col-md col-lg p-5">
                    <div className="row">
                        <div className="col-sm col-md col-lg">
                            <p className='text-uppercase font-black text-color-secodary text-6xl'>About Us</p>
                            {/* Double Lines */}
                            <div className="row">
                                <div style={{ height: 2 }} className="col bg-color-primary m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                                <div className="col-sm col-md col-lg-9">&ensp;</div>
                            </div>
                            {/* End of Double Lines */}

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
                            <div>
                                <button className='rounded-0 bg-color-primary text-white p-4 w-50 hover:bg-color-primary border-0'>READ MORE &ensp;<i className="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm col-md col-lg">
                    <Card className='h-100 gray-extenal-color ' cover={(<>
                        <div class="relative overflow-hidden">
                            <div class="overflow-hidden ">
                                <div class="h-full">
                                    <img src={cardPicture} alt="" class="h-full w-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </>)}>
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
                            <p>We are rated 5 star <i class="bi bi-star-fill text-color-primary mx-2"></i><i class="bi bi-star-fill text-color-primary mx-2"></i><i class="bi bi-star-fill text-color-primary mx-2"></i><i class="bi bi-star-fill text-color-primary mx-2"></i><i class="bi bi-star-fill text-color-primary mx-2"></i></p>
                            <p className='py-2'><i class="bi bi-check-circle text-color-primary"></i> &ensp;<span>Quality services that gives clients optimum efficiency.</span></p>
                        </>)} />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default AboutHome