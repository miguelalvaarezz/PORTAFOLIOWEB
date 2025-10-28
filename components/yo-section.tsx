"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2, Award, Zap, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export function YoSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });
  const [isExpanded, setIsExpanded] = useState(false);

  const highlights = [
    { text: "Fast & efficient delivery", color: "bg-green-500" },
    { text: "Clean, maintainable code", color: "bg-orange-500" },
    { text: "Modern tech stack", color: "bg-purple-500" }
  ];

  return (
    <section 
      id="yo" 
      ref={sectionRef}
      className="relative bg-gray-50 pb-10 overflow-hidden -mt-20"
    >
      {/* Diagonal transition from previous section */}
      <div className="absolute -top-0.5 -left-0 right-0 w-screen overflow-hidden z-50">
        <svg
          className="w-full h-40"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          style={{ maxWidth: '100vw' }}
        >
          <path
            d="M0,0 L1200,0 L1200,200 C1000,194 800,188 600,175 C400,150 200,100 0,0 Z"
            fill="#0f1f3a"
          />
        </svg>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/pistapadel.jpg"
          alt="Background"
          fill
          className="object-cover opacity-5"
          quality={90}
        />
      </div>

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

      <div className="relative max-w-6xl mx-auto px-6 mt-52">
        
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-blue-600 text-xs font-light tracking-[0.3em] uppercase">
            05 ABOUT ME
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
              className="relative flex flex-col items-center lg:items-end"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <div className="relative aspect-square w-48 sm:w-56 md:w-64 lg:max-w-[280px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden mb-3">
                <Image
                  src="/miguelalvarez.webp"
                  alt="Miguel Álvarez - Diseñador y Desarrollador Web"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.0,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full mt-4 lg:mt-0"
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
                Miguel <span className="text-[#D6E826]">Álvarez</span>
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
            <div className="max-w-2xl mx-auto lg:mx-0 mb-6">
              <div className="relative">
                <motion.p 
                  className={`text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-justify transition-all duration-300 ${isExpanded ? '' : 'line-clamp-4'}`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ 
                    duration: 1.2,
                    delay: 1.2,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                >
                  Soy un diseñador y desarrollador web autodidacta de 18 años, con más de 3 años de experiencia creando experiencias web vanguardistas, inmersivas y cuidadosamente diseñadas para destacar. <strong>Considero el diseño web como una forma de arte digital:</strong> cada proyecto es una oportunidad para reflejar la identidad, los valores y la esencia de cada empresa. No creo en las páginas genéricas ni en las plantillas. <strong>Creo en diseños hechos desde cero, pensados para aumentar el valor percibido de las marcas y convertir visitantes en clientes reales.</strong> Mi objetivo es simple: transformar ideas en experiencias digitales completas que lleven la experiencia del cliente al siguiente nivel.
                </motion.p>
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 via-gray-50/20 to-transparent pointer-events-none" />
                )}
              </div>
              {!isExpanded ? (
                <div className="flex justify-center pt-4">
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </button>
                </div>
              ) : (
                <div className="flex justify-center pt-4">
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    <ChevronUp className="w-6 h-6" />
                  </button>
                </div>
              )}
            </div>

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
                         className="group bg-[#D6E826] hover:bg-[#C6D81F] text-black font-medium h-12 px-6"
                       >
                         ¡Trabajemos juntos!
                         <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                       </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Section Transition - Inverted */}
      <div className="absolute -bottom-1 left-0 right-0">
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

