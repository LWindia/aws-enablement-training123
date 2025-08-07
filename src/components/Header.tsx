import React, { useState } from 'react';
import { Menu, X, Cloud } from 'lucide-react';
import { useRegistration } from '../contexts/RegistrationContext';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openRegistration } = useRegistration();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-lg border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <img 
              src="/certificates/iiec-logo.png" 
              alt="IIEC Logo" 
              className="h-10 w-auto object-contain"
            />
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
              <Cloud className="h-6 w-6 text-white" />
            </div>
            <div className="font-bold text-lg">
              <span className="text-gray-900">
                AWS Enablement Training 2025
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['about', 'policy', 'trainer', 'curriculum'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize transition-colors duration-200 hover:text-orange-500 text-gray-900"
              >
                {item === 'policy' ? 'Cloud Policy' : item}
              </button>
            ))}
            <button
              onClick={openRegistration}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Enroll Now - FREE
            </button>
            <img 
              src="/certificates/LW@4x1.png" 
              alt="LW Logo" 
              className="h-10 w-auto object-contain ml-4"
            />
          </nav>

          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg mt-2 p-4 shadow-lg border border-gray-200">
            {['about', 'policy', 'trainer', 'curriculum'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 text-gray-900 hover:text-orange-500 capitalize"
              >
                {item === 'policy' ? 'Cloud Policy' : item}
              </button>
            ))}
            <button
              onClick={openRegistration}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full mt-4"
            >
              Enroll Now - FREE
            </button>
            {/* Mobile LW Logo */}
            <div className="flex items-center justify-center mt-4 pt-4 border-t border-gray-200">
              <img 
                src="/certificates/LW@4x1.png" 
                alt="LW Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;