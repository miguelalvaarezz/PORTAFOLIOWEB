"use client";

import { motion } from "framer-motion";
import { Award, Users, Star } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="pt-8 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center mb-16"
        >
          {/* Image Section */}
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <Image
              src="/padelnova/mejoresgolpes.jpg"
              alt="Padel Nova"
              fill
              className="object-cover"
            />
          </div>
          <div className="pt-24">
            <span className="text-[#D6E826] text-xs font-light tracking-[0.3em] uppercase mb-4 block">
              Quiénes Somos
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Instalaciones{" "}
              <span className="text-[#D6E826]">premium</span> en Madrid
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              En Padel Nova ofrecemos las mejores instalaciones de pádel de Madrid. 
              Contamos con 8 pistas de última generación, todas completamente cubiertas 
              y dotadas de iluminación LED de alta calidad.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Nuestra filosofía es simple: pádel de primera clase, para jugadores 
              que buscan la excelencia. Reserva tu pista, participa en nuestros torneos 
              y vive la experiencia completa del pádel moderno.
            </p>
            
            {/* Boxes below description */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Award, title: "8 Pistas Premium", description: "Todas cubiertas y climatizadas" },
                { icon: Users, title: "500+ Miembros", description: "Comunidad activa y competitiva" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-2xl border border-gray-100"
                >
                  <div className="w-12 h-12 bg-[#D6E826]/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#D6E826]" />
                  </div>
                  <h3 className="font-black text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-4">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

