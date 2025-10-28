"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Palette, Sparkles, Zap, MessageCircle, Award } from "lucide-react";
import { Navigation } from "@/components/navigation";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasMouseMoved, setHasMouseMoved] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setHasMouseMoved(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate reveal position - start fixed in center area, expand with cursor
  const defaultX = typeof window !== 'undefined' ? window.innerWidth * 0.35 : 800;
  const defaultY = typeof window !== 'undefined' ? window.innerHeight * 0.5 : 400;
  
  // Use default position until mouse has moved
  const revealX = hasMouseMoved ? (defaultX + (mousePosition.x - defaultX) * 0.3) : defaultX;
  const revealY = hasMouseMoved ? (defaultY + (mousePosition.y - defaultY) * 0.3) : defaultY;
  
  // Calculate distance from center to determine reveal size
  const distanceX = hasMouseMoved ? Math.abs(mousePosition.x - defaultX) : 0;
  const distanceY = hasMouseMoved ? Math.abs(mousePosition.y - defaultY) : 0;
  const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  // Start with elliptical shape (wider horizontally)
  const baseSize = hasMouseMoved ? (800 + (distance * 0.5)) : 1000;
  const revealSize = baseSize; // Expand based on distance

  const floatingElements = [
    { icon: Code, delay: 0, duration: 6 },
    { icon: Palette, delay: 2, duration: 8 },
    { icon: Sparkles, delay: 4, duration: 7 },
    { icon: Zap, delay: 1, duration: 9 },
  ];

  return (
    <section 
      id="inicio"
      className="relative h-[95vh] flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Logo - Desktop only */}
      <div className="absolute top-8 left-8 z-50 hidden lg:block">
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
      </div>
      
      {/* Navigation - Mobile only */}
      <div className="lg:hidden">
        <Navigation />
      </div>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
        
        {/* Background Image with Subtle Reveal Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/padel-hero.webp"
            alt="Padel Background"
            fill
            className="object-cover opacity-60"
            priority
            quality={90}
          />
        </div>
        
        {/* Mask for reveal effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle ${revealSize}px at ${revealX}px ${revealY}px, transparent 15%, rgba(0,0,0,0.95) 45%)`,
            transition: 'background 0.4s ease-out',
          }}
        />
        
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
      <div className="relative z-10 flex items-start justify-between gap-16 max-w-7xl mx-auto px-8 lg:px-16">
        {/* Left - Text content */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.0, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="space-y-8 -mt-12 lg:-mt-20"
          >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.7, 
              delay: 0.4,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm"
          >
            <Award className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">
              Especializado en presencia digital para clubes de pádel
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-3 md:space-y-4">
            <motion.h1 
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.9, 
                delay: 0.6,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.85,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                Transforma tu{" "}
                <motion.span 
                  className="gradient-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 1.05,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                >
                  club de pádel
                </motion.span>
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.15,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                con una web atractiva, reservas
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.3,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                automáticas y torneos online.
              </motion.span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.5,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <strong>Aumenta tus reservas, ahorra tiempo de gestión y destaca</strong> frente a otros clubes con una web personalizada y totalmente optimizada.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-start pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.7,
              ease: [0.23, 1, 0.32, 1]
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
              Ver demo gratuita
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
              Agenda una llamada
            </Button>
          </motion.div>

        </motion.div>
      </div>

      {/* Right - Small Padel Image */}
      <div className="hidden lg:flex items-start -mt-4 flex-shrink-0 pl-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.0, 
            delay: 1.4,
            ease: [0.34, 1.56, 0.64, 1]
          }}
        >
          <Image
            src="/padel.png"
            alt="Padel"
            width={400}
            height={400}
            className="w-64 h-64 object-contain opacity-[0.65]"
            unoptimized
          />
        </motion.div>
      </div>
      </div>

      {/* Stats Container - Bottom centered */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-30 flex justify-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.0, 
          delay: 1.9,
          ease: [0.23, 1, 0.32, 1]
        }}
      >
        <motion.div 
          className="relative bg-black/70 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl px-4 sm:px-8 md:px-12 py-4 sm:py-6 overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.9, 
            delay: 2.1,
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
                  delay: 2.3 + index * 0.15,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <motion.div 
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1"
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 2.5 + index * 0.15,
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
      <div className="absolute -bottom-3 left-0 right-0">
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
