"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { 
  ExternalLink, 
  Github, 
  Code, 
  Palette,
  ArrowUpRight,
  Calendar,
  Clock,
  Users,
  ChevronDown,
  ChevronUp
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  category: "web" | "design" | "fullstack";
  technologies: string[];
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Reservas online sin complicaciones",
    description: "Tus jugadores reservan pista en segundos, pagan online y reciben confirmación automática. Olvídate de los mensajes, errores o dobles reservas.",
    category: "fullstack",
    technologies: ["⚙️ Sistema de reservas automatizado", "Pago online", "Confirmación automática"],
    featured: true,
  },
  {
    id: "2",
    title: "Organiza y gestiona torneos fácilmente",
    description: "Publica torneos, gestiona inscripciones y muestra resultados en tiempo real. Todo desde un panel central, sin hojas de Excel ni caos.",
    category: "web",
    technologies: ["🏆 Sistema de torneos profesional", "Panel central", "Resultados en tiempo real"],
    featured: true,
  },
  {
    id: "3",
    title: "Diseño web premium para tu club",
    description: "Una web atractiva, rápida y optimizada para SEO, que refleja la calidad de tu club y atrae nuevos jugadores.",
    category: "design",
    technologies: ["💻 Web moderna y personalizada", "Optimizada para SEO", "Alta velocidad"],
    featured: true,
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-300px" });
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle
  const [expandedText, setExpandedText] = useState<{[key: string]: boolean}>({});
  const [expandedDescriptions, setExpandedDescriptions] = useState<{[key: string]: boolean}>({});
  
  const toggleDescriptionExpansion = (blockId: string) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [blockId]: !prev[blockId]
    }));
  };

  const toggleTextExpansion = (projectId: string) => {
    setExpandedText(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <section id="proyectos" ref={ref} className="relative pt-12 pb-32 bg-blue-800 overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Glow Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ 
            duration: 1.0, 
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.span 
            className="inline-block text-blue-200 text-xs font-light tracking-[0.3em] uppercase mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            02 SOLUTIONS
          </motion.span>

          <motion.h2 
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ 
              duration: 1.0, 
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <span className="block">
              Transformación 360<Image 
                src="/tenis.svg" 
                alt="Tenis" 
                width={24} 
                height={24}
                className="inline-block -mt-11"
              />
            </span>
            <span className="block">
              para tu{" "}
              <span className="text-[#D6E826]">club de pádel.</span>
            </span>
          </motion.h2>
        </motion.div>

        {/* Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.4,
            ease: [0.25, 0.46, 0.45, 0.94]
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
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 md:px-8 py-2 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-xs md:text-sm font-medium"
            >
              <badge.icon className="w-3 h-3 md:w-4 md:h-4" />
              {badge.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Services Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0 relative z-20">
          {/* Block 1: Reservas */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative group bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D6E826]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Image Placeholder - Full Width */}
            <div className="relative w-full h-64">
              <Image
                src="/sistemareservas.png"
                alt="Sistema de Reservas"
                fill
                className="object-cover"
              />
              {/* Badge on top of image */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-2 bg-[#D6E826]/20 backdrop-blur-sm text-gray-900 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg">
                  <Calendar className="w-4 h-4 text-[#D6E826]" />
                  Sistema de Reservas
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative p-8 md:p-10">
              {/* Title */}
              <h3 className="text-xl md:text-[1.75rem] font-black mb-4 leading-tight">
                <span className="text-[#D6E826]">1.</span> <span className="text-[#D6E826]">Reservas online</span> sin complicaciones
              </h3>
              
              {/* Description */}
              <div className="relative mb-6">
                <p className={`text-base md:text-lg text-gray-600 leading-relaxed transition-all duration-300 ${expandedDescriptions['reservas'] ? '' : 'line-clamp-3'}`}>
                  Tus jugadores <span className="font-bold">reservan pista en segundos, pagan online y reciben confirmación automática</span>. Olvídate de los mensajes, errores o dobles reservas.
                </p>
                {!expandedDescriptions['reservas'] && (
                  <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-center pb-2">
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                    <button
                      onClick={() => toggleDescriptionExpansion('reservas')}
                      className="text-[#D6E826] hover:text-[#C6D81F] transition-colors duration-200 relative z-10"
                    >
                      <ChevronDown className="w-6 h-6" />
                    </button>
                  </div>
                )}
                {expandedDescriptions['reservas'] && (
                  <button
                    onClick={() => toggleDescriptionExpansion('reservas')}
                    className="text-[#D6E826] hover:text-[#C6D81F] font-medium text-sm mt-2 transition-colors duration-200 flex items-center gap-1"
                  >
                    Leer menos
                    <ChevronUp className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              {/* Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#D6E826]" />
                  <span className="text-sm text-gray-600">Confirmación automática instantánea</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#D6E826]" />
                  <span className="text-sm text-gray-600">Pago online integrado</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#D6E826]" />
                  <span className="text-sm text-gray-600">Eliminación de errores y dobles reservas</span>
                </div>
              </div>
              
              {/* Button */}
              <Link href="/sistemareservas" className="w-full bg-[#D6E826] text-gray-900 hover:bg-[#C6D81F] font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                <ArrowUpRight className="w-5 h-5" />
                Ver sistema de reservas
              </Link>
            </div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#D6E826]/20 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Block 2: Web Premium - CENTRO */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Image Placeholder - Full Width */}
            <div className="relative w-full h-64">
              <Image
                src="/DWP.png"
                alt="Diseño Web Premium"
                fill
                className="object-cover"
              />
              {/* Badge on top of image */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm text-gray-900 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg">
                  <Code className="w-4 h-4 text-blue-600" />
                  Web Avanzada
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative p-8 md:p-10">
              {/* Title */}
              <h3 className="text-xl md:text-[1.75rem] font-black mb-4 leading-tight">
                <span className="text-blue-600">2.</span> <span className="text-blue-600">Diseño web premium</span> para tu club
              </h3>
              
              {/* Description */}
              <div className="relative mb-6">
                <p className={`text-base md:text-lg text-gray-600 leading-relaxed transition-all duration-300 ${expandedDescriptions['web'] ? '' : 'line-clamp-3'}`}>
                  Una web atractiva, rápida y optimizada para SEO, que refleja la <span className="font-bold">calidad de tu club y atrae nuevos jugadores</span>.
                </p>
                {!expandedDescriptions['web'] && (
                  <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-center pb-2">
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                    <button
                      onClick={() => toggleDescriptionExpansion('web')}
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-200 relative z-10"
                    >
                      <ChevronDown className="w-6 h-6" />
                    </button>
                  </div>
                )}
                {expandedDescriptions['web'] && (
                  <button
                    onClick={() => toggleDescriptionExpansion('web')}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm mt-2 transition-colors duration-200 flex items-center gap-1"
                  >
                    Leer menos
                    <ChevronUp className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              {/* Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span className="text-sm text-gray-600">Diseño moderno y atractivo</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span className="text-sm text-gray-600">Optimización SEO completa</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span className="text-sm text-gray-600">Velocidad y rendimiento excepcionales</span>
                </div>
              </div>
              
              {/* Button */}
              <Link href="/padelnova" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                <ArrowUpRight className="w-5 h-5" />
                Ver web premium
              </Link>
            </div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Block 3: Torneos */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative group bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EF4444]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Image Placeholder - Full Width */}
            <div className="relative w-full h-64">
              <Image
                src="/sistematorneos.png"
                alt="Sistema de Torneos"
                fill
                className="object-cover"
              />
              {/* Badge on top of image */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-2 bg-[#EF4444]/20 backdrop-blur-sm text-gray-900 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg">
                  <Users className="w-4 h-4 text-[#EF4444]" />
                  Sistema de Torneos
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative p-8 md:p-10">
              {/* Title */}
              <h3 className="text-xl md:text-[1.75rem] font-black mb-4 leading-tight">
                <span className="text-[#EF4444]">3.</span> <span className="text-[#EF4444]">Organiza torneos</span> fácilmente
              </h3>
              
              {/* Description */}
              <div className="relative mb-6">
                <p className={`text-base md:text-lg text-gray-600 leading-relaxed transition-all duration-300 ${expandedDescriptions['torneos'] ? '' : 'line-clamp-3'}`}>
                  Publica torneos, gestiona inscripciones y muestra resultados en tiempo real. <span className="font-bold">Todo desde un panel central</span>, sin hojas de Excel ni caos.
                </p>
                {!expandedDescriptions['torneos'] && (
                  <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-center pb-2">
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                    <button
                      onClick={() => toggleDescriptionExpansion('torneos')}
                      className="text-[#EF4444] hover:text-red-700 transition-colors duration-200 relative z-10"
                    >
                      <ChevronDown className="w-6 h-6" />
                    </button>
                  </div>
                )}
                {expandedDescriptions['torneos'] && (
                  <button
                    onClick={() => toggleDescriptionExpansion('torneos')}
                    className="text-[#EF4444] hover:text-red-700 font-medium text-sm mt-2 transition-colors duration-200 flex items-center gap-1"
                  >
                    Leer menos
                    <ChevronUp className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              {/* Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                  <span className="text-sm text-gray-600">Inscripciones online automatizadas</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                  <span className="text-sm text-gray-600">Resultados en tiempo real</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                  <span className="text-sm text-gray-600">Panel de control centralizado</span>
                </div>
              </div>
              
              {/* Button */}
              <Link href="/sistematorneos" className="w-full bg-[#EF4444] text-white hover:bg-red-600 font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                <ArrowUpRight className="w-5 h-5" />
                Ver sistema de torneos
              </Link>
            </div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#EF4444]/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>

      </div>

      {/* Diagonal curvature connecting to section 4 */}
      <div className="absolute -bottom-0.5 left-0 right-0">
        <svg
          className="w-full h-40 text-[#0f1f3a]"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 L0,0 C200,6 400,12 600,25 C800,50 1000,100 1200,200 L1200,200 Z"
            fill="currentColor"
          />
        </svg>
      </div>

    </section>
  );
}
