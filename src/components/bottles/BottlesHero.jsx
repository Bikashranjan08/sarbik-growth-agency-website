import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Star } from 'lucide-react';

const BottlesHero = () => {
  return (
    <section className="relative pt-40 pb-24 lg:min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-50/30 to-white/0 -z-20"></div>
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-fuchsia-100/40 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-purple-200/50">
              <Droplet size={16} className="text-purple-500 fill-purple-500/20" />
              <span className="text-sm font-bold text-slate-700">Premium Hydration</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Custom Bottles <br />
              <span className="text-gradient">Pure Branding</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Crystal clear branding on premium sustainable materials. Make a lasting impression with every sip.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-slate-500">
              <div className="flex items-center gap-2 glass-panel px-4 py-2 rounded-full">
                <Star size={16} className="text-amber-400 fill-amber-400" />
                <span className="font-medium text-slate-700 text-sm">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 glass-panel px-4 py-2 rounded-full">
                <Star size={16} className="text-amber-400 fill-amber-400" />
                <span className="font-medium text-slate-700 text-sm">Bulk Options</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative perspective-1000"
          >
            <div className="relative z-10 rounded-[2.5rem] p-2 glass-panel rotate-[-2deg] hover:rotate-0 transition-transform duration-500 border-white/70">
              <div className="rounded-[2rem] overflow-hidden relative">
                <img alt="Minimalist water bottle" className="w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/4e64438f-23cf-4a78-bf65-d834a9df2ecb/custom-label-water-bottles-pasco-wa-HPIfI.png" />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BottlesHero;