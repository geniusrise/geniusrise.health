import React from 'react'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'
import Map from './Map'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'


function Contact2() {
    return (
        <div>
            <HerosectionHeader folder1={"pages"} folder2={"Contact"} name={"Contact Us 2"} />
            <div class="page-content">
                <Map />
                <NewsletterL1 />
            </div>
        </div>
    )
}

export default Contact2
