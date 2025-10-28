"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function MobileSkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section id="habilidades" ref={ref} className="py-16 bg-[#0f1f3a] px-4 -mt-16" data-disable-magnetic="true">
      <div className="max-w-lg mx-auto">
        
        {/* Header */}
        <motion.div
          className="flex flex-col justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="text-center">
            <motion.span 
              className="inline-block text-white text-xs font-light tracking-[0.3em] uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              03 DEMO
            </motion.span>
            <div>
              <motion.h2 
                className="text-2xl sm:text-3xl font-black mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.9, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
              >
                <span className="text-[#D6E826]">Resultados reales</span>{" "}
                <span className="text-white">para clubes reales.</span>
              </motion.h2>
              <motion.p 
                className="text-sm text-gray-300 leading-relaxed mb-6"
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
                  className="inline-flex items-center gap-2 bg-[#D6E826] text-black px-6 py-3 rounded-xl font-bold hover:bg-[#C6D81F] transition-colors duration-300 shadow-lg hover:shadow-[#D6E826]/50"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  Ver página de muestra
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
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
    </section>
  );
}
