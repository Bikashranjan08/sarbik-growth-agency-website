import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Palette, Megaphone, BarChart3, Target, Zap, ArrowUpRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Marketing Strategy',
      description: 'Data-driven strategies that provide a clear path to measurable growth.',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Palette,
      title: 'Brand Design',
      description: 'Clean, minimalist visual identities that cut through the noise.',
      color: 'text-fuchsia-600 bg-fuchsia-100'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Transparent campaigns across all major platforms with real-time reporting.',
      color: 'text-violet-600 bg-violet-100'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Crystal clear insights derived from your raw business data.',
      color: 'text-amber-600 bg-amber-100'
    },
    {
      icon: Target,
      title: 'SEO Optimization',
      description: 'Organic visibility that helps your customers find you effortlessly.',
      color: 'text-rose-600 bg-rose-100'
    },
    {
      icon: Zap,
      title: 'Growth Consulting',
      description: 'Expert guidance to remove friction and accelerate your operations.',
      color: 'text-indigo-600 bg-indigo-100'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="services" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-purple-600 font-bold tracking-widest text-xs uppercase mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Transparent Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            We believe in clarity. Our services are designed to provide clear, actionable results without the jargon.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ y: -5 }}
              className="glass-card rounded-3xl p-8 relative group overflow-hidden border-white/60"
            >
              {/* Gradient Hover Overlay - Adjusted for Pale Purple */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 ${service.color.split(' ')[1]}`}>
                  <service.icon size={26} className={service.color.split(' ')[0]} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6 text-sm font-normal">
                  {service.description}
                </p>

                <div className="flex items-center text-sm font-medium text-purple-600 opacity-80 group-hover:opacity-100 transition-all duration-300">
                  Details <ArrowUpRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;