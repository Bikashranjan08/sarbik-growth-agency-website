import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignIn = () => {
    toast({
      title: "Feature Coming Soon",
      description: "Client portal access is currently under development.",
      className :"bg-purple-600 hover:bg-purple-700 text-white w-full py-6 rounded-xl shadow-md"
    });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Contact', path: '/#contact' }
  ];

  const handleNavClick = (path) => {
    setIsMenuOpen(false);
    if (path.includes('#')) {
      const element = document.querySelector(path.split('#')[1] ? `#${path.split('#')[1]}` : '');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "glass-nav py-3" 
          : "bg-transparent py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-tr from-purple-600/90 to-fuchsia-500/90 p-2 rounded-xl text-white shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
              
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">Sarbik</span>
              <span className="text-[10px] font-semibold text-purple-600 tracking-[0.2em] uppercase mt-0.5">Growth Agency & Co.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center bg-white/40 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/50 mr-4 shadow-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                    location.pathname === link.path || (location.pathname === '/' && link.path === '/') 
                      ? "bg-white/90 text-purple-700 shadow-sm font-bold" 
                      : "text-slate-600 hover:text-purple-600 hover:bg-white/50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <Button
              onClick={handleSignIn}
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:opacity-90 text-white rounded-full px-6 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:translate-y-[-1px]"
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 bg-white/40 backdrop-blur-sm rounded-full hover:bg-white/60 transition-all border border-white/40"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass-panel mx-4 mt-2 rounded-2xl overflow-hidden border-t border-white/50"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="text-base font-medium text-slate-600 hover:text-purple-600 hover:bg-white/50 px-4 py-3 rounded-xl transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent my-2"></div>
              <Button
                onClick={handleSignIn}
                className="bg-purple-600 hover:bg-purple-700 text-white w-full py-6 rounded-xl shadow-md"
              >
                Sign In
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;