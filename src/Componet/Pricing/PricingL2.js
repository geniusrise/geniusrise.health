import React from 'react'

function PricingL2() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="row align-items-center">
                <div className="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0">
                  {/* <!-- Card --> */}
                  <div className="card">
                    {/* <!-- Body --> */}
                    <div className="card-body py-5 px-4 text-center">
                      {/* <!-- Badge --> */}
                      <div className="mb-4"> <span className="h5 text-uppercase text-primary">Basic</span>
                      </div>
                      {/* <!-- Price --> */}
                      <div className="d-flex justify-content-center border-bottom border-light pb-5 mb-5"> <span className="text-muted h4 mb-0 mt-2">$</span>
                        <span className="price display-2 font-w-6 text-dark">0.00</span>
                        <span className="text-muted h4 align-self-end mb-1">/mo</span>
                      </div>
                      {/* <!-- Features --> */}
                      <ul className="list-unstyled mb-5">
                        <li className="mb-2">Free Custom Domain</li>
                        <li className="mb-2">Flexible, simple license</li>
                        <li className="mb-2">Monthly updates</li>
                        <li className="mb-2">Outstanding Support</li>
                        <li>Happy Customers</li>
                      </ul>
                      {/* <!-- Button -->  */}
                      <a href="/" className="btn btn-primary">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0">
                  {/* <!-- Card --> */}
                  <div className="card border-0" style={{ backgroundColor: "#d0faec" }}>
                    {/* <!-- Body --> */}
                    <div className="card-body py-5 px-4 text-center">
                      {/* <!-- Badge --> */}
                      <div className="mb-4"> <span className="h5 text-uppercase text-dark">Standard</span>
                      </div>
                      {/* <!-- Price --> */}
                      <div className="d-flex justify-content-center border-bottom border-white pb-5 mb-5"> <span className="text-muted h4 mb-0 mt-2">$</span>
                        <span className="price display-2 font-w-6 text-dark">59</span>
                        <span className="text-muted h4 align-self-end mb-1">/mo</span>
                      </div>
                      {/* <!-- Features --> */}
                      <ul className="list-unstyled mb-5">
                        <li className="mb-2">Free Custom Domain</li>
                        <li className="mb-2">Flexible, simple license</li>
                        <li className="mb-2">Monthly updates</li>
                        <li className="mb-2">Outstanding Support</li>
                        <li>Happy Customers</li>
                      </ul>
                      {/* <!-- Button -->  */}
                      <a href="/" className="btn btn-primary">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                  {/* <!-- Card --> */}
                  <div className="card">
                    {/* <!-- Body --> */}
                    <div className="card-body py-5 px-4 text-center">
                      {/* <!-- Badge --> */}
                      <div className="mb-4"> <span className="h5 text-uppercase text-primary">Premium</span>
                      </div>
                      {/* <!-- Price --> */}
                      <div className="d-flex justify-content-center border-bottom border-light pb-5 mb-5"> <span className="text-muted h4 mb-0 mt-2">$</span>
                        <span className="price display-2 font-w-6 text-dark">99</span>
                        <span className="text-muted h4 align-self-end mb-1">/mo</span>
                      </div>
                      {/* <!-- Features --> */}
                      <ul className="list-unstyled mb-5">
                        <li className="mb-2">Free Custom Domain</li>
                        <li className="mb-2">Flexible, simple license</li>
                        <li className="mb-2">Monthly updates</li>
                        <li className="mb-2">Outstanding Support</li>
                        <li>Happy Customers</li>
                      </ul>
                      {/* <!-- Button -->  */}
                      <a href="/" className="btn btn-primary">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- / .row --> */}
        </div>
        {/* <!-- / .container --> */}
      </section>

    </>
  )
}

export default PricingL2
