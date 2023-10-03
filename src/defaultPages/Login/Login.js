import React from 'react'
import Logincomponet from './Component/Logincomponet'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'

function Login() {
  return (
    <>
      <HerosectionHeader name={"Login"} folder1={"Pages"} folder2={"Account"} />
      <div className="page-content">
        <Logincomponet />
        <NewsletterL1 />
      </div>
    </>
  )
}

export default Login
