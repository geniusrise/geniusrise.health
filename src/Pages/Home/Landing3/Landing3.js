import React from 'react'
import Herosection3 from '../../../Componet/Herosection/HerosectionL3'
import FeatureL3 from '../../../Componet/Feature/FeatureL3'
import CounterL3 from '../../../Componet/Counter/CounterL3'
import AboutL3 from '../../../Componet/About/AboutL3'
import PricingL3 from '../../../Componet/Pricing/PricingL3'
import Step from '../../../Componet/Step/StepL3'
import TestimonialL3 from '../../../Componet/Testimonial/TestimonialL3'
import BlogL3 from '../../../Componet/Blog/BlogL3'
import NewsletterL1 from '../../../Componet/Newsletter/NewsletterL1'

function Landing3() {
  return (
    <>
      <Herosection3 />
      <div class="page-content">
        <FeatureL3 />
        <CounterL3 />
        <AboutL3 />
        <PricingL3 />
        <Step />
        <TestimonialL3 />
        <BlogL3 />
        <NewsletterL1 />
      </div>
    </>
  )
}

export default Landing3
