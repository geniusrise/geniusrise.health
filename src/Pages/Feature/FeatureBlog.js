import React from 'react'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'
import BlogStyle1 from '../../Componet/Blog/BlogStyle1'
import BlogStyle2 from '../../Componet/Blog/BlogStyle2'
import BlogL3 from '../../Componet/Blog/BlogL3'


const FeatureBlogPage = () => {
    return (
        <>
            <HerosectionHeader name={"Blog"} folder1={"Features"}  />
            <div class="page-content">

                <BlogStyle1 />
                <BlogStyle2 />
                <div className='mt-8'>
                <BlogL3 />
                </div>
                <BlogStyle2 />
                <NewsletterL1 />
            </div>
        </>
    )
}

export default FeatureBlogPage;
