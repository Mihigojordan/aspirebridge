import React, { useRef } from 'react';
import { MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
      toast.success('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      toast.error('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-xl sm:tracking-tight lg:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-md text-gray-500">
            We'd love to hear from you. Send us a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map Section */}
          <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 rounded-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8 backdrop-blur-sm bg-white/30 rounded-2xl border border-white/20">
                <MapPin className="w-16 h-16 mx-auto text-white" />
                <h3 className="mt-4 text-2xl font-bold text-white">Our Location</h3>
                <p className="mt-2 text-white/90">123 Business Avenue<br />New York, NY 10001</p>
              </div>
            </div>
            {/* Replace with your actual map embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291865!2d-73.98784492416416!3d40.74844047138961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1712345678901"
              className="w-full h-full border-0 rounded-3xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-10">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <div className=" relative rounded-md shadow-sm">
                    <input
                      type="text"
                      name="first_name"
                      id="first-name"
                      required
                      className="block w-full text-sm px-2 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      type="text"
                      name="last_name"
                      id="last-name"
                      required
                    className="block w-full text-sm px-2 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Doe"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className=" relative rounded-md shadow-sm">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                   
                    className="block w-full text-sm px-2 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                     placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="block w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Your message here..."
                    defaultValue={''}
                  />
                </div>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <Send className="h-5 w-5 text-blue-200 group-hover:text-blue-100 transition-colors duration-300" />
                  </span>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;