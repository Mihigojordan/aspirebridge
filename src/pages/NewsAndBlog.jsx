import React from 'react';
import Header from '../components/Header';
import GetInvolved from '../components/GetInvolved';
import blogs from '../BlogList/Blogs';
import BlogCard from '../components/BlogCard';
import image from '../assets/image.avif';

function NewsAndBlog() {
  return (
    <div>
      <Header
        title="News And Blogs"
        linkTitle="News And Blogs"
        linkHref="/news-blogs"
        backgroundImage={image}
      />

      <div className="flex flex-wrap justify-center px-4 py-10">
        {blogs.length > 0 ? (
          blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <h1 className='text-2xl text-center p-20'>No News Update Or Blog Found</h1>
        )}
      </div>

      <GetInvolved />
    </div>
  );
}

export default NewsAndBlog;
