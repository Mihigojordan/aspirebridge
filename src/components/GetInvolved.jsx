import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const GetInvolved = () => {
    const featureItems = [
        {
            title: "Volunteer Opportunities",
            description: "How people can help",
            icon: <CheckCircle2 className="text-xl mr-2 text-blue-500" />
        },
        {
            title: "Partnership",
            description: "Collaborate with businesses, NGOs and Churches",
            icon: <CheckCircle2 className="text-xl mr-2 text-blue-500" />
        },
        {
            title: "Donate",
            description: "Support through financial contributions or sponsorships",
            icon: <CheckCircle2 className="text-xl mr-2 text-blue-500" />
        },
        {
            title: "Success Stories",
            description: "Testimonials and stories from those impacted",
            icon: <CheckCircle2 className="text-xl mr-2 text-blue-500" />
        }
    ];

    return (
        <section 
            className="relative w-full min-h-[400px] flex items-center justify-center rounded-lg overflow-hidden"
            aria-label="Get Involved Section"
        >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
            
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
            
            <div className="relative z-10 w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 text-white">
                <h1 className='text-4xl font-bold text-center mb-12'>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-200">
                        Get Involved
                    </span>
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {featureItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="flex items-start p-6 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30"
                        >
                            <span className="mt-1">{item.icon}</span>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-white">
                                    {item.title}
                                </h3>
                                <p className="text-gray-200">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default GetInvolved;