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
  TrendingUp,
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

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-300px" });
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle
  const [expandedText, setExpandedText] = useState<{[key: string]: boolean}>({});

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
            02 Proyectos
          </motion.span>

          <motion.h2 
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ 
              duration: 1.0, 
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.span 
              className="text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ 
                duration: 0.8, 
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
                duration: 0.8, 
                delay: 1.0,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Destacados
              <motion.span 
                className="absolute -bottom-2 md:-bottom-4 left-1/2 right-0 h-1 md:h-1.5 bg-white/70 rounded-sm -z-10"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ 
                  duration: 0.8, 
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
            { text: "UX/UI Personalizado", icon: PaintbrushIcon },
            { text: "Desarrollo de sistemas/APIs", icon: Code }, 
            { text: "Optimización Web", icon: Zap }
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

        {/* Carousel - Responsive Flex */}
        <motion.div 
          className="flex flex-col md:flex-row gap-4 md:gap-8 mb-16 md:mb-20 px-4 md:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {projects.map((project, index) => {
            const isCenter = index === currentIndex;
            const blockRef = useRef(null);
            const blockIsInView = useInView(blockRef, { once: true, margin: "-200px" });
            
            return (
              <motion.div
                key={project.id}
                ref={blockRef}
                className={`relative cursor-pointer transition-all duration-300 flex-1 ${
                  expandedText[project.id] ? 'z-10' : ''
                }`}
                onClick={() => setCurrentIndex(index)}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={blockIsInView ? { 
                  opacity: isCenter ? 1 : 0.6,
                  scale: isCenter ? 1 : 0.95,
                } : { opacity: 0, y: 40, scale: 0.9 }}
                transition={{
                  duration: 1.6,
                  delay: 2.6 + index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  y: { duration: 1.2, ease: [0.32, 0.72, 0, 1] },
                  opacity: { duration: 1.2, ease: [0.32, 0.72, 0, 1] },
                  scale: { duration: 1.2, ease: [0.32, 0.72, 0, 1] }
                }}
                whileHover={!isCenter ? { 
                  opacity: 0.8, 
                  scale: 0.98,
                  transition: { duration: 0.2 }
                } : {}}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow on center */}
                {isCenter && (
                  <motion.div 
                    className="absolute -inset-2 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-3xl opacity-30 blur-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
                
                {/* Transform effect for center */}
                <motion.div
                  className="relative h-full"
                  animate={isCenter ? { 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  } : { 
                    y: 0,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                
                {/* Card */}
                <div className={`relative bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
                  expandedText[project.id] ? 'h-auto min-h-[500px]' : 'h-[500px]'
                }`}>
                  {/* Image Area */}
                  <div className={`relative bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden ${
                    project.id === "3" ? "h-[250px]" : "h-[220px]"
                  }`}>
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
                        <motion.div
                          className="text-blue-300"
                          animate={isCenter ? {
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          } : {}}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {project.category === "design" ? (
                            <Palette className="w-16 h-16" />
                          ) : project.category === "fullstack" ? (
                            <Code className="w-16 h-16" />
                          ) : (
                            <Code className="w-16 h-16" />
                          )}
                        </motion.div>
                      </div>
                    )}
                    
                    {/* Featured Badge */}
                    {isCenter && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-800 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`p-6 transition-all duration-300 ${
                    expandedText[project.id] ? 'pb-8' : ''
                  }`}>
                    <h3 className={`text-xl font-bold mb-3 transition-colors ${
                      isCenter ? 'text-gray-900' : 'text-gray-600'
                    }`}>
                      {project.title}
                    </h3>
                    <div className={`mb-4 leading-relaxed text-sm transition-colors ${
                      isCenter ? 'text-gray-600' : 'text-gray-500'
                    }`}>
                      {(project.id === "1" || project.id === "2" || project.id === "3") ? (
                        // Todos los proyectos - Texto con efecto de truncado
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
                      ) : (
                        // Fallback (no debería ejecutarse ya que todos tienen efecto)
                        <p>{project.description}</p>
                      )}
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

                    {/* Buttons - Only on center */}
                    {isCenter && (
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
                    )}
                  </div>
                </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dots Indicator */}
        <motion.div
          className="flex justify-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Ver proyecto ${index + 1}`}
            />
          ))}
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
            d="M0,200 L0,0 C200,6 400,12 600,25 C800,50 1000,100 1200,200 L1200,200 Z"
            fill="currentColor"
          />
        </svg>
      </div>

    </section>
  );
}
