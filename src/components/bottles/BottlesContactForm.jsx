import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Send, ClipboardList } from 'lucide-react';

const BottlesContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Request Received",
      description: "We'll be in touch with your quote shortly."
    });
    setFormData({ name: '', businessName: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-200/30 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600">
            <ClipboardList size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Request Quote
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            Transparent pricing for bulk orders.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-panel rounded-[2.5rem] p-8 md:p-12 border-white/70"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="group">
              <label className="block text-xs font-bold text-slate-600 uppercase mb-2 ml-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 glass-input rounded-xl text-slate-900 placeholder:text-slate-500"
                placeholder="Your Name"
              />
            </div>

            <div className="group">
              <label className="block text-xs font-bold text-slate-600 uppercase mb-2 ml-1">Business</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 glass-input rounded-xl text-slate-900 placeholder:text-slate-500"
                placeholder="Company Ltd."
              />
            </div>
          </div>

          <div className="mb-6 group">
            <label className="block text-xs font-bold text-slate-600 uppercase mb-2 ml-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 glass-input rounded-xl text-slate-900 placeholder:text-slate-500"
              placeholder="email@company.com"
            />
          </div>

          <div className="mb-8 group">
            <label className="block text-xs font-bold text-slate-600 uppercase mb-2 ml-1">Details</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-5 py-4 glass-input rounded-xl text-slate-900 placeholder:text-slate-500 resize-none"
              placeholder="Quantity, deadline, and requirements..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white text-lg font-medium rounded-xl shadow-lg shadow-slate-900/10 transition-all"
          >
            {isSubmitting ? "Processing..." : "Submit Request"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default BottlesContactForm;