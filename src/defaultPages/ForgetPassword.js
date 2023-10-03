import React from 'react'
import HerosectionHeader from '../Componet/Herosection/HerosectionHeader'
import NewsletterL1 from '../Componet/Newsletter/NewsletterL1'
import Forgotpass from './Login/Component/ForgetPasswordComp'

const Forgotpassword=()=> {
  return (
    <>
        <HerosectionHeader  folder1={"pages"} folder2={"Account"} name={"Forgot Password"}/>
        <div class="page-content">
            <Forgotpass />
            <NewsletterL1 />
        </div>
    </>
  )
}

export default Forgotpassword
