import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Sparkles, TrendingUp } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Premium Materials',
      description: 'High-grade BPA-free Plastics and Premium Shape with Uncompromised taste clarity..',
    },
    {
      icon: Users,
      title: 'Visible Branding',
      description: 'Your brand travels everywhere - clear visibility in offices and gyms.espacially designed for pure Marketing and Brand Promotion.',
    },
    {
      icon: Sparkles,
      title: 'Custom Etching',
      description: 'Precision laser etching for a sophisticated, permanent finish.',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable ROI',
      description: 'Eco-friendly marketing that provides value for years, not moments.',
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Exceptional quality that reflects the premium nature of your brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl text-center group hover:bg-white/70 border-white/60"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-sm font-normal leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;