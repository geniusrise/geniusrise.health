import React from 'react'
import HerosectionL2 from '../../../Componet/Herosection/HerosectionL2'
import Slider from '../../../Componet/Slider/Slider'
import Feature from '../../../Componet/Feature/FeatureL2'
import AboutUsL2 from '../../../Componet/About/AboutUsL2'
import MultisecL2 from '../../../Componet/Multisec/MultisecL2'
import PricingL2 from '../../../Componet/Pricing/PricingL2'
import ServiceL2 from '../../../Componet/Service/ServiceL2'
import NewsletterL1 from '../../../Componet/Newsletter/NewsletterL1'
import TestimonialL1 from '../../../Componet/Testimonial/TestimonialL1'
import BlogStyle2 from '../../../Componet/Blog/BlogStyle2'

function Landing2() {
  return (
    <>
      <HerosectionL2 />
      <div class="page-content">
        <Slider />
        <Feature />
        <AboutUsL2 />
        <MultisecL2 />
        <PricingL2 />
        <ServiceL2 />
        <TestimonialL1 />
        <BlogStyle2 />
        <NewsletterL1 />
      </div>
    </>
  )
}

export default Landing2
