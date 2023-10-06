import React, { useState } from 'react'
import "./style.css"


function Herosection1() {
  var [buttonText, setButtonText] = useState("Get your own Genius")

  const comingSoon = () => { }

  return (
    <>
      <section className="hero-banner position-relative custom-py-0 hero-shape1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 col-xl-6 order-lg-1 mb-8 mb-lg-0">
              {/* <!-- Image --> */}
              <img
                src={require("../../assets/images/connectome1.png")}
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-12 col-lg-7 col-xl-6">
              <h2 className="mb-5">Say hello to your clinical AI assistants</h2>
              {/* <!-- Buttons --> */}
              <div className="btn btn-primary custom-button" onClick={comingSoon}> <h2 className='custom-get-text'>{buttonText}</h2> </div>
              <blockquote className="mt-5 mb-0 ps-3 border-start border-primary">
                {/* <!-- Text --> */}
                <p className="lead mb-0">
                  <h3 class="text-primary">Use AI assistants across<br></br>operational and patient touchpoints.</h3>
                </p>
              </blockquote>
            </div>
          </div>
          {/* <!-- / .row --> */}
        </div>
        {/* <!-- / .container --> */}
      </section>
    </>
  )
}

export default Herosection1
