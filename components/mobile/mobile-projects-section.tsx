"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { 
  ExternalLink, 
  Github, 
  Code, 
  Palette,
  ArrowUpRight,
  PaintbrushIcon,
  Zap,
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
    title: "DunkRelief - Ecommerce Internacional",
    description: "Plataforma de comercio electrónico con diseño moderno y optimizado al máximo para la conversión de visitantes. Uso de elementos creativos y visualmente atractivos para la presentación del producto. Conectada a pasarela de pago y funcionalidades tales como carrito, promociones, pop-ups, etc.",
    category: "fullstack",
    technologies: ["Next.js", "TypeScript", "Stripe"],
    featured: true,
  },
  {
    id: "2",
    title: "🧩 NextCheck — Software clínico 360",
    description: "Software personalizado con la estructura completa de una clínica fisioterapeuta, dedicado al registro de datos y automatizacion de tareas ( registro de pacientes, recordatorios de citas, agenda, historiales clínicos, evalución de progreso, etc.). Todo empaquetado en una interfaz altamente interactiva y moderna.",
    category: "web",
    technologies: ["Diseño UX/UI", "Desarrollo Frontend", "Desarrollo Backend"],
    featured: true,
  },
  {
    id: "3",
    title: "VALENZO - Diseño de marca",
    description: "Identidad visual completa para lanzamiento de una marca privada de lujo. Transformando un concepto en un diseño que refleja los valores y esencia de la marca. Así como transmite un sentimiento de exclusividad y alto status entre los seleccionados para adquirir su línea de producto.",
    category: "design",
    technologies: ["Illustrator", "Photoshop", "Procreate"],
    featured: true,
  },
];

export function MobileProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const [expandedText, setExpandedText] = useState<{[key: string]: boolean}>({});

  const toggleTextExpansion = (projectId: string) => {
    setExpandedText(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <section id="proyectos" ref={ref} className="relative pt-12 pb-8 bg-blue-800 overflow-hidden px-4">
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

      <div className="relative max-w-sm mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.span 
            className="inline-block text-blue-200 text-xs font-light tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            02 Proyectos
          </motion.span>

          <motion.h2 
            className="text-2xl sm:text-3xl font-black leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.span 
              className="text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Proyectos
            </motion.span>{" "}
            <motion.span 
              className="relative inline-block text-white/40 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.0,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Destacados
              <motion.span 
                className="absolute -bottom-2 left-1/2 right-0 h-1 bg-white/70 rounded-sm -z-10"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{ originX: 0 }}
              />
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Badges */}
        <motion.div
          className="space-y-3 mb-8 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* First Row - UX and Optimización */}
          <motion.div
            className="flex justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.4, 
              delay: 1.6,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-xs font-medium"
            >
              <PaintbrushIcon className="w-3 h-3" />
              UX/UI Personalizado
            </motion.div>
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-xs font-medium"
            >
              <Zap className="w-3 h-3" />
              Optimización Web
            </motion.div>
          </motion.div>

          {/* Second Row - Desarrollo centered */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.4, 
              delay: 1.8,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-xs font-medium"
            >
              <Code className="w-3 h-3" />
              Desarrollo de sistemas/APIs
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Projects List - Simple Stack */}
        <motion.div 
          className="space-y-6 mb-16 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {projects.map((project, index) => {
            const blockRef = useRef(null);
            const blockIsInView = useInView(blockRef, { once: true, margin: "-50px" });
            
            return (
              <motion.div
                key={project.id}
                ref={blockRef}
                className={`relative ${project.id === "3" ? 'z-10' : ''}`}
                initial={{ opacity: 0, y: 60 }}
                animate={blockIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {/* Card */}
                <div className={`relative bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
                  expandedText[project.id] 
                    ? 'h-auto min-h-[500px]' 
                    : project.id === "2" 
                      ? 'h-[480px]'  // NextCheck - más alto por descripción larga
                      : project.id === "3" 
                        ? 'h-[420px]'  // VALENZO - altura reducida cuando contraído
                        : project.id === "1" 
                          ? 'h-[460px]'  // DunkRelief - descripción media
                          : 'h-[420px]'  // Otros proyectos - altura estándar
                }`}>
                  {/* Image Area */}
                  <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden h-[200px]">
                    {project.id === "2" ? (
                      // Dashboard Analytics - Show NC image
                      <Image
                        src="/NC.webp"
                        alt="Dashboard Analytics"
                        width={400}
                        height={0}
                        className="w-full h-auto"
                      />
                    ) : project.id === "3" ? (
                      // Brand Identity - Show valenzo image
                      <Image
                        src="/valenzo.webp"
                        alt="Brand Identity - Valenzo"
                        fill
                        className="object-cover"
                      />
                    ) : project.id === "1" ? (
                      // E-Commerce Moderno - Show dunkrelief video
                      <video
                        src="/dunkrelief.mov"
                        className="w-full h-auto"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      // Other projects - Show icon
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-blue-300">
                          {project.category === "design" ? (
                            <Palette className="w-16 h-16" />
                          ) : project.category === "fullstack" ? (
                            <Code className="w-16 h-16" />
                          ) : (
                            <Code className="w-16 h-16" />
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`p-6 ${project.id === "3" && !expandedText[project.id] ? 'pb-4' : 'pb-6'}`}>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {project.title}
                    </h3>
                    <div className="mb-4 leading-relaxed text-sm text-gray-600">
                      <div className="relative">
                        <p className={`transition-all duration-300 ${
                          expandedText[project.id] ? '' : 'line-clamp-2'
                        }`}>
                          {project.description}
                        </p>
                        {!expandedText[project.id] && (
                          <div className="relative">
                            {/* Gradiente difuminado */}
                            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                            {/* Botón para expandir */}
                            <button
                              onClick={() => toggleTextExpansion(project.id)}
                              className="absolute bottom-0 right-0 text-blue-600 hover:text-blue-800 bg-white p-1 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                            >
                              <ChevronDown className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                        {expandedText[project.id] && (
                          <button
                            onClick={() => toggleTextExpansion(project.id)}
                            className="text-blue-600 hover:text-blue-800 mt-2 transition-colors duration-200"
                          >
                            <ChevronUp className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="flex-1 bg-blue-800 text-white hover:bg-blue-900 group"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Proyecto
                      </Button>
                      <Button
                        size="sm"
                        className="bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

               {/* CTA - Hidden */}
               <motion.div
                 className="text-center relative z-20 hidden"
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 1 }}
               >
                 <Button
                   size="lg"
                   className="group bg-white text-blue-800 hover:bg-blue-50 font-semibold px-10 h-14 text-base shadow-2xl hover:shadow-white/30 transition-all duration-300"
                 >
                   Ver Todos los Proyectos
                   <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                 </Button>
               </motion.div>
      </div>

      {/* Diagonal curvature connecting to section 4 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-40 text-black"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 L0,0 C150,20 300,10 450,30 C600,50 750,40 900,60 C1050,80 1150,120 1200,200 L1200,200 Z"
            fill="currentColor"
          />
        </svg>
      </div>

    </section>
  );
}