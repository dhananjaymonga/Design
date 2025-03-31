import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowUpCircle, Globe, Clock, Users, BookOpen, Heart, Coffee, Music, Camera, Palette, Code, Star, Zap, Trophy, Target } from 'lucide-react';

function App() {
  const [showContact, setShowContact] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-[300vh] bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
            Welcome to Innovation
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl animate-slideUp">
            Discover the future of digital excellence with our cutting-edge solutions and creative expertise.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Star, title: 'Premium Quality', desc: 'Best-in-class solutions' },
            { icon: Zap, title: 'Lightning Fast', desc: 'Optimized performance' },
            { icon: Trophy, title: 'Award Winning', desc: 'Industry recognition' },
            { icon: Target, title: 'Goal Oriented', desc: 'Results that matter' }
          ].map((item, index) => (
            <div key={index} 
                 className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: Code, title: 'Development', desc: 'Cutting-edge solutions' },
              { icon: Palette, title: 'Design', desc: 'Creative excellence' },
              { icon: Globe, title: 'Global Reach', desc: 'Worldwide impact' },
              { icon: Users, title: 'Community', desc: 'Strong connections' },
              { icon: Heart, title: 'Dedication', desc: 'Passionate service' },
              { icon: Coffee, title: 'Experience', desc: 'Years of expertise' }
            ].map((item, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.desc}</p>
                <button className="mt-6 text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300 flex items-center">
                  Learn More
                  <ArrowUpCircle className="w-4 h-4 ml-2 transform rotate-90 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Link Button */}
      <button
        onClick={() => setShowContact(true)}
        className={`fixed right-8 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 ${
          visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
        }`}
      >
        <Phone className="w-6 h-6 animate-pulse" />
      </button>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-20 bg-white text-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 ${
          lastScrollY > 200 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <ArrowUpCircle className="w-6 h-6" />
      </button>

      {/* Contact Popup */}
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 animate-slideUp shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Let's Connect</h2>
            <div className="space-y-6">
              <div className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-700">contact@example.com</span>
              </div>
              <div className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-700">123 Business Street, City</span>
              </div>
            </div>
            <button
              onClick={() => setShowContact(false)}
              className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white transition-all duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-16'
      }`}>
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
    </div>
  );
}

export default App;