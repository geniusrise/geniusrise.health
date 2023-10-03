import React from 'react'
import Terms from '../../Componet/Terms'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'


function TermsConditions() {
    return (
        <>
            <HerosectionHeader folder1={"pages"} folder2={"Utilities"} name={"Terms and Conditions"} />
            <div class="page-content">
                <Terms />
                <NewsletterL1 />
            </div>
        </>
    )
}

export default TermsConditions
