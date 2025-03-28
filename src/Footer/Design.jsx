import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      {/* <main className="flex-grow bg-gray-100 flex items-center justify-center">
        <p>Main content area</p>
      </main> */}

      {/* Animated Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] opacity-10 bg-cover bg-center"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 transform hover:scale-105 transition-transform duration-300">
                Company Name
              </h3>
              <p className="text-gray-300 max-w-xs">
                Creating amazing digital experiences with passion and innovation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Services', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white flex items-center group"
                    >
                      <ExternalLink size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Stay Updated</h4>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="mx-1 text-red-500 animate-pulse" />
              <span>by Our Team</span>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;