import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Row, Col } from 'reactstrap';

function Service() {
    const teamMembers = [
        {
            image: require('../../assets/images/app/01.jpg'),
        },
        {
            image: require('../../assets/images/app/02.jpg'),
        },
        {
            image: require('../../assets/images/app/03.jpg'),
        },
    ];
    const featuresData = [
        {
            icon: 'flaticon-dashboard',
            bgColor: '#d0faec',
            title: 'Fast Messaging',
            description: 'Taking design from genius.doctor design and typography layouts.',
        },
        {
            icon: 'flaticon-relationship',
            bgColor: '#ffeff8',
            title: 'User Friendly',
            description: 'Taking design from genius.doctor design and typography layouts.',
        },
        {
            icon: 'flaticon-solution',
            bgColor: '#d3f6fe',
            title: 'Live Chat',
            description: 'Taking design from genius.doctor design and typography layouts.',
        },
        {
            icon: 'flaticon-system',
            bgColor: '#fff5d9',
            title: '24/7 Support',
            description: 'Taking design from genius.doctor design and typography layouts.',
        },
    ];

    return (
        <div>
            <section>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-12 order-lg-1 mb-5 mb-lg-0 overflow-hidden">
                            <OwlCarousel
                                className="owl-carousel no-pb"
                                dotData={false}
                                items={1}
                                autoplay={true}
                                //margin={30}
                                dots={false}
                                loop={true}
                                //height={1000}
                                responsive={{
                                    0: {
                                        items: 1, // Show 1 item for screens with width less than or equal to 0px (mobile screens)
                                    },
                                    768: {
                                        items: 1, // Show 3 items for screens with width greater than or equal to 768px (larger screens)
                                    },
                                }}
                            >
                                {teamMembers.map((member, index) => (
                                    <div class="item">
                                        <div key={index} className="p-3 m-5 shadow rounded">
                                            <img className="img-fluid" src={member.image} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                        <div class="col-lg-8 col-12">
                            <div class="mb-5">
                                <h2 class="mb-0">
                                    <span class="font-w-4 d-block">genius.doctor provide Unique</span> smart
                                    features
                                </h2>
                            </div>
                            <Row>
                                {featuresData.map((feature, index) => (
                                    <Col key={index} md="6" className={`mt-5`}>
                                        <div className="d-flex justify-content-between">
                                            <div className="me-3">
                                                <div
                                                    className={`f-icon-s p-3 rounded`}
                                                    style={{ backgroundColor: feature.bgColor }}
                                                >
                                                    <i className={feature.icon}></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="mb-2">{feature.title}</h5>
                                                <p className="mb-0">{feature.description}</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Service;
