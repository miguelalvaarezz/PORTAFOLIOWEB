"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Phone, Calendar, Globe, ArrowLeft, ArrowRight, TrendingDown } from "lucide-react";

export function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });


  return (
    <section 
      id="sobre-mi" 
      ref={sectionRef}
      className="relative bg-gray-50 pt-8 pb-12 overflow-hidden"
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
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16"
        >
          <span className="text-gray-600 text-xs font-light tracking-[0.3em] uppercase">
            01 PROBLEMS
          </span>
        </motion.div>

        {/* Main Grid - Text only, no image */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          
          {/* Full width content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
            transition={{ 
              duration: 0.9, 
              delay: 0.3,
              ease: [0.23, 1, 0.32, 1]
            }}
            className="lg:col-span-12 space-y-6 md:space-y-8 text-center"
          >
            {/* Title */}
            <motion.div 
              className="space-y-3 md:space-y-4 text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
              transition={{ 
                duration: 0.9, 
                delay: 0.5,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <motion.h2 
                className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                transition={{ 
                  duration: 0.9, 
                  delay: 0.7,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <span className="block">El 85% de los clubes de pádel</span>
                <span className="block text-red-600">pierden tiempo y reservas.</span>
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                transition={{ 
                  duration: 0.9, 
                  delay: 1.0,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                Eso se traduce en menor ocupación y por lo tanto menor facturación.
              </motion.p>
            </motion.div>

            {/* Problem Cards */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-16 md:mt-24">
              {/* Card 1: Reservas Manuales */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.9, delay: 1.4, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -12 }}
                className="relative group cursor-pointer"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
                
                <div className="relative bg-white rounded-3xl p-10 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Icon container with advanced styling */}
                  <div className="relative mb-8">
                    <div className="absolute -top-2 -left-2 w-20 h-20 bg-transparent rounded-2xl" />
                    <div className="relative w-16 h-16 bg-white border-2 border-gray-300 rounded-2xl flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-300">
                      <Phone className="w-8 h-8 text-red-600" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 leading-tight">
                      Reservas manuales = pérdida de tiempo
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed font-light">
                      Horas de gestión que podrías dedicar a mejorar tu club.
                    </p>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="mt-6 h-1 w-20 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full group-hover:w-32 transition-all duration-500" />
                </div>
              </motion.div>

              {/* Card 2: Web Anticuada */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.9, delay: 1.6, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -12 }}
                className="relative group cursor-pointer"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
                
                <div className="relative bg-white rounded-3xl p-10 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Icon container with advanced styling */}
                  <div className="relative mb-8">
                    <div className="absolute -top-2 -left-2 w-20 h-20 bg-transparent rounded-2xl" />
                    <div className="relative w-16 h-16 bg-white border-2 border-gray-300 rounded-2xl flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-300">
                      <Globe className="w-8 h-8 text-red-600" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 leading-tight">
                      Web anticuada que no genera confianza
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed font-light">
                      Tu club se ve menos profesional de lo que realmente es.
                    </p>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="mt-6 h-1 w-20 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full group-hover:w-32 transition-all duration-500" />
                </div>
              </motion.div>

              {/* Card 3: Torneos */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.9, delay: 1.8, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -12 }}
                className="relative group cursor-pointer"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
                
                <div className="relative bg-white rounded-3xl p-10 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Icon container with advanced styling */}
                  <div className="relative mb-8">
                    <div className="absolute -top-2 -left-2 w-20 h-20 bg-transparent rounded-2xl" />
                    <div className="relative w-16 h-16 bg-white border-2 border-gray-300 rounded-2xl flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-300">
                      <Calendar className="w-8 h-8 text-red-600" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 leading-tight">
                      Torneos difíciles de organizar
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed font-light">
                      Listas confusas, inscripciones por mensajes y caos en los resultados.
                    </p>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="mt-6 h-1 w-20 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full group-hover:w-32 transition-all duration-500" />
                </div>
              </motion.div>
            </div>

            {/* Result Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="w-full mt-16 md:mt-20"
            >
              <div className="relative max-w-lg mx-auto">
                <p className="text-sm md:text-base text-gray-900 font-black text-right mb-2">
                  &gt; Facturación
                </p>
                <div className="relative w-full">
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div className="bg-red-500 h-full rounded-full" style={{ width: '20%' }} />
                  </div>
                  {/* Viñeta con 20% */}
                  <div className="absolute top-full left-[20%] -translate-x-1/2 translate-y-2">
                    {/* Puntero hacia arriba */}
                    <div className="absolute left-1/2 bottom-full transform -translate-x-1/2">
                      <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[4px] border-l-transparent border-r-transparent border-b-red-500" />
                    </div>
                    <div className="bg-red-500 text-white text-xs font-black px-2 py-1 rounded-full whitespace-nowrap mt-1">
                      20%
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Section Transition - Inverted */}
      <div className="absolute -bottom-5 left-0 right-0">
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
