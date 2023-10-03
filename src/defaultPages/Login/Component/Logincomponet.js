import React from 'react'
import { Link } from 'react-router-dom'

function Logincomponet() {
  return (
    <div>
      <div>
        <div>
          <section>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-12">
                  <img className="img-fluid" src={require("../../../assets/images/login.png")} alt="" />
                </div>
                <div className="col-lg-5 col-12">
                  <div>
                    <h2 className="mb-3">Sign In</h2>
                    <form id="contact-form" method="post" action="php/contact.php">
                      <div className="messages"></div>
                      <div className="form-group">
                        <input id="form_name" type="text" name="name" className="form-control" placeholder="User name" required="required" data-error="Username is required." />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="form-group">
                        <input id="form_password" type="password" name="password" className="form-control" placeholder="Password" required="required" data-error="password is required." />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="form-group mt-4 mb-5">
                        <div className="remember-checkbox d-flex align-items-center justify-content-between">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="check1" />
                            <label className="form-check-label" for="check1">Remember me</label>
                          </div> <a className="btn-link" href="/">Forgot Password?</a>
                        </div>
                      </div> <a href="/" className="btn btn-primary">Login Now</a>
                    </form>
                    <div className="d-flex align-items-center mt-4"> <span className="text-muted me-1">Don't have an account?</span>
                      <Link to="/sign_up">Sign Up</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Logincomponet
