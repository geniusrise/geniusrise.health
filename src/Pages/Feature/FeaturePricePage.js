import React from 'react'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'
import PricingL2 from '../../Componet/Pricing/PricingL2'
import PricingL3 from '../../Componet/Pricing/PricingL3'



const FeaturePricePage = () => {
    return (
        <>
            <HerosectionHeader name={"Price Table"} folder1={"Features"} />
            <div class="page-content">
                <PricingL2/>
                <PricingL3 />
                <NewsletterL1 />
            </div>
        </>
    )
}

export default FeaturePricePage;
