import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
const FeaturedSection = () => {
  return <section className="py-32 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="relative rounded-[2.5rem] overflow-hidden glass-panel p-1 border-purple-200">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-fuchsia-50/50 backdrop-blur-md z-0"></div>
          
          <div className="relative z-10 bg-white/40 rounded-[2.2rem] overflow-hidden flex flex-col lg:flex-row">
            {/* Content Side */}
            <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
                <div className="inline-flex items-center gap-2 bg-white/60 border border-white/60 px-4 py-1.5 rounded-full mb-8 shadow-sm">
                  <Sparkles size={14} className="text-purple-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-slate-700">Premium Selection</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                  Custom Bottles <br />
                  <span className="text-gradient">Refined Branding</span>
                </h2>
                
                <p className="text-lg text-slate-700 mb-10 max-w-lg leading-relaxed font-normal">
                  Elevate your brand presence with our premium collection of sustainable custom water bottles. A perfect blend of utility and aesthetic.
                </p>
                
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">
                  {['Standard & Premium Options', 'Precision Printing', 'Premium Insulation', 'Eco-Conscious'].map((item, i) => <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center border border-purple-200">
                        <Check size={12} className="text-purple-700" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>)}
                </div>
                
                <Link to="/custom-bottles">
                  <Button className="h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white text-lg font-medium rounded-full shadow-xl shadow-slate-900/10 transition-all duration-300 group hover:scale-105">
                    View Collection
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            {/* Image Side */}
            <motion.div initial={{
            opacity: 0,
            scale: 1.1
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 1,
            delay: 0.2
          }} className="flex-1 h-[500px] lg:h-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent z-10"></div>
              <img alt="Minimalist water bottle" className="w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/4e64438f-23cf-4a78-bf65-d834a9df2ecb/custom-label-water-bottles-pasco-wa-HPIfI.png" />
              
              {/* Floating Tag */}
              <div className="absolute bottom-8 right-8 z-20 glass-panel px-6 py-3 rounded-2xl border-white/70">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Starting at</p>
                <p className="text-2xl font-bold text-slate-900"> ₹120/- Only</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default FeaturedSection;