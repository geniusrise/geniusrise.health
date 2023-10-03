import React from 'react'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'
import PricingL3 from '../../Componet/Pricing/PricingL3'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'

function Pricing() {
  return (
    <div>
      <HerosectionHeader  folder1={"pages"} folder2={"Utilities"} name={"Pricing"} />
      <div class="page-content">
        <PricingL3 />
        <NewsletterL1 />
      </div>
    </div>
  )
}

export default Pricing
