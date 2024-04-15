<Swiper
    style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
        height: '700px',
    }}
    speed={600}
    parallax={true}
    pagination={{
        clickable: true,
    }}
    navigation={true}
    modules={[Parallax, Pagination, Navigation]}
    className="mySwiper"
>
    <div
        slot="container-start"
        className="parallax-bg"
        style={{
            'background-image':
                'url(https://swiperjs.com/demos/images/nature-1.jpg)',
        }}
        data-swiper-parallax="-23%"
    ></div>
    <SwiperSlide>
        <div className="container">
            <div className="row ">
                <div className="col-sm col-md col-lg-6 bg-slide-color-primary p-5">
                    <div className="p-5">
                        <p>AN EXTENSIVE RANGE OF SERVICES</p>

                        <div className="row">
                            <div style={{ height: 2 }} className="col bg-white m-0 p-0"><div style={{ height: 2 }} className='bg-color-secondary w-20'></div></div>
                        </div>

                        <div className="title font-bold py-4" data-swiper-parallax="-300">
                            OUR SERVICES
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">

                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p className='text-xl'>
                                Micfix Engineering is committed to providing timely and accurate engineering
                                information to help its clients to make informed decisions.
                                With a focus on delivering clients satisfaction, the company has
                                built a reputation for excellences and integrity.
                            </p>
                            <div>
                                <button className='bg-color-primary text-uppercase shadow-sm p-4 font-semibold text-lg w-80 my-5'>Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
            Slide 2
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
        </div>
        <div className="text" data-swiper-parallax="-100">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
            Slide 3
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
        </div>
        <div className="text" data-swiper-parallax="-100">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
        </div>
    </SwiperSlide>
</Swiper> 