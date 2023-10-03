import React from 'react'
import FeatureL1 from '../../Componet/Feature/FeatureL1'
import FeatureL2 from '../../Componet/Feature/FeatureL2'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'
import ExclusiveServicesSection from '../../Componet/Service/ExclusiveServicesSection'
import FeatureSection from '../../Componet/Service/FeatureSection'
import FeatureSection3 from '../../Componet/Service/FeatureSection3'
import Service from '../../Componet/Service/Service'


const FeatureIconPage = () => {
    return (
        <>
            <HerosectionHeader name={"Feature Box"} folder1={"Features"} />
            <div class="page-content">
                <FeatureL1 />
                <FeatureL2 />
                <FeatureSection />
                <ExclusiveServicesSection />
                <FeatureSection3 />
                <Service />
                <NewsletterL1 />
            </div>
        </>
    )
}

export default FeatureIconPage;
