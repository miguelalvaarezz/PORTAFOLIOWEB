"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export function MobileAboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });
  const [expandedText, setExpandedText] = useState(false);

  const highlights = [
    { text: "Fast & efficient delivery", color: "bg-green-500" },
    { text: "Clean, maintainable code", color: "bg-orange-500" },
    { text: "Modern tech stack", color: "bg-purple-500" }
  ];

  const openWhatsApp = () => {
    const phoneNumber = "+34695537321"; // Tu número de WhatsApp
    const message = "¡Hola Miguel! He visto tu portafolio y me interesa trabajar contigo en un proyecto web. Me gusta tu enfoque en diseño moderno y desarrollo eficiente. ¿Podemos hablar sobre mi proyecto?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const toggleTextExpansion = () => {
    setExpandedText(!expandedText);
  };

  return (
    <section 
      id="sobre-mi-mobile" 
      ref={sectionRef}
      className="relative bg-gray-50 pt-16 pb-20 overflow-hidden px-4"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-sm mx-auto">
        
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <span className="text-blue-600 text-xs font-light tracking-[0.3em] uppercase">
            01 About
          </span>
        </motion.div>

        {/* Mobile Layout */}
        <div className="space-y-8">
          
          {/* Photo */}
          <motion.div 
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <div className="relative aspect-square w-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden">
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
              className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-600/10 rounded-2xl -z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4,
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
              delay: 0.6,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Available for work</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <h2 className="text-2xl font-black text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Miguel Álvarez
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Diseñador & Desarrollador
            </p>
            <div className="relative">
              <p className={`text-sm text-gray-600 leading-relaxed px-6 text-justify transition-all duration-300 ${
                expandedText ? '' : 'line-clamp-4'
              }`}>
                Soy un diseñador y desarrollador web autodidacta de 17 años, con más de 3 años de experiencia creando experiencias web vanguardistas, inmersivas y cuidadosamente diseñadas para destacar. <strong>Considero el diseño web como una forma de arte digital:</strong> cada proyecto es una oportunidad para reflejar la identidad, los valores y la esencia de cada empresa. No creo en las páginas genéricas ni en las plantillas. <strong>Creo en diseños hechos desde cero, pensados para aumentar el valor percibido de las marcas y convertir visitantes en clientes reales.</strong> Mi objetivo es simple: transformar ideas en experiencias digitales completas que lleven la experiencia del cliente al siguiente nivel.
              </p>
              {!expandedText && (
                <div className="relative">
                  {/* Gradiente difuminado */}
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
                  {/* Botón para expandir - debajo del texto */}
                  <div className="flex justify-center mt-2">
                    <button
                      onClick={toggleTextExpansion}
                      className="text-blue-600 hover:text-blue-800 bg-gray-50 p-1 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
              {expandedText && (
                <div className="flex justify-center mt-2">
                  <button
                    onClick={toggleTextExpansion}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="space-y-3 px-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.0,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <div className={`w-2 h-2 ${highlight.color} rounded-full`} />
                <span className="text-sm font-medium text-gray-700">{highlight.text}</span>
                <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" />
              </motion.div>
            ))}
          </motion.div>


          {/* CTA */}
          <motion.div
            className="text-center pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ 
              duration: 0.8, 
              delay: 2.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="w-3/5 mx-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              data-cursor-magnetic
            >
              <span>Let's work together</span>
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Section Transition - Inverted */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 text-blue-800"
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