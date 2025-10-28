"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Cpu,
  ArrowUpRight
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
    <section id="habilidades" ref={ref} className="py-20 bg-[#0f1f3a]" data-disable-magnetic="true">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left: Header */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center h-full order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="text-center lg:text-left">
              <motion.span 
                className="inline-block text-white text-xs font-light tracking-[0.3em] uppercase mb-4 md:mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              >
                03 DEMO
              </motion.span>
              <div>
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.9, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
                >
                  <span className="text-[#D6E826]">Resultados reales</span>{" "}
                  <span className="text-white">para clubes reales.</span>
                </motion.h2>
                <motion.p 
                  className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0 mb-6"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.9, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
                >
                  Así luce un club de pádel digitalizado al 100%:
                  moderno, automatizado y preparado para crecer.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.9, delay: 1.3, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Link 
                    href="/padelnova"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#D6E826] text-black px-8 py-4 rounded-xl font-bold hover:bg-[#C6D81F] transition-colors duration-300 shadow-lg hover:shadow-[#D6E826]/50"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                    Ver página de muestra
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills Column */}
          <motion.div 
            className="lg:col-span-7 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.0, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
              <Link href="/padelnova" target="_blank" rel="noopener noreferrer">
                <div className="w-full aspect-[4/3] bg-black rounded-2xl relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ isolation: 'isolate', zIndex: 50 }}>
                  <Image 
                    src="/padelnovabox.png" 
                    alt="Padel Nova Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            </motion.div>

        </div>
      </div>
    </section>
  );
}
