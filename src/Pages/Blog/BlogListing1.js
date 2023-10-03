import React from 'react'
import BlogListing1Comp from './BlogListing1Comp'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'


const BlogListing1 = () => {
    return (
        <>
            <HerosectionHeader folder1={"pages"} folder2={"Blog"} name={"Blog Listing One"} />
            <div class="page-content">
                <BlogListing1Comp />
                <NewsletterL1 />
            </div>
        </>
    )
}

export default BlogListing1
