import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../BlogList/Blogs'; // adjust path if needed

function NewsAndBlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <div className="text-center p-10 text-red-500">Blog not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-xl shadow-lg mb-6" />
      
      {blog.extraImages?.map((img, idx) => (
        <img key={idx} src={img} alt={`extra-${idx}`} className="w-full h-80 object-cover rounded-lg shadow mb-4" />
      ))}

      <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{blog.fullContent}</p>
    </div>
  );
}

export default NewsAndBlogDetail;
