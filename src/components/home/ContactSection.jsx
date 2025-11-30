import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "We'll be in touch shortly."
    });
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-purple-600 font-bold tracking-widest text-xs uppercase mb-4 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Let's Create Something <br />
              <span className="text-gradient">Remarkable</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed font-normal">
              Ready to clarify your vision? Reach out for a consultation and let's discuss how we can accelerate your growth with transparency.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "info@sarbikgrowthagency.com" },
                { icon: Phone, title: "Phone", value: "+91 7008660169 , +916370098590" },
                { icon: MapPin, title: "Office", value: "Berhampur,Odisha" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group glass-card p-4 rounded-2xl border-0 bg-white/50 hover:bg-white/70">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.title}</h4>
                    <p className="text-slate-800 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 rounded-[2rem] relative border-white/70"
          >
            {/* Decorative Gradient Behind Form */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-xs font-bold text-slate-600 uppercase mb-2 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 glass-input rounded-xl text-slate-900 placeholder:text-slate-400"
                  placeholder="e.g. Alex Smith"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-xs font-bold text-slate-600 uppercase mb-2 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 glass-input rounded-xl text-slate-900 placeholder:text-slate-400"
                  placeholder="e.g. alex@gmail.com"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-xs font-bold text-slate-600 uppercase mb-2 ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-4 glass-input rounded-xl text-slate-900 placeholder:text-slate-400 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:opacity-90 text-white text-lg font-medium rounded-xl shadow-lg shadow-purple-500/20 transition-all duration-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">Processing...</span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message <Send size={18} />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;