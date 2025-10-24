"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2, Award, Zap } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  const highlights = [
    { text: "Fast & efficient delivery", color: "bg-green-500" },
    { text: "Clean, maintainable code", color: "bg-orange-500" },
    { text: "Modern tech stack", color: "bg-purple-500" }
  ];

  return (
    <section 
      id="sobre-mi" 
      ref={sectionRef}
      className="relative bg-gray-50 pt-20 pb-32 overflow-hidden"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-blue-600 text-xs font-light tracking-[0.3em] uppercase">
            01 About
          </span>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start mb-16 md:mb-20">
          
          {/* Left: Photo + Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
            transition={{ 
              duration: 1.0, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="lg:col-span-4 space-y-4 md:space-y-6 order-2 lg:order-1"
          >
            {/* Photo */}
            <motion.div 
              className="relative flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <div className="relative aspect-square w-48 sm:w-56 md:w-64 lg:max-w-[280px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden">
                <Image
                  src="/miguelalvarez.webp"
                  alt="Miguel Álvarez - Diseñador y Desarrollador Web"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Subtle accent */}
              <motion.div 
                className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-blue-600/10 rounded-2xl -z-10"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
              />
            </motion.div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.0,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full mx-auto lg:mx-0"
            >
              <motion.div 
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-sm text-gray-600 font-medium">Available for work</span>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
            transition={{ 
              duration: 1.0, 
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="lg:col-span-8 space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            {/* Title */}
            <motion.div 
              className="space-y-3 md:space-y-4 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                Miguel Álvarez
              </motion.h2>
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.0,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                Designer & Developer
              </motion.p>
            </motion.div>
            
            {/* Bio */}
            <motion.p 
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
              transition={{ 
                duration: 1.0, 
                delay: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Soy un diseñador y desarrollador web autodidacta de 17 años, con más de 3 años de experiencia creando experiencias web vanguardistas, inmersivas y cuidadosamente diseñadas para destacar. <strong>Considero el diseño web como una forma de arte digital:</strong> cada proyecto es una oportunidad para reflejar la identidad, los valores y la esencia de cada empresa. No creo en las páginas genéricas ni en las plantillas. <strong>Creo en diseños hechos desde cero, pensados para aumentar el valor percibido de las marcas y convertir visitantes en clientes reales.</strong> Mi objetivo es simple: transformar ideas en experiencias digitales completas que lleven la experiencia del cliente al siguiente nivel.
            </motion.p>

            {/* Highlights */}
            <motion.div 
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.6 + i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="w-full sm:w-1/2 space-y-2 mx-auto lg:mx-0 lg:ml-4"
                >
                  <div className="text-center lg:text-right">
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </div>
                  <motion.div 
                    className={`w-full h-1 ${item.color} rounded-full`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 1.8 + i * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    style={{ originX: 0 }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
              transition={{ 
                duration: 0.8, 
                delay: 2.0,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              className="pt-4 flex justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
                  size="lg"
                  data-cursor-magnetic
                  className="group bg-blue-600 hover:bg-blue-700 text-white font-medium h-12 px-6"
                >
                  Let's work together
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Section Transition - Inverted */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20 text-blue-800"
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
