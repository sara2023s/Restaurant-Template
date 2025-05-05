
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-turmeric to-chili flex items-center justify-center text-white font-display font-bold text-xl">
                S
              </div>
              <span className="font-display text-xl font-bold">Sizzle<span className="text-turmeric">.</span></span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Experience the vibrant flavors of Sri Lanka in the heart of the city. Our authentic dishes bring the rich culinary heritage of Sri Lanka to your plate.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-turmeric transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-turmeric transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-turmeric transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li><Link to="/" className="text-gray-400 hover:text-turmeric transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-gray-400 hover:text-turmeric transition-colors">Menu</Link></li>
              <li><Link to="/order" className="text-gray-400 hover:text-turmeric transition-colors">Order Online</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-turmeric transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-turmeric transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 Spice Lane</p>
              <p className="mb-2">Colombo District</p>
              <p className="mb-4">Sri Lanka</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p>Email: info@srilankansizzle.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-gray-500 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Sri Lankan Sizzle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
