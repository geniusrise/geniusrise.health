import React from 'react'
import Privacy from '../../Componet/PrivicyPolicy'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'

function PrivacyPolicy() {
  return (
    <>
      <HerosectionHeader folder1={"pages"} folder2={"Utilities"} name={" Privacy&Policy"} />
      <div className="page-content">
        <Privacy />
        <NewsletterL1 />
      </div>
    </>
  )
}

export default PrivacyPolicy
