import React from 'react'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'
import TestimonialSection from '../../Componet/Testimonial/Testimonial1'
import TestimonialL3 from '../../Componet/Testimonial/TestimonialL3'
import TestimonialL4 from '../../Componet/Testimonial/TestimonialL4'




const FeatureTestimonialPage = () => {
    return (
        <>
            <HerosectionHeader name={"Testimonial"} folder1={"Features"}/>
            <div class="page-content">
                <TestimonialSection />
                <TestimonialL3 />
                <TestimonialL4 />
                <NewsletterL1 />
            </div>
        </>
    )
}

export default FeatureTestimonialPage;
