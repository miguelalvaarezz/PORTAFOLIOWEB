"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Palette, Sparkles, Zap, MessageCircle, Award } from "lucide-react";
import Image from "next/image";

export function MobileHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 });
  const [hasTouched, setHasTouched] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setHasTouched(true);
        const touch = e.touches[0];
        setTouchPosition({ x: touch.clientX, y: touch.clientY });
      }
    };

    window.addEventListener("touchmove", handleTouchMove);
    return () => window.removeEventListener("touchmove", handleTouchMove);
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
      contactSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('proyectos');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <section 
      id="inicio-mobile"
      className="relative h-[85vh] flex items-center justify-center overflow-hidden hero-gradient px-4"
    >
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
        {(() => {
          const defaultX = typeof window !== 'undefined' ? window.innerWidth * 0.5 : 200;
          const defaultY = typeof window !== 'undefined' ? window.innerHeight * 0.4 : 300;
          
          const revealX = hasTouched ? (defaultX + (touchPosition.x - defaultX) * 0.3) : defaultX;
          const revealY = hasTouched ? (defaultY + (touchPosition.y - defaultY) * 0.3) : defaultY;
          
          const distanceX = hasTouched ? Math.abs(touchPosition.x - defaultX) : 0;
          const distanceY = hasTouched ? Math.abs(touchPosition.y - defaultY) : 0;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          const baseSize = hasTouched ? (600 + (distance * 0.5)) : 800;
          const revealSize = baseSize;
          
          return (
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle ${revealSize}px at ${revealX}px ${revealY}px, transparent 15%, rgba(0,0,0,0.95) 45%)`,
                transition: 'background 0.4s ease-out',
              }}
            />
          );
        })()}
        
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
      <div className="relative z-10 w-full max-w-sm mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ 
            duration: 1.0, 
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="space-y-6"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/30 rounded-full backdrop-blur-sm"
          >
            <Award className="w-4 h-4 text-white" />
            <span className="text-xs text-white font-medium">
              Especializados en webs para clubes de pádel
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-3">
            <motion.h1 
              className="text-[28px] sm:text-4xl font-black text-white leading-tight"
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
                  className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent"
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
                con una web atractiva, <span className="text-[#D6E826]">reservas automáticas</span>
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
                y torneos online.
              </motion.span>
            </motion.h1>
          </div>


          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col gap-3 pt-4 max-w-[85%] mx-auto w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.7,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-2xl group w-full rounded-2xl"
            >
              <Code className="w-5 h-5 mr-2 group-hover:animate-spin" />
              Transformación 360º
            </Button>
            <Button 
              onClick={() => {
                const message = encodeURIComponent('Buenas Miguel, me interesa conocer cómo podría transformar mi club de pádel con una web moderna, con reservas automáticas y torneos online.\n¿Podríamos agendar una demo gratuita para verlo en acción?\n¡Gracias!');
                window.open(`https://wa.me/34695537321?text=${message}`, '_blank');
              }}
              size="lg"
              className="bg-transparent border border-white text-white hover:bg-white hover:text-black font-semibold transition-all duration-300 group w-full rounded-2xl"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Solicita tu demo gratuita
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Container - Bottom centered */}
      <motion.div
        className="absolute bottom-2 left-0 right-0 z-30 flex justify-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.0, 
          delay: 1.9,
          ease: [0.23, 1, 0.32, 1]
        }}
      >
        <motion.div 
          className="relative bg-black/70 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.9, 
            delay: 2.1,
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
                  delay: 2.3 + index * 0.15,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <motion.div 
                  className="text-lg font-bold text-white mb-1"
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
                <div className="text-xs text-gray-300 uppercase tracking-wide font-medium whitespace-nowrap">
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