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

export function MobileSkillsDuplicateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section id="skills" ref={ref} className="py-16 bg-[#0f1f3a] px-4">
      <div className="max-w-lg mx-auto">
        
        {/* Header */}
        <motion.div
          className="flex flex-col justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="text-center">
            <motion.span 
              className="inline-block text-blue-400 text-xs font-light tracking-[0.3em] uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              04 STEP BY STEP
            </motion.span>
            <div>
              <motion.h2 
                className="text-xl sm:text-2xl font-black text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
              >
                Tu nueva web al completo, lista en menos de <span className="text-blue-600">4 semanas.</span>
              </motion.h2>
              <motion.p 
                className="text-sm text-gray-300 leading-relaxed mb-6"
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
                <button className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                  Transforma el futuro de tu club
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-gray-400 mt-2">
                  Sin compromiso, sin complicaciones.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-4">
          {processSteps.map((step, stepIndex) => {
            const StepIcon = step.icon;
            return (
              <motion.div 
                key={stepIndex}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -50, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -50, y: 20 }}
                transition={{ duration: 0.9, delay: 1.2 + stepIndex * 0.2, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Number badge */}
                <div className="flex-shrink-0 pt-1 w-12 flex items-start justify-center">
                  <span className="text-white font-black text-4xl leading-none">{stepIndex + 1}.</span>
                </div>

                {/* Card */}
                <motion.div
                  className={`relative ${step.gradient} border-2 border-transparent rounded-2xl p-4 flex-1 shadow-xl group overflow-hidden`}
                  whileHover={{
                    scale: 1.02,
                    borderColor: step.color.replace('from-', '').replace(' to-', '/30'),
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon container */}
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-xl ${step.iconBg} ${step.iconColor}`}>
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <div className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${step.color} text-white uppercase tracking-wider shadow-lg`}>
                      Paso {stepIndex + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-white leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-xs font-medium">
                      {step.description}
                    </p>
                  </div>

                  {/* Animated accent bar */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} rounded-b-2xl`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

