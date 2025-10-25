"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Palette, 
  Monitor,
  Server,
  Users
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
    skills: ["UI/UX Design", "Brand Identity", "Visual Design"]
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
    skills: ["User Research", "Prototyping", "Usability Test"]
  }
];

export function MobileSkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section id="habilidades-mobile" ref={ref} className="py-16 bg-black px-4 -mt-16">
      <div className="max-w-sm mx-auto px-6">
        
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="inline-block text-blue-400 text-xs font-light tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            03 Skills
          </motion.span>
          <div>
            <motion.h2 
              className="text-3xl font-black text-white mb-4"
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
              className="text-sm text-gray-300 leading-relaxed px-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Desde el diseño visual hasta el código que lo hace realidad, cada proyecto es un lienzo en blanco.
            </motion.p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            const blockRef = useRef(null);
            const blockIsInView = useInView(blockRef, { once: true, margin: "-50px" });
            
            return (
              <motion.div
                key={categoryIndex}
                ref={blockRef}
                className={`relative p-3 rounded-lg ${category.gradient} border border-white/10 backdrop-blur-sm group`}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50, scale: 0.9 }}
                animate={blockIsInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + categoryIndex * 0.1,
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
                {/* Icon and Title Row */}
                <div className="flex items-center gap-3 mb-3">
                  <motion.div 
                    className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center shadow-lg`}
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={blockIsInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -180 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.3 + categoryIndex * 0.1,
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                    whileHover={{ rotate: 5 }}
                  >
                    <CategoryIcon className="w-4 h-4 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-base font-bold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={blockIsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.4 + categoryIndex * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    {category.title}
                  </motion.h3>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <motion.p 
                    className="text-sm text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={blockIsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.5 + categoryIndex * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    {category.description}
                  </motion.p>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="bg-white/10 text-gray-300 px-2 py-1 rounded-md text-xs font-medium border border-white/20"
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={blockIsInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        whileHover={{ 
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          scale: 1.05,
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
                    opacity: 0.15,
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}