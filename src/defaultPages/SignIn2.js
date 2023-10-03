import React from 'react'

import HerosectionHeader from '../Componet/Herosection/HerosectionHeader'
import Login2 from './Login/Component/Login2'
import NewsletterL1 from '../Componet/Newsletter/NewsletterL1'

function Signin2() {
  return (
   <>
    <HerosectionHeader  folder1={"pages"} folder2={"Account"} name={"Login Two"}/>
    <div class="page-content">
      <Login2 />
      <NewsletterL1 />
    </div>
   </>
  )
}

export default Signin2
