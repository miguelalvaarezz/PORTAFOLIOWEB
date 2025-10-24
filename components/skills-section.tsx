"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Palette, 
  Code, 
  Server, 
  Users,
  Monitor,
  Smartphone,
  Globe,
  Zap,
  Layers,
  Database,
  Cpu
} from "lucide-react";

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Diseño Visual",
    description: "Creo identidades visuales que conectan y comunican",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    skills: ["UI/UX Design", "Brand Identity", "Illustration", "Visual Design"]
  },
  {
    title: "Desarrollo Frontend",
    description: "Construyo interfaces modernas y responsivas",
    icon: Monitor,
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Desarrollo Backend",
    description: "Desarrollo sistemas robustos y escalables",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    skills: ["Node.js", "APIs", "Databases", "Cloud Services"]
  },
  {
    title: "UX/UI",
    description: "Diseño experiencias centradas en el usuario",
    icon: Users,
    color: "from-orange-500 to-red-500",
    gradient: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
  }
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section id="habilidades" ref={ref} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left: Header */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center h-full order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center lg:text-left">
              <motion.span 
                className="inline-block text-blue-400 text-xs font-light tracking-[0.3em] uppercase mb-4 md:mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                03 Skills
              </motion.span>
              <div>
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Mis <motion.span 
                    className="gradient-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    Habilidades
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  Desde el diseño visual hasta el código que lo hace realidad, cada proyecto es un lienzo en blanco.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills Column */}
          <motion.div 
            className="lg:col-span-7 order-1 lg:order-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              {skillCategories.map((category, categoryIndex) => {
                const CategoryIcon = category.icon;
                const isUXUI = categoryIndex === 3; // UX/UI box
                return (
                  <motion.div
                    key={categoryIndex}
                    className={`relative p-3 rounded-lg ${category.gradient} border border-white/10 backdrop-blur-sm ${isUXUI ? 'z-30' : ''} group`}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 1.2 + categoryIndex * 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ 
                      y: -2,
                      transition: { 
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Icon */}
                    <motion.div 
                      className={`w-6 h-6 bg-gradient-to-br ${category.color} rounded-md flex items-center justify-center mb-2 shadow-lg`}
                      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -180 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 1.4 + categoryIndex * 0.2,
                        ease: [0.34, 1.56, 0.64, 1]
                      }}
                      whileHover={{ 
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <CategoryIcon className="w-3 h-3 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-1">
                      <motion.h3 
                        className="text-base font-bold text-white"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 1.6 + categoryIndex * 0.2,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        {category.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-300 leading-relaxed text-xs"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 1.8 + categoryIndex * 0.2,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        {category.description}
                      </motion.p>
                      
                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="bg-white/10 text-white/90 px-1.5 py-0.5 rounded-full text-xs font-medium border border-white/20"
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 2.0 + categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            whileHover={{ 
                              backgroundColor: "rgba(255, 255, 255, 0.2)",
                              transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-lg blur-xl -z-10`}
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 0.2,
                        scale: 1.05,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
