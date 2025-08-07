import React from 'react';
import { Heart, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/linuxworld-informatics-pvt-ltd/', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/@IIECconnect', label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/linuxworld.india/', label: 'Instagram' }
  ];

  const quickLinks = [
    { name: 'About Training', href: '#about' },
    { name: 'Cloud First Policy', href: '#policy' },
    { name: 'Meet the Trainer', href: '#trainer' },
    { name: 'Curriculum', href: '#curriculum' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg">
                <div className="w-8 h-8 bg-white rounded text-orange-500 flex items-center justify-center font-bold text-lg">
                  A
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">AWS Cloud Training</h3>
                <p className="text-gray-400">India's Premier Cloud Education Platform</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Empowering India's digital transformation through world-class AWS cloud training. 
              Join thousands of professionals who have accelerated their careers with our comprehensive programs.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-orange-400" />
                <span>support@lwindia.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-orange-400" />
                <span>+91 9772201449</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-orange-400" />
                <span>Nationwide Training Centers</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6">
              <span className="text-gray-300">Connect with us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="flex items-center mb-4 md:mb-0">
              <span>Crafted with</span>
              <Heart className="h-4 w-4 text-red-500 mx-2 animate-pulse" />
              <span>for Digital India | Guided by Vimal Daga | Powered by AWS</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>

          <div className="text-center mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500">
              © 2024 AWS Cloud Enablement Training. All rights reserved. | 
              Supporting India's Cloud First Policy under MeitY initiative
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;