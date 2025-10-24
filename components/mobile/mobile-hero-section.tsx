"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Palette, Sparkles, Zap, MessageCircle, ArrowRight } from "lucide-react";

export function MobileHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const floatingElements = [
    { icon: Code, delay: 0, duration: 6 },
    { icon: Palette, delay: 2, duration: 8 },
    { icon: Sparkles, delay: 4, duration: 7 },
    { icon: Zap, delay: 1, duration: 9 },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      const elementRect = contactSection.getBoundingClientRect();
      const elementTop = window.pageYOffset + elementRect.top;
      
      window.scrollTo({
        top: elementTop - 80, // 80px de offset para el header
        behavior: 'smooth'
      });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('proyectos');
    if (projectsSection) {
      const elementRect = projectsSection.getBoundingClientRect();
      const elementTop = window.pageYOffset + elementRect.top;
      
      window.scrollTo({
        top: elementTop - 80, // 80px de offset para el header
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="inicio"
      className="relative h-[85vh] flex items-center justify-center overflow-hidden hero-gradient px-4"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
        
        {/* Floating Particles */}
        {floatingElements.map((element, index) => {
          const Icon = element.icon;
          return (
            <motion.div
              key={index}
              className="absolute text-blue-500/20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.6, 0.2, 0.8, 0],
                scale: [0, 1.2, 0.8, 1, 0],
                x: [0, 50, -25, 40, 0],
                y: [0, -50, 25, -40, 0],
              }}
              transition={{
                duration: element.duration,
                delay: element.delay,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${15 + index * 20}%`,
                top: `${25 + index * 15}%`,
              }}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-sm mx-auto text-center -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="space-y-6"
        >
          {/* Main Heading */}
          <div className="space-y-3">
            <motion.h1 
              className="text-4xl md:text-5xl font-black text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 1.0, 
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.span
                className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.7,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
              >
                Creo experiencias
              </motion.span>
              <motion.span
                className="block text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.9,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                digitales únicas.
              </motion.span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-lg text-gray-300 leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 1.0, 
              delay: 1.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Desde el concepto hasta el código, transformo ideas en realidades digitales que conectan, inspiran y generan resultados excepcionales.
          </motion.p>

          {/* CTA Buttons - Two rows like desktop */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ 
              duration: 1.0, 
              delay: 1.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {/* First Row - Ver Proyectos */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <Button
                onClick={scrollToProjects}
                size="sm"
                className="w-3/4 mx-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg group"
                data-cursor-magnetic
              >
                <Code className="w-4 h-4 mr-2 group-hover:animate-spin" />
                Ver Proyectos
              </Button>
            </motion.div>

            {/* Second Row - Cuéntame tu idea */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.7,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <Button
                onClick={scrollToContact}
                size="sm"
                className="w-3/4 mx-auto bg-transparent border border-white text-white hover:bg-white hover:text-black font-semibold transition-all duration-300 group"
                data-cursor-magnetic
              >
                <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Cuéntame tu idea
              </Button>
            </motion.div>
          </motion.div>


        </motion.div>
      </div>

      {/* Stats Container - Bottom centered */}
      <motion.div
        className="absolute bottom-4 left-0 right-0 z-30 flex justify-center px-4"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          delay: 2.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <motion.div 
          className="relative bg-black/70 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 2.5,
            ease: [0.34, 1.56, 0.64, 1]
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "10+", label: "Proyectos" },
              { number: "3+", label: "Años Exp." },
              { number: "100%", label: "Satisfacción" },
              { number: "24/7", label: "Disponible" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 2.7 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <motion.div 
                  className="text-lg font-bold text-white mb-1"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 2.9 + index * 0.1,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-xs text-gray-300 uppercase tracking-wide font-medium whitespace-nowrap">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Section Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 text-gray-50"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 L0,30 C80,18 160,42 240,15 C320,0 400,24 480,9 C560,0 640,18 720,6 C800,0 880,15 960,3 C1040,0 1120,9 1200,6 L1200,60 Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      </div>
    </section>
  );
}