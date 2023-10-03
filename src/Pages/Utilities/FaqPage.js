import React from 'react'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'
import AboutFAQ from '../../Componet/About/AboutFaq'

function FAQ() {
  return (
    <>
        <HerosectionHeader  folder1={"pages"} folder2={"Utilities"} name={"FAQ"} />
        <div class="page-content">
            <AboutFAQ />
            <NewsletterL1 />
        </div>
    </>
  )
}

export default FAQ
