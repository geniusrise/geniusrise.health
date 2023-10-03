import React from 'react'
import Map from './Map'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'

function Contact1() {
    return (
        <>
            <HerosectionHeader folder1={"Pages"} folder2={"Contacts"} name={"Contact Us"} />
            <div class="page-content">
                <Map />
                <NewsletterL1 />
            </div>
        </>
    )
}

export default Contact1
