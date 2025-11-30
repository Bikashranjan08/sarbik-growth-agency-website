import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-44 pb-24 lg:min-h-screen flex items-center overflow-hidden">
      {/* Glass Blobs Background - Adjusted for Pale Purple */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-200/40 blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-20%] w-[700px] h-[700px] rounded-full bg-fuchsia-200/40 blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-purple-200/60"
            >
              <Sparkles size={16} className="text-purple-500" />
              <span className="text-sm font-medium text-slate-700">Refining Your Digital Presence</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Accelerate Your <br />
              <span className="text-gradient">Business Potential</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We craft crystal-clear strategies and transparent branding solutions designed to elevate your business through data-driven clarity.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToServices}
                className="h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white text-lg font-medium rounded-full shadow-xl shadow-slate-900/20 hover:translate-y-[-2px] transition-all duration-300 group"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-14 px-8 glass-button text-slate-800 rounded-full text-lg hover:text-purple-700 transition-all duration-300 border-purple-200"
              >
                Get a Quote
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-purple-200/50 pt-8 max-w-lg mx-auto lg:mx-0">
              {[
                { label: 'Client Satisfaction', value: '98%' },
                { label: 'Growth Rate', value: '2.5x' },
                { label: 'Projects Delivered', value: '500+' }
              ].map((stat, idx) => (
                <div key={idx}>
                  <h4 className="text-2xl font-bold text-slate-900">{stat.value}</h4>
                  <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="flex-1 relative w-full max-w-lg lg:max-w-xl"
          >
            {/* Main Glass Card Image Container */}
            <div className="relative z-10 rounded-[2rem] p-3 glass-panel border-white/70">
              <div className="relative rounded-[1.5rem] overflow-hidden">
                <img 
                  alt="Modern office aesthetics" 
                  className="w-full h-auto object-cover" 
                  src="https://sunwisecapital.com/wp-content/uploads/2019/11/ChatGPT-Image-May-14-2025-11_08_14-AM-1024x683.webp" 
                />
                
                {/* Floating Glass Element */}
                <motion.div 
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-2xl border-white/80"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Performance</p>
                      <h3 className="text-xl font-bold text-slate-900">Scale with Clarity</h3>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Decorative Background Elements - Adjusted colors */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-purple-400 to-fuchsia-300 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-300 rounded-full blur-2xl opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;