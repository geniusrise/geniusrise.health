import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import HerosectionHeader from "../../Componet/Herosection/HerosectionHeader";
import NewsletterL1 from "../../Componet/Newsletter/NewsletterL1";

function OrderComplete() {
    return (
        <div>
            <div className="page-wrapper">
            <HerosectionHeader name={"Order Complete"} folder1={"Shop"} />
                <div className="page-content">
                    <section >
                        <Container>
                            <Row className="align-items-center">
                                <Col md={12} className="text-center">
                                    <h3 className="mb-4">
                                        Thank you for purchasing, Your order is complete
                                    </h3>
                                    <Link className="btn btn-primary" to="/">
                                        Home
                                    </Link>
                                    <Link to="/product-grid" className="btn btn-primary ms-1">
                                        Continue Shopping
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <NewsletterL1 />
                </div>
            </div >
        </div >
    );
}

export default OrderComplete;
