"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

interface MobileSideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSideMenu({ isOpen, onClose }: MobileSideMenuProps) {
  const navItems = [
    { id: "sobre-mi-mobile", label: "Sobre Mí" },
    { id: "proyectos-mobile", label: "Proyectos" },
    { id: "habilidades-mobile", label: "Habilidades" },
    { id: "contacto-mobile", label: "Contacto" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calcular la posición exacta del elemento
      const elementRect = element.getBoundingClientRect();
      const elementTop = window.pageYOffset + elementRect.top;
      
      // Scroll suave al principio de cada sección
      window.scrollTo({
        top: elementTop - 80, // 80px de offset para el header
        behavior: 'smooth'
      });
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "spring", 
              damping: 30, 
              stiffness: 300,
              duration: 0.4 
            }}
            className="fixed top-0 right-0 h-full w-72 bg-black/80 backdrop-blur-xl border-l border-white/10 z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 className="text-xl font-bold text-white">Miguel Álvarez</h2>
                <p className="text-sm text-gray-400">Designer & Developer</p>
              </div>
              <motion.button
                onClick={onClose}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Navigation Items */}
            <div className="p-6 space-y-6">
              <AnimatePresence>
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left p-3 relative group flex items-center gap-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                    initial={{ opacity: 0, x: 400 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ 
                      x: 8,
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ 
                      scale: 0.98,
                      transition: { duration: 0.1 }
                    }}
                  >
                    <span className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300 relative">
                      {item.label}
                      <div className="absolute bottom-0 right-0 w-1/5 h-0.5 bg-blue-500 -mb-1"></div>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}