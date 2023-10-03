import React from 'react'
import AboutL4 from '../../../Componet/About/AboutL4'
import BlogStyle1 from '../../../Componet/Blog/BlogStyle1'
import FeatureL4 from '../../../Componet/Feature/FeatureL4'
import HerosectionL4 from '../../../Componet/Herosection/HerosectionL4'
import Service from '../../../Componet/Service/Service'
import TestimonialL4 from '../../../Componet/Testimonial/TestimonialL4'

function Landing4() {
  return (
    <>
      <HerosectionL4 />
      <div class="page-content">
        <FeatureL4 />
        <AboutL4 />
        <TestimonialL4 />
        <Service />
        <BlogStyle1 />
      </div>
    </>
  )
}

export default Landing4