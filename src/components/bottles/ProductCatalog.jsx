import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Check, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductCatalog = () => {
  const products = [
    {
      id: 1,
      name: 'Pack of 12',
      material: 'Standard Quality',
      price: '₹120',
      description: 'Lightweight, BPA-free clarity.',
      features: ['1L Capacity', 'BPA-free', 'Leak-proof'],
      image: 'https://apnalabel.in/assets/images/demo2.jpeg',
      tag: 'Best Value'
    },
    {
      id: 2,
      name: 'Pack of 24',
      material: 'Standard Quality',
      price: 'out of stock',
      description: 'Lightweight, BPA-free clarity.',
      features: ['500ml', 'BPA-free', 'Leak-proof'],
      image: 'https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      name: 'Pack of 30',
      material: 'Standard Quality',
      price: '₹180',
      description: 'Lightweight, BPA-free clarity.',
      features: ['300ml', 'BPA-free', 'Leak-proof'],
      image: 'https://5.imimg.com/data5/IOS/Default/2023/8/337851892/AM/OF/IR/185139678/product-jpeg.png',
      tag: 'Popular'
    },
    {
      id: 4,
      name: 'Pack of 24',
      material: 'Pro Series',
      price: 'Out of stock',
      description: 'Premium Shape with Uncompromised taste clarity.',
      features: ['1L Capacity', 'BPA-free', 'Leak-proof'],
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/3/403855725/NI/AR/NA/6785846/customized-packaged-drinking-water-bottle-250x250.jpeg'
      ,tag: 'Luxury' 
    },
    {
      id: 5,
      name: 'Pack of 12',
      material: 'Pro Series',
      price: '₹159',
      description: 'Premium Shape with Uncompromised taste clarity.',
      features: ['500ml', 'BPA-free', 'Leak-proof'],
      image: 'https://5.imimg.com/data5/IOS/Default/2025/10/554246508/JN/BF/IO/95089985/product-jpeg-500x500.jpeg',
      tag: 'Best Seller'
    },
    {
      id: 6,
      name: 'Pack of 30',
      material: 'Pro Series',
      price: '₹211',
      description: 'Premium Shape with Uncompromised taste clarity.',
      features: ['750ml', 'BPA-free', 'Leak-proof'],
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/HM/CL/RE/95089985/img-20230110-wa0061-500x500.jpg',
      tag: 'New'
    }
  ];

  const handleWhatsAppOrder = (productName) => {
    window.open(`https://wa.me/?text=Interested in ${productName}`, '_blank');
  };

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
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            The Collection
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            Select your canvas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full border-white/60"
            >
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <img 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  src={product.image} 
                />
                
                <div className="absolute top-4 left-4">
                  <span className="glass-panel px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-700">
                    {product.material}
                  </span>
                </div>
                
                {product.tag && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-slate-900 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
                      {product.tag}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow bg-white/40 backdrop-blur-sm">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {product.name}
                  </h3>
                  <span className="text-lg font-bold text-purple-600">
                    {product.price}
                  </span>
                </div>
                
                <p className="text-slate-600 text-sm mb-6 font-normal">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-8 flex-grow">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs font-medium text-slate-600">
                      <div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center mr-2 text-purple-600">
                        <Plus size={10} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button
                  onClick={() => handleWhatsAppOrder(product.name)}
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-medium rounded-xl shadow-sm hover:shadow-green-500/20 transition-all"
                >
                  <MessageCircle className="mr-2" size={18} />
                  Order Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;