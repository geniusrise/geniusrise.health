import React from 'react'
import "./style.css"

function FeatureL1() {
  const gototop=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
}
    return (
      <>
         <section>
          <div class="container">
            <div
              class="row justify-content-between align-items-center mb-4 mb-lg-0"
            >
              <div class="col-lg-6 col-md-5">
                <div>
                  <h2>
                    <span class="font-w-4 d-block text-danger"
                      >An assistant for all</span>
                  </h2>
                  <p class="lead">
                    Provide an assistant to guide everyone for every journey.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-7">
                <div class="p-5 feature-hover active position-relative">
                  <div class="f-icon"><i class="flaticon-prototype"></i></div>
                  {/* <img src={require("../../../../assets/icon/feedback.png")} className='cimg' /> */}
                  <h4 class="mt-4 mb-3">In - patient and Out - patient interactions</h4>
                  <p class="mb-0 custom-description-text">
                    Collect relevant information from incoming patients, ask relevant follow-up questions
                    and guide the patient to the right department. Provide clear and detailed action items
                    from diagnosis and discharge summaries.
                  </p>
                </div>
              </div>
            </div>
            <div class="row mt-lg-n5 align-items-center">
              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div class="p-5 feature-hover position-relative">
                  <div class="f-icon"><i class="flaticon-knowledge"></i></div>
                  <h4 class="mt-4 mb-3">Patient - Staff interactions</h4>
                  <p class="mb-0 custom-description-text">
                    Empower staff with comprehensive information about the patient,
                    predict resource utilization before patient checks into the premises.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div class="p-5 feature-hover position-relative">
                  <div class="f-icon"><i class="flaticon-thumbs-up"></i></div>
                  <h4 class="mt-4 mb-3">Patient - Doctor interactions</h4>
                  <p class="mb-0 custom-description-text">
                    Empower doctors with all the relevant information about the patient,
                    and help with decision support to make the right testing diagnostic and treatment choices.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-12 text-center">
                <div class="btn btn-primary mt-lg-8" onClick={gototop}>
                  And Many More
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}

export default FeatureL1
