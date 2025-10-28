"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2, Award, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export function MobileYoSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section
      id="yo"
      ref={sectionRef}
      className="relative bg-gray-50 pb-8 overflow-hidden -mt-12 px-4"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/padelnova/mejoresgolpes.jpg"
          alt="Background"
          fill
          className="object-cover opacity-5"
          quality={90}
        />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative max-w-lg mx-auto mt-40">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-blue-600 text-xs font-light tracking-[0.3em] uppercase">
            05 ABOUT ME
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-6">

          {/* Photo */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <div className="relative aspect-square w-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden">
              <Image
                src="/miguelalvarez.webp"
                alt="Miguel Álvarez - Diseñador y Desarrollador Web"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Subtle accent */}
            <motion.div
              className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-600/10 rounded-2xl -z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            />
          </motion.div>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.0,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full">
              <motion.div
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-sm text-gray-600 font-medium">Available for work</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Miguel Álvarez
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.0,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Designer & Developer
            </motion.p>
          </motion.div>

          {/* Bio */}
          <div className="mb-6">
            <div className="relative">
              <motion.p
                className={`text-sm text-gray-600 leading-relaxed text-center transition-all duration-300 ${isExpanded ? '' : 'line-clamp-4'}`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 1.2,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                Soy un diseñador y desarrollador web autodidacta de 17 años, con más de 3 años de experiencia creando experiencias web vanguardistas, inmersivas y cuidadosamente diseñadas para destacar. <strong>Considero el diseño web como una forma de arte digital:</strong> cada proyecto es una oportunidad para reflejar la identidad, los valores y la esencia de cada empresa. No creo en las páginas genéricas ni en las plantillas. <strong>Creo en diseños hechos desde cero, pensados para aumentar el valor percibido de las marcas y convertir visitantes en clientes reales.</strong> Mi objetivo es simple: transformar ideas en experiencias digitales completas que lleven la experiencia del cliente al siguiente nivel.
              </motion.p>
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 via-gray-50/20 to-transparent pointer-events-none" />
              )}
            </div>
            {!isExpanded ? (
              <div className="flex justify-center pt-4">
                <button
                  onClick={() => setIsExpanded(true)}
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  <ChevronDown className="w-6 h-6" />
                </button>
              </div>
            ) : (
              <div className="flex justify-center pt-4">
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  <ChevronUp className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: 2.0,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            className="pt-4 flex justify-center"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              data-cursor-magnetic
              className="group bg-blue-600 hover:bg-blue-700 text-white font-medium h-12 px-6"
            >
              Let's work together
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

