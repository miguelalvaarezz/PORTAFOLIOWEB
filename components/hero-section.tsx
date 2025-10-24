"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Palette, Sparkles, Zap, MessageCircle } from "lucide-react";
import { Navigation } from "@/components/navigation";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingElements = [
    { icon: Code, delay: 0, duration: 6 },
    { icon: Palette, delay: 2, duration: 8 },
    { icon: Sparkles, delay: 4, duration: 7 },
    { icon: Zap, delay: 1, duration: 9 },
  ];

  return (
    <section 
      id="inicio"
      className="relative h-[90vh] flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Navigation anclada al Hero */}
      <Navigation />
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
                x: [0, 100, -50, 80, 0],
                y: [0, -100, 50, -80, 0],
              }}
              transition={{
                duration: element.duration,
                delay: element.delay,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${20 + index * 20}%`,
                top: `${30 + index * 15}%`,
              }}
            >
              <Icon className="w-8 h-8" />
            </motion.div>
          );
        })}

        {/* Interactive Glow Effect */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-3 md:space-y-4">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight px-4 md:px-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.0, 
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                Diseñador{" "}
                <motion.span 
                  className="gradient-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.9,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                >
                  Gráfico
                </motion.span>
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                & Desarrollador Web
              </motion.span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-6 md:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.0, 
              delay: 1.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Creo experiencias digitales excepcionales que combinan diseño innovador 
            con tecnología de vanguardia para dar vida a tus ideas más ambiciosas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.0, 
              delay: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Button 
              onClick={() => {
                const projectsElement = document.getElementById('proyectos');
                if (projectsElement) {
                  projectsElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                  });
                }
              }}
              variant="glow" 
              size="xl"
              data-cursor-magnetic
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-2xl group"
            >
              <Code className="w-5 h-5 mr-2 group-hover:animate-spin" />
              Ver Proyectos
            </Button>
            <Button 
              onClick={() => {
                const contactElement = document.getElementById('contacto');
                if (contactElement) {
                  contactElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                  });
                }
              }}
              size="xl"
              data-cursor-magnetic
              className="bg-transparent border border-white text-white hover:bg-white hover:text-black font-semibold transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Cuéntame tu idea
            </Button>
          </motion.div>

        </motion.div>
      </div>

      {/* Stats Container - Bottom centered */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-30 flex justify-center px-4"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          delay: 1.7,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <motion.div 
          className="relative bg-black/70 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl px-4 sm:px-8 md:px-12 py-4 sm:py-6 overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.9,
            ease: [0.34, 1.56, 0.64, 1]
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 md:gap-12">
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
                  delay: 2.1 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <motion.div 
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 2.3 + index * 0.1,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-xs sm:text-xs text-gray-300 uppercase tracking-wide font-medium whitespace-nowrap">
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
          className="w-full h-20 text-gray-50"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 L0,50 C80,30 160,70 240,25 C320,0 400,40 480,15 C560,0 640,30 720,10 C800,0 880,25 960,5 C1040,0 1120,15 1200,10 L1200,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
