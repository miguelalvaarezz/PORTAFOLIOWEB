"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function MobileFooter() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { id: "sobre-mi-mobile", label: "Sobre Mí" },
    { id: "proyectos-mobile", label: "Proyectos" },
    { id: "habilidades-mobile", label: "Habilidades" },
    { id: "contacto-mobile", label: "Contacto" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementTop = element.offsetTop;
      window.scrollTo({
        top: elementTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Ultra minimal background */}
      <div className="absolute inset-0 opacity-1">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-sm mx-auto px-6 py-6">
        
        {/* Ultra Minimal Brand */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 flex items-center justify-center border border-blue-500 rounded-lg">
              <span className="text-lg font-bold text-blue-500">M</span>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-xl font-semibold text-white">Miguel</span>
              <span className="text-xl font-light text-gray-400">Álvarez</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Ultra Minimal Navigation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
        >
          <div className="space-y-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full flex items-center justify-between py-3 px-0 text-left group relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 1.0 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ x: 8, scale: 1.02, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 relative">
                  {item.label}
                  {/* Static blue underline */}
                  <div className="absolute bottom-0 left-0 w-1/5 h-px bg-blue-500 -mb-1"></div>
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300 opacity-60 group-hover:opacity-100" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Ultra Minimal Contact */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            {[
              { text: "Lanzarote, España" },
              { text: "+34 695 537 321" },
              { text: "miguelalvaarezz@gmail.com" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 1.4 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
              >
                <span className="text-xs text-gray-500 font-light tracking-wide">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ultra Minimal Copyright */}
        <motion.div
          className="text-center pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-xs text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
          >
            © {currentYear} Miguel Álvarez. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}