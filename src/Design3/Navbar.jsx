import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, ShoppingCart } from 'lucide-react';
import { useParams, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Products',
      submenu: ['Cables', 'Wires', 'Switches', 'Lighting']
    },
    {
      name: 'Solutions',
      submenu: ['Industrial', 'Commercial', 'Residential']
    },
    { name: 'About' },
    { name: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              LOGO
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className={`flex items-center space-x-1 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } hover:text-blue-500 transition-colors`}>
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`p-2 rounded-full ${
              isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            } transition-colors`}>
              <Search className={isScrolled ? 'text-gray-800' : 'text-white'} />
            </button>
            <button className={`p-2 rounded-full ${
              isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            } transition-colors`}>
              <ShoppingCart className={isScrolled ? 'text-gray-800' : 'text-white'} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <div key={index}>
                  <button className="block px-3 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors w-full text-left">
                    {item.name}
                  </button>
                  {item.submenu && (
                    <div className="pl-4">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;