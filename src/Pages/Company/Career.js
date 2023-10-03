import React from 'react'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'
import AboutCareer from './AboutCareer'
import OpenPosition from './OpenPosition'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'

function Career() {
    return (
        <>
            <HerosectionHeader folder1={"pages"} folder2={"Company"} name={"Career"} />
            <div className="page-content">
                <AboutCareer />
                <OpenPosition />
                <NewsletterL1 />
            </div>
        </>
    )
}

export default Career
