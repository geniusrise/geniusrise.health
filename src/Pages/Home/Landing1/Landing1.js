import React from 'react'
import HerosectionL1 from '../../../Componet/Herosection/HerosectionL1'
import FeatureL1 from '../../../Componet/Feature/FeatureL1'
import AboutL2 from '../../../Componet/About//AboutL1'
import MultisecsL1 from '../../../Componet/Multisec/MultisecsL1'
import NewsletterL1 from '../../../Componet/Newsletter/NewsletterL1'
import TestimonialL1 from '../../../Componet/Testimonial/TestimonialL1'
import BlogStyle1 from '../../../Componet/Blog/BlogStyle1'

function Landing1() {
    return (
        <>
            <HerosectionL1 />
            <div className="page-content">
                <FeatureL1 />
                <AboutL2 />
                <MultisecsL1 />
                <TestimonialL1 />
                <BlogStyle1 />
                <NewsletterL1 />
            </div>
        </>
    )
}

export default Landing1


