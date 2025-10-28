"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Trophy, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/padelnova/fernando-belasteguin-finales-estrella-damm-valencia-open-2021_dsc7651-copia-1170x658-1.jpg"
          alt="Padel Nova"
          fill
          className="object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#D6E826]/10 text-[#D6E826] px-4 py-2 rounded-full font-black text-xs uppercase tracking-wider mb-8"
          >
            <MapPin className="w-4 h-4" />
            Madrid, España
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
          >
            <span className="block">
              El futuro del{" "}
              <span className="text-[#D6E826] inline-block relative">
                pádel
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-3 bg-[#D6E826]/20"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
            </span>
            <span className="block">empieza aquí</span>
          </motion.h1>

          {/* H2 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Instalaciones premium en el corazón de Madrid. 
            <span className="font-bold"> Reserva online, participa en torneos, vive el pádel.</span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              { icon: Calendar, label: "Reservas 24/7", value: "On-line" },
              { icon: Clock, label: "Horario", value: "7:00 - 23:00" },
              { icon: MapPin, label: "Pistas", value: "8 Pistas" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#D6E826]/10 rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-[#D6E826]" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#reservas"
              className="group bg-[#D6E826] text-black px-8 py-4 rounded-full font-black text-lg hover:bg-[#C6D81F] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Reservar Pista Ahora
              <Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#torneos"
              className="group bg-black text-white px-8 py-4 rounded-full font-black text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Ver Torneos
              <Trophy className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}

