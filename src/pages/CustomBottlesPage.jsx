import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import BottlesHero from '@/components/bottles/BottlesHero';
import BenefitsSection from '@/components/bottles/BenefitsSection';
import ProductCatalog from '@/components/bottles/ProductCatalog';
import BottlesContactForm from '@/components/bottles/BottlesContactForm';

const CustomBottlesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-hidden"
    >
      <Helmet>
        <title>Custom Water Bottles - Sarbik Growth Agency & Co.</title>
        <meta
          name="description"
          content="Premium customized water bottles for business branding. Choose from plastic, metal, or glass bottles with your company logo and design."
        />
      </Helmet>
      <main>
        <BottlesHero />
        <BenefitsSection />
        <ProductCatalog />
        <BottlesContactForm />
      </main>
    </motion.div>
  );
};

export default CustomBottlesPage;