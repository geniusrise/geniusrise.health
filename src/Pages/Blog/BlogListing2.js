import React from 'react'
import NewsletterL1 from '../../Componet/Newsletter/NewsletterL1'
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader'
import BlogListing2Comp from './BlogListing2Comp'
const BlogListing2 = () => {
    return (
        <>
            <HerosectionHeader folder1={"pages"} folder2={"Blog"} name={"Blog Listing Two"} />
            <div class="page-content">
                <BlogListing2Comp />
                <NewsletterL1 />
            </div>
        </>
    )
}

export default BlogListing2;
