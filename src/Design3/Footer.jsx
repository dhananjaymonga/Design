import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Code, Palette, Camera, Music } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Us</h3>
            <p className="text-gray-400 leading-relaxed">Empowering businesses with innovative solutions and cutting-edge technology for a digital future.</p>
            <div className="flex space-x-4 mt-6">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transform hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:w-2 group-hover:bg-blue-400 transition-all duration-300"></span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Our Services</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code, text: 'Development' },
                { icon: Palette, text: 'Design' },
                { icon: Camera, text: 'Photography' },
                { icon: Music, text: 'Audio' }
              ].map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex flex-col items-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <service.icon className="w-6 h-6 mb-2 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{service.text}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Newsletter</h3>
            <p className="text-gray-400">Stay updated with our latest news and updates</p>
            <form className="mt-4 space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-white placeholder-gray-500"
              />
              <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};