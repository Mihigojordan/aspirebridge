import React from 'react';
import image from '../assets/image2.jpg';
import image2 from '../assets/imag3.jpg';
import image3 from '../assets/image4.jpg';
import image4 from '../assets/image5.jpg';
import { Link } from 'react-router-dom';
import heroBackground from '../assets/vison-2.jpg';

export const Breakthrough = () => {
    const images = [image, image2, image3, image4];
    const stats = [
        { value: '100+', label: 'Youth Empowered' },
        { value: '85%', label: 'Success Rate' },
        { value: '200+', label: 'Communities Reached' },

    ];
    
    const programs = [
        {
            title: 'Entrepreneurship Training',
            description: 'Comprehensive programs teaching business fundamentals, financial literacy, and market strategies.'
        },
        {
            title: 'Mentorship Network',
            description: 'Connecting participants with industry leaders for guidance and professional development.'
        },
        {
            title: 'Funding Opportunities',
            description: 'Access to microloans and grants to help launch and grow businesses.'
        },
        {
            title: 'Community Hubs',
            description: 'Safe spaces for collaboration, networking, and skill-sharing.'
        }
    ];

    return (
        <div className="inset-0 bg-gradient-to-br from-gray-600 via-gray-900/80 to-gray-600 transition-all duration-300">
            {/* Hero Section */}
            <div className="relative w-full min-h-[60vh] flex items-center justify-center bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBackground})` }}>
                
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-0"></div>
                
                <div className="relative z-10 flex flex-col items-center justify-center gap-6 w-full text-center px-5 py-12 sm:px-10 text-white">
                    <h1 className="font-bold text-xl md:text-5xl lg:text-5xl xl:text-5xl leading-tight">
                        Breaking Barriers, <br/> Building Opportunities
                    </h1>
                    <p className="text-lg md:text-xl max-w-4xl leading-relaxed">
                        We equip youth and women with knowledge, skills, and support systems to break cycles of poverty, foster entrepreneurship, and drive inclusive economic growth.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <Link to='/contact' className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-100 transition-all">
                            Join Our Program
                        </Link>
                        <Link to='/about' className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl mb-12">
                        Our Impact in Numbers
                    </h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white/20 rounded-xl p-6 text-center backdrop-blur-sm border border-white/30">
                                <p className="text-5xl font-bold text-white">{stat.value}</p>
                                <p className="mt-2 text-lg font-medium text-white/90">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-2">
    {images.map((image, i) => (
        <div 
            key={i} 
            className="group relative overflow-hidden h-64 rounded-lg shadow-lg border-2 border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-300 hover:shadow-xl hover:border-gray-400"
        >
            <div className=" h-[400px]">
                <img 
                    src={image} 
                    className="w-full h-full object-cover rounded-md transition-transform duration-500 group-hover:scale-110" 
                    alt="Our programs in action"
                />
            </div>
            <div className="absolute inset-2 bg-gradient-to-t from-gray-900/70 via-gray-600/30 to-transparent rounded-md flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-lg mb-4 px-3 py-1 bg-gray-600/80 rounded-full backdrop-blur-sm">
                    Success Story #{i+1}
                </span>
            </div>
        </div>
    ))}
</div>

            {/* Programs Section */}
            <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-8xl mx-auto">
                    <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                        Our Empowerment Programs
                    </h2>
                    <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                        Comprehensive initiatives designed to create lasting change and sustainable growth.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {programs.map((program, index) => (
                            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                                <div className="bg-gradient-to-r from-blue-400 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold mb-4">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                                <p className="text-gray-600">{program.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

          
        </div>
    );
};

export default Breakthrough;