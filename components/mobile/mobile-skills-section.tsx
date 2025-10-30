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
    <section id="habilidades" ref={ref} className="relative pt-6 pb-4 bg-black px-4 mt-0 overflow-visible" data-disable-magnetic="true">
      {/* Background Image - extended to section 3 with clip path and black overlay */}
      <div className="absolute inset-0" style={{ top: '-400px', bottom: '0', zIndex: 1, clipPath: 'polygon(0% 100%, 0% 0%, 16.67% 4.38%, 33.33% 6.25%, 50% 5%, 66.67% 8.75%, 83.33% 12.5%, 100% 0%, 100% 100%)' }}>
        <Image
          src="/IMG_9901.webp"
          alt="Background"
          fill
          unoptimized
          priority
          sizes="100vw"
          className="object-cover"
          quality={90}
        />
        {/* Black overlay mask */}
        <div className="absolute inset-0 bg-black/70" style={{ zIndex: 1 }}></div>
      </div>

      {/* Diagonal transition to next section */}
      <div className="absolute -bottom-0.5 left-0 right-0 w-screen overflow-visible z-50">
        <svg
          className="w-full h-40"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          style={{ maxWidth: '100vw', transform: 'rotate(180deg)' }}
        >
          <path
            d="M0,0 L1200,0 L1200,200 Q1000,150 800,120 Q600,90 400,80 Q200,70 0,0 Z"
            fill="black"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="1000 1200"
            strokeDashoffset="0"
          />
        </svg>
      </div>

      <div className="relative max-w-lg mx-auto z-10">
        
        {/* Header */}
        <motion.div
          className="flex flex-col justify-center mb-6 relative z-50 -mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="text-center">
            <div>
              <motion.h2 
                className="text-2xl sm:text-3xl font-black mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.9, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
              >
                <span className="text-[#D6E826]">Resultados reales</span>{" "}
                <span className="text-white">para</span>
                <span className="text-white block">clubes reales.</span>
              </motion.h2>
              <motion.p 
                className="text-sm text-gray-300 leading-relaxed mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.9, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
              >
                Así luce un club de pádel digitalizado al 100%:{" "}
                <span className="block">moderno, automatizado y preparado para crecer.</span>
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Button */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <Link 
            href="/padelnova"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D6E826] text-black px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#C6D81F] transition-colors duration-300 shadow-lg hover:shadow-[#D6E826]/50"
          >
            <ArrowUpRight className="w-4 h-4" />
            Ver página de muestra
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div 
          className="-mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.0, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <Link href="/padelnova" target="_blank" rel="noopener noreferrer">
            <div className="w-full max-w-sm mx-auto aspect-[4/3] bg-black rounded-xl relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ zIndex: 5 }}>
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

      {/* Diagonal transition to next section */}
      <div className="absolute -bottom-0.5 -left-0 right-0 w-screen overflow-hidden z-50">
        <svg
          className="w-full h-40"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          style={{ maxWidth: '100vw', transform: 'rotate(180deg)' }}
        >
          <path
            d="M0,0 L1200,0 L1200,200 Q1000,150 800,120 Q600,90 400,80 Q200,70 0,0 Z"
            fill="black"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="1000 1200"
            strokeDashoffset="0"
          />
        </svg>
      </div>
    </section>
  );
}
