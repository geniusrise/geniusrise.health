import React from 'react'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'
import Form from './Form'

function CareerSingle() {
  return (
    <>
        <HerosectionHeader folder1={"pages"} folder2={"Company"} name={"Career Single"}/>
        <div class="page-content">
            <Form />
        </div>
    </>
  )
}

export default CareerSingle
