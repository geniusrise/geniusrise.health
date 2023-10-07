import React from 'react';

function AboutL1() {
    const gototop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-7 mb-5 mb-lg-0">
                            <img
                                src={require('../../assets/images/cell2.png')}
                                alt="Image1"
                                className="img-fluid rounded"
                            />
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="mb-5">
                                <h2>
                                    <span className="font-w-4 d-block">
                                        Intelligent, Available, Humanistic, Diverse
                                    </span>{' '}
                                    Geniuses
                                </h2>
                                <p className="lead mb-0">Proving assistance to all in the pursuit of health.</p>
                            </div>
                            <div className="d-flex align-items-start mb-4">
                                <div className="me-3">
                                    <span className="list-dot" style={{ backgroundColor: '#01a479' }}></span>
                                </div>
                                <div>
                                    <h4 className="mb-2">Infinite personalization</h4>
                                    <p className="mb-0">
                                        Use your health records to customize geniuses per patient or staff member.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start mb-4">
                                <div className="me-3">
                                    <span className="list-dot" style={{ backgroundColor: '#ffbe30' }}></span>
                                </div>
                                <div>
                                    <h4 className="mb-2">Natural interfaces</h4>
                                    <p className="mb-0">
                                        Interact either using natural language or voice. We support all major Indian
                                        languages.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start mb-4">
                                <div className="me-3">
                                    <span className="list-dot" style={{ backgroundColor: '#f1a979' }}></span>
                                </div>
                                <div>
                                    <h4 className="mb-2">Highest efficiency per unit cost</h4>
                                    <p className="mb-0">
                                        Tools to dramatically increase efficiency with tightly controlled costs.
                                    </p>
                                </div>
                            </div>
                            <div className="btn btn-outline-primary mt-5" onClick={gototop}>
                                Explore More
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutL1;
