import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const featuresData = [
  {
    color: '#01a479',
    text: 'Fast Performance technologies it voluptatem',
  },
  {
    color: '#2f2f41',
    text: 'Quick Access For Build With Static Bootstrap Code',
  },
  {
    color: '#01a479',
    text: 'Easy to Manage Your All Data access to development',
  },
];

function AboutL4() {
  return (
    <section className="pb-0">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs="12" lg="6" mb="6" mb-lg="0">
            <img src={require("../../assets/images/app/04.png")} alt="Image" className="img-fluid" />
          </Col>
          <Col xs="12" lg="6" xl="5">
            <div>
              <h2><span className="font-w-4 d-block">Unlimited features</span> awaiting for you</h2>
              <p className="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
            <div>
              {featuresData.map((feature, index) => (
                <div key={index} className="mb-3">
                  <div className="d-flex align-items-start">
                    <div className="me-3">
                      <span className="list-dot" style={{ backgroundColor: feature.color }}></span>
                    </div>
                    <p className="mb-0">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutL4;
