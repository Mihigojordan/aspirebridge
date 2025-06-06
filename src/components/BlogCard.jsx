import React from 'react';
import { useNavigate } from 'react-router-dom';

function BlogCard({ blog }) {
  const navigate = useNavigate();

  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white flex flex-col h-full">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{blog.title}</h2>
            <p className="text-gray-600 text-sm mt-2 line-clamp-3">{blog.description}</p>
          </div>
          <button
            onClick={() => navigate(`/news-blogs/${blog.id}`)}
            className="mt-4 text-sm decoration-0  cursor-pointer bg-blue-600  text-white p-3 rounded-lg w-[150px] hover:underline self-start"
          >
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
