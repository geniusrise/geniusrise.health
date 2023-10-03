import React from 'react'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'
import CounterSection from '../../Componet/Counter/CounterSection1'
import TrustedPeopleSection from '../../Componet/Counter/TrustedPeopleSection'
import CounterL3 from '../../Componet/Counter/CounterL3'

const CounterPage = () => {
    return (
        <>
            <HerosectionHeader name={"Counter"} folder1={"Features"} />
            <div class="page-content">
                <CounterSection />
                <TrustedPeopleSection />
                <CounterL3 />
                <NewsletterL1 />
            </div>
        </>
    )
}

export default CounterPage;
