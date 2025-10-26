"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavigationProps {
  onMenuToggle: (isOpen: boolean) => void;
  isMenuOpen: boolean;
}

export function MobileNavigation({ onMenuToggle, isMenuOpen }: MobileNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { sectionId: "sobre-mi-mobile", label: "Sobre Mí" },
    { sectionId: "proyectos-mobile", label: "Proyectos" },
    { sectionId: "habilidades-mobile", label: "Habilidades" },
    { sectionId: "contacto-mobile", label: "Contacto" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Special handling for habilidades section - center the section in viewport
      if (sectionId === 'habilidades-mobile') {
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
    onMenuToggle(false); // Close mobile menu
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-black/20' 
          : 'backdrop-blur-sm bg-black/10'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-sm mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            {/* Inicial */}
            <div className="w-8 h-8 flex items-center justify-center border-2 border-blue-500 rounded group-hover:border-blue-400 transition-colors duration-300">
              <span className="text-lg font-bold text-blue-500 group-hover:text-blue-400 transition-colors duration-300">
                M
              </span>
            </div>

            {/* Nombre */}
            <div className="flex items-baseline space-x-1">
              <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                Miguel
              </span>
              <span className="text-lg font-light text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Álvarez
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => {
              onMenuToggle(!isMenuOpen);
            }}
            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

    </motion.nav>
  );
}