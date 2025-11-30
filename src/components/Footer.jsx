import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/40 relative overflow-hidden bg-white/30 backdrop-blur-lg">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-tr from-purple-600 to-fuchsia-500 p-2 rounded-lg text-white shadow-md">
                
              </div>
              <span className="text-xl font-bold text-slate-900">Sarbik Growth Agency & Co.</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed font-normal">
              Clarifying the path to growth through transparent strategies and crystal-clear design.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-lg glass-button text-slate-700 hover:text-purple-600 hover:bg-white">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3">
              {['Strategy', 'Brand Identity', 'Digital Growth', 'SEO', 'Merchandise'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors text-sm font-normal">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Privacy Policy', 'Terms', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors text-sm font-normal">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Newsletter</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/50 border border-white/60 rounded-xl py-3 pl-4 pr-12 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:bg-white/80 transition-all"
              />
              <button className="absolute right-1 top-1 bg-purple-600 p-2 rounded-lg text-white hover:bg-purple-700 transition-colors shadow-md">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-200/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-normal">
          <p>&copy; {new Date().getFullYear()} Sarbik Growth Agency & Co. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;