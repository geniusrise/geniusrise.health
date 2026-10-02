import React, { useState } from 'react';
import { Collapse } from 'reactstrap';

function AboutFAQ() {
    const [openAccordion, setOpenAccordion] = useState(1);

    const toggleAccordion = (accordionIndex) => {
        setOpenAccordion(openAccordion === accordionIndex ? null : accordionIndex);
    };
    return (
        <>
            <section>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                            <img src={require('../../assets/images/about/04.png')} alt="Image1" className="img-fluid" />
                        </div>
                        <div className="col-12 col-lg-6 col-xl-5">
                            <div className="accordion" id="accordion">
                                <div className="accordion-item rounded mb-2">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button border-0 mb-0 bg-transparent"
                                            color="link"
                                            onClick={() => toggleAccordion(1)}
                                            aria-expanded={openAccordion === 1}
                                            aria-controls="collapseOne"
                                        >
                                            When our power of choice genius.doctor ?
                                        </button>
                                    </h2>
                                    <Collapse
                                        isOpen={openAccordion === 1}
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordion"
                                    >
                                        <div className="accordion-body text-muted">
                                            Looked up one of the more obscure Latin words, consectetur, from a Lorem
                                            Ipsum passage, and going through the cites and web page editors.
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item rounded mb-2">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button border-0 mb-0 bg-transparent"
                                            color="link"
                                            onClick={() => toggleAccordion(2)}
                                            aria-expanded={openAccordion === 2}
                                            aria-controls="collapseTwo"
                                        >
                                            Nam libero tempore, cum soluta nobis ?
                                        </button>
                                    </h2>
                                    <Collapse
                                        isOpen={openAccordion === 2}
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordion"
                                    >
                                        <div className="accordion-body text-muted">
                                            Looked up one of the more obscure Latin words, consectetur, from a Lorem
                                            Ipsum passage, and going through the cites and web page editors.
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item rounded">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button border-0 mb-0 bg-transparent"
                                            color="link"
                                            onClick={() => toggleAccordion(3)}
                                            aria-expanded={openAccordion === 3}
                                            aria-controls="collapseThree"
                                        >
                                            which is the same as saying through ?
                                        </button>
                                    </h2>
                                    <Collapse
                                        isOpen={openAccordion === 3}
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordion"
                                    >
                                        <div className="accordion-body text-muted">
                                            Looked up one of the more obscure Latin words, consectetur, from a Lorem
                                            Ipsum passage, and going through the cites and web page editors.
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutFAQ;
