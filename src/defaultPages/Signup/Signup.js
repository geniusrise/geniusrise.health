import React from 'react'
import Signupcomponet from './Component/Signupcomponet'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'

function Signup() {
  return (
    <div>
      <HerosectionHeader name={"SignUp"} folder1={"Pages"} folder2={"Account"} />
      <div className="page-content">
        <Signupcomponet />
        <NewsletterL1 />
      </div>
    </div>
  )
}

export default Signup
