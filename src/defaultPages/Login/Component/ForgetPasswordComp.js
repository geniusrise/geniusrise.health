import React from 'react'
import { Link } from 'react-router-dom';

function Forgotpass() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-5">
                            <div>
                                <div className="mb-5">
                                    <h2>Forgot your password?</h2>
                                    <p>Enter your email to reset your password.</p>
                                </div>
                                <form id="contact-form" method="post" action="php/contact.php">
                                    <div className="messages" />
                                    <div className="form-group">
                                        <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." />
                                        <div className="help-block with-errors" />
                                    </div> <a href="/" className="btn btn-primary btn-block">Forgot Now</a>
                                </form>
                                <div className="mt-4"> 
                                <Link className="link-title" to="/sign_in">Back to sign in</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Forgotpass;
