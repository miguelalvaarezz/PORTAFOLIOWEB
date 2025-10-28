"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ArrowUpRight,
  MessageSquare,
  Eye,
  Code2,
  Rocket
} from "lucide-react";

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
  skills: string[];
}

const processSteps = [
  {
    icon: MessageSquare,
    title: "Hablamos de tu club y tus objetivos",
    description: "Una llamada rápida para entender qué necesitas exactamente.",
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-white/5 backdrop-blur-md border border-white/10",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/20",
  },
  {
    icon: Eye,
    title: "Creamos un preview gratuito y adaptado",
    description: "Visualiza tu web antes de decidir. Sin compromiso.",
    color: "from-violet-500 to-purple-500",
    gradient: "bg-white/5 backdrop-blur-md border border-white/10",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/20",
  },
  {
    icon: Code2,
    title: "Diseñamos, desarrollamos e integramos todo",
    description: "Todo en uno: diseño, código y sistemas integrados.",
    color: "from-[#D6E826] to-green-500",
    gradient: "bg-white/5 backdrop-blur-md border border-white/10",
    iconColor: "text-[#D6E826]",
    iconBg: "bg-[#D6E826]/20",
  },
  {
    icon: Rocket,
    title: "Publicamos y optimizamos para crecer",
    description: "Tu web online, tus sistemas funcionando y listos para escalar.",
    color: "from-orange-500 to-red-500",
    gradient: "bg-white/5 backdrop-blur-md border border-white/10",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/20",
  }
];

export function SkillsDuplicateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section id="skills" ref={ref} className="py-20 bg-[#0f1f3a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left: Header */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center h-full order-1 lg:order-2 mt-12"
            initial={{ opacity: 0, y: 30, x: -30 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 30, x: -30 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="text-center lg:text-left">
                <motion.span 
                className="inline-block text-blue-400 text-xs font-light tracking-[0.3em] uppercase mb-4 md:mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                04 STEP BY STEP
              </motion.span>
              <div>
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.9, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                >
                  Tu nueva web al completo, lista en menos de <span className="text-blue-600">4 semanas.</span>
                </motion.h2>
                <motion.p 
                  className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0 mb-8"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.9, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
                >
                  Un proceso simple. Resultados profesionales.
                </motion.p>
                
                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.9, delay: 1.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <button 
                    onClick={() => {
                      const contactElement = document.getElementById('contacto');
                      if (contactElement) {
                        contactElement.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }}
                    className="w-full sm:w-auto inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105 cursor-pointer"
                  >
                    Transforma el futuro de tu club
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                  <p className="text-sm text-gray-400 mt-3">
                    Sin compromiso, sin complicaciones.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills Column */}
          <motion.div 
            className="lg:col-span-7 order-2 lg:order-1 mt-12 -ml-12"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="space-y-5">
              {processSteps.map((step, stepIndex) => {
                const StepIcon = step.icon;
                return (
                  <motion.div 
                    key={stepIndex}
                    className="flex items-start gap-6"
                    initial={{ opacity: 0, x: -50, y: 20 }}
                    animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -50, y: 20 }}
                    transition={{ duration: 0.9, delay: 1.2 + stepIndex * 0.2, ease: [0.23, 1, 0.32, 1] }}
                  >
                    {/* Number badge - simple */}
                    <div className="flex-shrink-0 pt-2 w-16 flex items-start justify-center">
                      <span className="text-white font-black text-5xl leading-none text-center">{stepIndex + 1}.</span>
                    </div>
                    
                    {/* Card with gradient background */}
                    <motion.div
                      className={`relative ${step.gradient} border-2 border-transparent rounded-2xl p-5 flex-1 shadow-xl group overflow-hidden`}
                      whileHover={{ 
                        scale: 1.02,
                        borderColor: step.color.replace('from-', '').replace(' to-', '/30'),
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Icon container */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl ${step.iconBg} ${step.iconColor}`}>
                          <StepIcon className="w-6 h-6" />
                        </div>
                        <div className={`text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${step.color} text-white uppercase tracking-wider shadow-lg`}>
                          Paso {stepIndex + 1}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-black text-white leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm font-medium">
                          {step.description}
                        </p>
                      </div>

                      {/* Animated accent bar */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} rounded-b-2xl`} />
                      
                      {/* Decorative glow */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity`} />
                    </motion.div>
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

