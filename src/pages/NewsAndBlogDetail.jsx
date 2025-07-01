import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowLeft, Tag, Clock } from 'lucide-react';
import blogs from '../BlogList/Blogs'; // adjust path if needed
import { useEffect } from 'react';

function NewsAndBlogDetail() {

      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);
  const [searchTerm, setSearchTerm] = useState('');
  
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-10">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Blog not found</h2>
          <Link to="/news-blogs" className="text-blue-600 hover:text-blue-800 underline">
            Return to Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Get other blogs (excluding current one)
  const otherBlogs = blogs.filter(b => b.id !== id);
  const recentBlogs = otherBlogs.slice(-4); // Last 4 as recent

  // Extract tags from all blogs (simplified - you can enhance this)
  const allTags = [
    'Entrepreneurship', 'Youth Empowerment', 'Business Training', 
    'Community Development', 'Women Empowerment', 'Agriculture',
    'Financial Literacy', 'Innovation', 'Leadership', 'Skills Development'
  ];

  // Filter blogs based on search
  const filteredBlogs = otherBlogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const RecentBlogCard = ({ blog }) => (
    <Link 
      to={`/news-blogs/${blog.id}`} 
      className="flex gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-50"
    >
      <img 
        src={blog.image} 
        alt={blog.title} 
        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-gray-800 text-sm line-clamp-2 mb-1">
          {blog.title}
        </h4>
        <div className="flex items-center text-gray-500 text-xs">
          <Clock className="w-3 h-3 mr-1" />
          <span>2 days ago</span>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-9xl mx-auto px-6 py-4">
          <Link 
            to="/news-blogs" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Link>
        </div>
      </div>

      <div className="max-w-9xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Main Content - 70% */}
          <div className="w-full lg:w-[70%]">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Blog Header */}
              <div className="relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {blog.title}
                  </h1>
                  <div className="flex items-center text-white/90">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">AspireBridge Rwanda</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Recent Post</span>
                  </div>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  {blog.fullContent && Array.isArray(blog.fullContent) 
                    ? blog.fullContent.map((content, index) => (
                        <div key={index} className="mb-4">
                          {content}
                        </div>
                      ))
                    : <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                        {blog.fullContent || blog.description}
                      </p>
                  }
                </div>

                {/* Blog Footer */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-600 text-sm">Share this article:</span>
                      <div className="flex space-x-2">
                        <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          <span className="text-xs">Facebook</span>
                        </button>
                        <button className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                          <span className="text-xs">Twitter</span>
                        </button>
                        <button className="p-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                          <span className="text-xs">LinkedIn</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* More from AspireBridge Section */}
            <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">More from AspireBridge Rwanda</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {otherBlogs.slice(0, 2).map((otherBlog) => (
                  <Link 
                    key={otherBlog.id}
                    to={`/news-blogs/${otherBlog.id}`} 
                    className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                  >
                    <img 
                      src={otherBlog.image} 
                      alt={otherBlog.title} 
                      className="w-full h-50 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">
                      {otherBlog.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {otherBlog.description}
                    </p>
                    <span className="inline-block mt-3 text-blue-600 font-medium text-sm">
                      Read More →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - 30% */}
          <div className="w-full lg:w-[30%] space-y-6">
            {/* Search Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Search Blogs</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search for blogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Search Results */}
              {searchTerm && (
                <div className="mt-4 max-h-60 overflow-y-auto">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">
                    Search Results ({filteredBlogs.length})
                  </h4>
                  {filteredBlogs.length > 0 ? (
                    <div className="space-y-2">
                      {filteredBlogs.slice(0, 3).map((blog) => (
                        <Link
                          key={blog.id}
                          to={`/news-blogs/${blog.id}`}
                          className="block p-2 hover:bg-gray-50 rounded text-sm"
                        >
                          <div className="font-medium text-gray-800 line-clamp-1">
                            {blog.title}
                          </div>
                          <div className="text-gray-500 text-xs line-clamp-1">
                            {blog.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">No blogs found</p>
                  )}
                </div>
              )}
            </div>

            {/* Recent Blogs Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                Recent Blogs
              </h3>
              <div className="space-y-4">
                {recentBlogs.map((recentBlog) => (
                  <RecentBlogCard key={recentBlog.id} blog={recentBlog} />
                ))}
              </div>
              <Link 
                to="/news-blogs" 
                className="block text-center mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View All Blogs →
              </Link>
            </div>

            {/* Tags Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2 text-blue-600" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full text-sm transition-colors duration-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter/CTA Section */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
              <p className="text-sm opacity-90 mb-4">
                Get the latest updates from AspireBridge Rwanda
              </p>
              <button className="w-full bg-white text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsAndBlogDetail;