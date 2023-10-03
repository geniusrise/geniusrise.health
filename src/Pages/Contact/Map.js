import React from 'react'

function Map() {
    return (
        <>
            <section >
                <div className='container'>
                    <div className='row'>
                        <div className="col-12 col-lg-7">
                            <div>
                                <div>
                                    <h2><span class="font-w-4 d-block">Subscribe newsletter</span> now for a custom built</h2>
                                </div>
                                <form id="contact-form" className="row" method="post" action="php/contact.php">
                                    <div className="messages" />
                                    <div className="form-group col-md-6">
                                        <input id="form_name" type="text" name="name" className="form-control" placeholder="First Name" required="required" data-error="Name is required." />
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input id="form_name1" type="text" name="name" className="form-control" placeholder="Last Name" required="required" data-error="Name is required." />
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." />
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Phone" required="required" data-error="Phone is required" />
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <select className="form-control">
                                            <option>- Select Service</option>
                                            <option>Consulting</option>
                                            <option>Finance</option>
                                            <option>Marketing</option>
                                            <option>Avanced Analytics</option>
                                            <option>planning</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input id="form_subject" type="tel" name="subject" className="form-control" placeholder="Subject" required="required" data-error="Subject is required" />
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <textarea id="form_message" name="message" className="form-control h-auto" placeholder="Message" rows={4} required="required" data-error="Please,leave us a message." defaultValue={""} />
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="col mt-4">
                                        <button className="btn btn-primary">Send Messages</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 ms-auto mt-5 mt-lg-0">
                            <div class="d-flex align-items-center bg-white p-3 shadow-sm rounded mb-3">
                                <div class="me-3">
                                    <div class="f-icon-s p-3 rounded" style={{ backgroundColor: "#d0faec" }}> <i class="flaticon-location"></i>
                                    </div>
                                </div>
                                <div>
                                    <h5 class="mb-1">Address:</h5>
                                    <span class="text-black">Road Wordwide Country, USA</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center bg-white p-3 shadow-sm rounded  mb-3">
                                <div class="me-3">
                                    <div class="f-icon-s p-3 rounded" style={{ backgroundColor: "#d0faec" }}> <i class="flaticon-mail"></i>
                                    </div>
                                </div>
                                <div>
                                    <h5 class="mb-1">Email Us:</h5>
                                    <a class="btn-link" href="mailto:themeht23@gmail.com"> mailto:themeht23@gmail.com</a>
                                </div>
                            </div>
                            <div class="d-flex align-items-center bg-white p-3 shadow-sm rounded">
                                <div class="me-3">
                                    <div class="f-icon-s p-3 rounded" style={{ backgroundColor: "#d0faec" }}> <i class="flaticon-telephone"></i>
                                    </div>
                                </div>
                                <div>
                                    <h5 class="mb-1">Call Us:</h5>
                                    <a class="btn-link" href="tel:+912345678900">+91-234-567-8900</a>
                                </div>
                            </div>
                            <div className='map h-50 mt-5'>
                                <iframe title='Wink' class="w-100 h-100 border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840108181602!2d144.95373631539215!3d-37.8172139797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1497005461921" allowfullscreen=""></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Map
