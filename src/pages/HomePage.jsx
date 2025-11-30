import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturedSection from '@/components/home/FeaturedSection';
import ContactSection from '@/components/home/ContactSection';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-hidden"
    >
      <Helmet>
        <title>Sarbik Growth Agency & Co. - Accelerating Your Business Potential</title>
        <meta
          name="description"
          content="Transform your business with Sarbik Growth Agency. We offer marketing strategy, branding, custom water bottles, and digital solutions to accelerate your growth."
        />
      </Helmet>
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturedSection />
        <ContactSection />
      </main>
    </motion.div>
  );
};

export default HomePage;