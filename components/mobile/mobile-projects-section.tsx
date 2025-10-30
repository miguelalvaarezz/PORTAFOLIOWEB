"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { 
  ArrowUpRight,
  Calendar,
  Code,
  Users,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Clock
} from "lucide-react";

export function MobileProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentBadge, setCurrentBadge] = useState(0);
  const [expandedDescriptions, setExpandedDescriptions] = useState({
    reservas: false,
    web: false,
    torneos: false,
  });

  const toggleDescriptionExpansion = (key: string) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  return (
    <section 
      id="proyectos" 
      ref={ref} 
      className="relative pt-12 pb-20 px-4 overflow-visible"
      style={{ backgroundColor: '#091334' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#D6E826] rounded-full blur-3xl"></div>
      </div>


      <div className="relative max-w-lg mx-auto z-10">
        
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            duration: 0.9, 
            delay: 0.3,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <motion.span 
            className="inline-block text-blue-200 text-xs font-light tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            02 SOLUTIONS
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl font-black mb-0 text-white leading-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.9, 
              delay: 0.7,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <span className="block text-center">
              Transformación <span className="text-[#D6E826]">360</span><Image 
                src="/tenis.svg" 
                alt="Tenis" 
                width={24} 
                height={24}
                className="inline-block -mt-11"
              />
            </span>
            <span className="block text-center">
              para tu{" "}
              <span className="text-[#D6E826]">club de pádel.</span>
            </span>
          </motion.h2>
        </motion.div>

        {/* Badges Carousel */}
        <motion.div
          className="relative mb-8 -mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            duration: 0.9, 
            delay: 1.4,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <div className="relative flex items-center gap-3">
            {/* Left Arrow */}
            <button
              onClick={() => setCurrentBadge((prev) => (prev === 0 ? 2 : prev - 1))}
              className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-white hover:text-white/80 transition-colors duration-200 z-10"
              aria-label="Badge anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Carousel Container */}
            <div className="flex-1 overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentBadge * 100}%)` }}
              >
                {[
                  { text: "Aumenta tus reservas", icon: Calendar },
                  { text: "Reduce tu tiempo de gestión", icon: Clock }, 
                  { text: "Atrae nuevos jugadores", icon: Users }
                ].map((badge, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-full flex items-center justify-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-xs font-medium"
                  >
                    <badge.icon className="w-3.5 h-3.5" />
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => setCurrentBadge((prev) => (prev === 2 ? 0 : prev + 1))}
              className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-white hover:text-white/80 transition-colors duration-200 z-10"
              aria-label="Badge siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentBadge(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentBadge === index 
                    ? 'bg-white w-6' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Ir al badge ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Services Blocks */}
        <div className="space-y-6">
          {/* Block 1: Reservas */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="relative group bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D6E826]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Image Placeholder - Full Width */}
            <div className="relative w-full h-40">
              <Image
                src="/sistemareservas.png"
                alt="Sistema de Reservas"
                fill
                className="object-cover"
              />
              {/* Badge on top of image */}
              <div className="absolute top-2 left-2">
                <span className="inline-flex items-center gap-1.5 bg-[#D6E826]/20 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg">
                  <Calendar className="w-2.5 h-2.5 text-[#D6E826]" />
                  Sistema de Reservas
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative p-5">
              {/* Title */}
              <h3 className="text-lg font-black mb-2 leading-tight">
                <span className="text-[#D6E826]">1.</span> <span className="text-[#D6E826]">Reservas online</span> sin complicaciones
              </h3>
              
              {/* Description */}
              <div className="relative mb-3">
                <p className={`text-sm text-gray-600 leading-relaxed transition-all duration-300 ${expandedDescriptions['reservas'] ? '' : 'line-clamp-3'}`}>
                  Tus jugadores <span className="font-bold">reservan pista en segundos, pagan online y reciben confirmación automática</span>. Olvídate de los mensajes, errores o dobles reservas.
                </p>
                {!expandedDescriptions['reservas'] && (
                  <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-center pb-1">
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                    <button
                      onClick={() => toggleDescriptionExpansion('reservas')}
                      className="text-[#D6E826] hover:text-[#C6D81F] transition-colors duration-200 relative z-10"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </button>
                  </div>
                )}
                {expandedDescriptions['reservas'] && (
                  <button
                    onClick={() => toggleDescriptionExpansion('reservas')}
                    className="text-[#D6E826] hover:text-[#C6D81F] font-medium text-xs mt-2 transition-colors duration-200 flex items-center gap-1"
                  >
                    Leer menos
                    <ChevronUp className="w-3 h-3" />
                  </button>
                )}
              </div>
              
              {/* Features */}
              <div className="space-y-2 mb-3">
                <div className="flex items-start gap-2">
                  <div className="mt-1 w-1 h-1 rounded-full bg-[#D6E826]" />
                  <span className="text-xs text-gray-600">Confirmación automática instantánea</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 w-1 h-1 rounded-full bg-[#D6E826]" />
                  <span className="text-xs text-gray-600">Pago online integrado</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 w-1 h-1 rounded-full bg-[#D6E826]" />
                  <span className="text-xs text-gray-600">Eliminación de errores</span>
                </div>
              </div>
              
              {/* Button */}
              <div className="w-full bg-[#D6E826]/20 border-2 border-[#D6E826] text-black hover:bg-[#C6D81F]/30 font-bold py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm">
                <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                Ver sistema de reservas
              </div>
            </div>
          </motion.div>

          {/* Block 2: Web Premium */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.9, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
            className="relative group bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src="/DWP.png"
                alt="Diseño Web Premium"
                fill
                className="object-cover"
              />
              {/* Badge on top of image */}
              <div className="absolute top-2 left-2">
                <span className="inline-flex items-center gap-1.5 bg-blue-500/20 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg">
                  <Code className="w-2.5 h-2.5 text-blue-600" />
                  Web Avanzada
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative p-5">
              {/* Title */}
              <h3 className="text-lg font-black mb-2 leading-tight">
                <span className="text-blue-600">2.</span> <span className="text-blue-600">Diseño web premium</span> para tu club
              </h3>
              
              {/* Description */}
              <div className="relative mb-3">
                <p className={`text-sm text-gray-600 leading-relaxed transition-all duration-300 ${expandedDescriptions['web'] ? '' : 'line-clamp-3'}`}>
                  Una web atractiva, rápida y optimizada para SEO, que refleja la <span className="font-bold">calidad de tu club y atrae nuevos jugadores</span>.
                </p>
                {!expandedDescriptions['web'] && (
                  <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-center pb-1">
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                    <button
                      onClick={() => toggleDescriptionExpansion('web')}
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-200 relative z-10"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </button>
                  </div>
                )}
                {expandedDescriptions['web'] && (
                  <button
                    onClick={() => toggleDescriptionExpansion('web')}
                    className="text-blue-600 hover:text-blue-700 font-medium text-xs mt-2 transition-colors duration-200 flex items-center gap-1"
                  >
                    Leer menos
                    <ChevronUp className="w-3 h-3" />
                  </button>
                )}
              </div>
              
              {/* Features */}
              <div className="space-y-2 mb-3">
                <div className="flex items-start gap-2">
                  <div className="mt-1 w-1 h-1 rounded-full bg-blue-600" />
                  <span className="text-xs text-gray-600">Diseño moderno y atractivo</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 w-1 h-1 rounded-full bg-blue-600" />
                  <span className="text-xs text-gray-600">Optimización SEO completa</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 w-1 h-1 rounded-full bg-blue-600" />
                  <span className="text-xs text-gray-600">Alta velocidad</span>
                </div>
              </div>
              
              {/* Button */}
              <div className="w-full bg-blue-600/20 border-2 border-blue-600 text-black opacity-100 hover:bg-blue-700/30 font-bold py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm">
                <ArrowUpRight className="w-3.5 h-3.5 text-black opacity-100" />
                <span className="opacity-100">Ver web premium</span>
              </div>
            </div>
          </motion.div>

          {/* Block 3: Torneos */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.9, delay: 1.4, ease: [0.23, 1, 0.32, 1] }}
            className="relative group bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 z-[9999]"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EF4444]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src="/sistematorneos.png"
                alt="Sistema de Torneos"
                fill
                className="object-cover"
              />
              {/* Badge */}
              <div className="absolute top-2 left-2">
                <span className="inline-flex items-center gap-1.5 bg-[#EF4444]/20 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg">
                  <Users className="w-2.5 h-2.5 text-[#EF4444]" />
                  Sistema de Torneos
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative p-5">
              {/* Title */}
              <h3 className="text-lg font-black mb-2 leading-tight">
                <span className="text-[#EF4444]">3.</span> <span className="text-[#EF4444]">Organiza torneos</span> fácilmente
              </h3>
              
              {/* Description */}
              <div className="relative mb-3">
                <p className={`text-sm text-gray-600 leading-relaxed transition-all duration-300 ${expandedDescriptions['torneos'] ? '' : 'line-clamp-3'}`}>
                  Publica torneos, gestiona inscripciones y muestra resultados en tiempo real. <span className="font-bold">Todo desde un panel central</span>, sin hojas de Excel ni caos.
                </p>
                {!expandedDescriptions['torneos'] && (
                  <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-center pb-1">
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                    <button
                      onClick={() => toggleDescriptionExpansion('torneos')}
                      className="text-[#EF4444] hover:text-red-700 transition-colors duration-200 relative z-10"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </button>
                  </div>
                )}
                {expandedDescriptions['torneos'] && (
                  <button
                    onClick={() => toggleDescriptionExpansion('torneos')}
                    className="text-[#EF4444] hover:text-red-700 font-medium text-xs mt-2 transition-colors duration-200 flex items-center gap-1"
                  >
                    Leer menos
                    <ChevronUp className="w-3 h-3" />
                  </button>
                )}
              </div>
              
              {/* Features */}
              <div className="space-y-2 mb-3">
                <div className="flex items-start gap-2">
                  <div className="mt-1 w-1 h-1 rounded-full bg-[#EF4444]" />
                  <span className="text-xs text-gray-600">Inscripciones online automatizadas</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 w-1 h-1 rounded-full bg-[#EF4444]" />
                  <span className="text-xs text-gray-600">Resultados en tiempo real</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 w-1 h-1 rounded-full bg-[#EF4444]" />
                  <span className="text-xs text-gray-600">Panel de control centralizado</span>
                </div>
              </div>
              
              {/* Button */}
              <div className="w-full bg-[#EF4444]/20 border-2 border-[#EF4444] text-black hover:bg-red-600/30 font-bold py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm">
                <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                Ver sistema de torneos
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
