"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { sectionId: "sobre-mi", label: "Sobre Mí" },
    { sectionId: "proyectos", label: "Proyectos" },
    { sectionId: "habilidades", label: "Habilidades" },
    { sectionId: "contacto", label: "Contacto" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Special handling for habilidades section - center the section in viewport
      if (sectionId === 'habilidades') {
        const rect = element.getBoundingClientRect();
        const elementTop = window.pageYOffset + rect.top;
        const elementHeight = rect.height;
        const viewportHeight = window.innerHeight;
        const scrollPosition = elementTop - (viewportHeight - elementHeight) / 2;
        
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      } else {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    setIsOpen(false); // Close mobile menu
  };

  return (
    <motion.nav
      className="absolute top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Inicial */}
            <div className="w-10 h-10 flex items-center justify-center border-2 border-blue-500 rounded group-hover:border-blue-400 transition-colors duration-300">
              <span className="text-xl font-bold text-blue-500 group-hover:text-blue-400 transition-colors duration-300">
                M
              </span>
            </div>

            {/* Nombre */}
            <div className="flex items-baseline space-x-2">
              <span className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                Miguel
              </span>
              <span className="text-xl font-light text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Álvarez
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('proyectos')}
              variant="glow" 
              size="lg"
              data-cursor-magnetic
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              <Palette className="w-4 h-4 mr-2" />
              Ver Trabajo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="md:hidden glass-effect backdrop-blur-md bg-black/60 border-t border-white/10"
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              height: "auto", 
              y: 0 
            }}
            exit={{ 
              opacity: 0, 
              height: 0, 
              y: -20 
            }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94],
              height: { duration: 0.3, ease: "easeInOut" }
            }}
          >
            <motion.div 
              className="px-6 py-8 space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.sectionId}
                  initial={{ opacity: 0, x: -40, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    delay: index * 0.08, 
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <motion.button
                    onClick={() => scrollToSection(item.sectionId)}
                    className="block text-gray-300 hover:text-white transition-all duration-300 py-3 w-full text-left text-lg font-medium"
                    whileHover={{ 
                      x: 8, 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -40, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  delay: navItems.length * 0.08, 
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="pt-6"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    onClick={() => scrollToSection('proyectos')}
                    variant="glow" 
                    size="lg"
                    data-cursor-magnetic
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 h-12 text-base font-semibold"
                  >
                    <Palette className="w-5 h-5 mr-2" />
                    Ver Trabajo
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
