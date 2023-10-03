import React from 'react';
import CountUp from 'react-countup';
import { Row, Col } from 'reactstrap';

const featuresData = [
  {
    icon: 'flaticon-prototype-1',
    title: 'Awesome Design',
    description: 'Taking design from geniusrise.health design and typography, contemporary page layouts.',
  },
  {
    icon: 'flaticon-lightbulb',
    title: 'Easy to Use',
    description: 'Taking design from geniusrise.health design and typography, contemporary page layouts.',
  },
  {
    icon: 'flaticon-friendship',
    title: 'User Friendly',
    description: 'Taking design from geniusrise.health design and typography, contemporary page layouts.',
  },
];

const countersData = [
  {
    value: 50,
    label: 'Support Member',
    duration: 10,
  },
  {
    value: 99,
    label: 'People Love Us',
    duration: 20,
  },
  {
    value: 120,
    label: 'Happy Customers',
    duration: 20,
  },
];

function FeatureL4() {
  return (
    <section>
      <div className="container">
        <Row className="align-items-center">
          <Col lg="4">
            <div>
              <h2 className="mb-0">
                <span className="font-w-4 d-block">Trusted people </span> with geniusrise.health
              </h2>
            </div>
          </Col>
          <Col lg="8" mt="3" mt-lg="0">
            <Row className="align-items-center">
              {countersData.map((counter, index) => (
                <Col key={index} xs="12" sm="4">
                  <div className="counter">
                    <div className="counter-desc">
                      <CountUp className="count-number h2 text-primary" end={counter.value} duration={counter.duration} />
                      <span className="h2 text-primary">+</span>
                      <h6 className="text-muted mb-0">{counter.label}</h6>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="align-items-center mt-6">
          {featuresData.map((feature, index) => (
            <Col key={index} lg="4" md="6" mt-lg="0">
              <div className="p-5" style={{ backgroundColor: "#d0faec" }}>
                <div className="f-icon"> <i className={feature.icon}></i></div>
                <h5 className="mt-4 mb-3">{feature.title}</h5>
                <p className="mb-0">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default FeatureL4;
