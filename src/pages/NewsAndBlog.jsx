import React from 'react'
import Header from "../components/Header";

import image from '../assets/image.avif'
import GetInvolved from '../components/GetInvolved';

function NewsAndBlog() {
  return (
    <div>
         <Header
        title="News And Blogs"
        linkTitle="News And Blogs"
        linkHref="/news-blogs"
        backgroundImage={image}
      />
      <h1 className='text-2xl text-center p-20'>No News Update Or Blog Found</h1>
      <GetInvolved />
    </div>
  )
}

export default NewsAndBlog