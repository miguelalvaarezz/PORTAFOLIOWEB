"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowUpRight,
  Calendar,
  Code,
  Users,
  ChevronDown,
  ChevronUp,
  Clock
} from "lucide-react";

export function MobileProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
      className="relative py-20 bg-black px-4 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#D6E826] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-lg mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            duration: 0.9, 
            delay: 0.3,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <motion.span 
            className="inline-block text-[#D6E826] text-xs font-light tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            02 Soluciones
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl font-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.9, 
              delay: 0.7,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <span className="text-white">Sistemas completos</span>
            <Image 
              src="/arrow-decorative.svg" 
              alt="Arrow"
              width={80}
              height={24}
              className="inline-block -mt-8 ml-2"
            />
          </motion.h2>
        </motion.div>

        {/* Badges */}
        <motion.div
          className="flex flex-col gap-3 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            duration: 0.9, 
            delay: 1.4,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          {[
            { text: "Aumenta tus reservas", icon: Calendar },
            { text: "Reduce tu tiempo de gestión", icon: Clock }, 
            { text: "Atrae nuevos jugadores", icon: Users }
          ].map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.6 + i * 0.1,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm font-medium"
            >
              <badge.icon className="w-4 h-4" />
              {badge.text}
            </motion.div>
          ))}
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
            <div className="relative w-full h-48">
              <Image
                src="/sistemareservas.png"
                alt="Sistema de Reservas"
                fill
                className="object-cover"
              />
              {/* Badge on top of image */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-2 bg-[#D6E826]/20 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg">
                  <Calendar className="w-3 h-3 text-[#D6E826]" />
                  Sistema de Reservas
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative p-6">
              {/* Title */}
              <h3 className="text-xl font-black mb-3 leading-tight">
                <span className="text-[#D6E826]">1.</span> <span className="text-[#D6E826]">Reservas online</span> sin complicaciones
              </h3>
              
              {/* Description */}
              <div className="relative mb-4">
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
              <div className="space-y-2 mb-4">
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
              <Link href="/sistemareservas" className="w-full bg-[#D6E826] text-gray-900 hover:bg-[#C6D81F] font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                <ArrowUpRight className="w-4 h-4" />
                Ver sistema de reservas
              </Link>
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
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg">
                  <Code className="w-3 h-3 text-blue-600" />
                  Web Avanzada
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative p-6">
              {/* Title */}
              <h3 className="text-xl font-black mb-3 leading-tight">
                <span className="text-blue-600">2.</span> <span className="text-blue-600">Diseño web premium</span> para tu club
              </h3>
              
              {/* Description */}
              <div className="relative mb-4">
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
              <div className="space-y-2 mb-4">
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
              <Link href="/padelnova" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                <ArrowUpRight className="w-4 h-4" />
                Ver web premium
              </Link>
            </div>
          </motion.div>

          {/* Block 3: Torneos */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.9, delay: 1.4, ease: [0.23, 1, 0.32, 1] }}
            className="relative group bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
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
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-2 bg-[#EF4444]/20 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg">
                  <Users className="w-3 h-3 text-[#EF4444]" />
                  Sistema de Torneos
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative p-6">
              {/* Title */}
              <h3 className="text-xl font-black mb-3 leading-tight">
                <span className="text-[#EF4444]">3.</span> <span className="text-[#EF4444]">Organiza torneos</span> fácilmente
              </h3>
              
              {/* Description */}
              <div className="relative mb-4">
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
              <div className="space-y-2 mb-4">
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
              <Link href="/sistematorneos" className="w-full bg-[#EF4444] text-white hover:bg-red-600 font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                <ArrowUpRight className="w-4 h-4" />
                Ver sistema de torneos
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Diagonal curvature connecting to section 4 */}
      <div className="absolute -bottom-0.5 left-0 right-0">
        <svg
          className="w-full h-32 text-[#0f1f3a]"
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 L0,0 C200,10 400,20 600,40 C800,80 1000,140 1200,160 L1200,160 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
