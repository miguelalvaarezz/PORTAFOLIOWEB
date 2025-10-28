"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#D6E826] text-xs font-light tracking-[0.3em] uppercase mb-4 block">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            ¿Listo para{" "}
            <span className="text-[#D6E826]">venir a jugar?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ven a visitarnos o contáctanos. Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: MapPin, title: "Ubicación", info: "Madrid, España" },
            { icon: Phone, title: "Teléfono", info: "+34 910 123 456" },
            { icon: Mail, title: "Email", info: "info@padelnova.com" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 p-8 rounded-3xl backdrop-blur-sm border border-gray-700"
            >
              <div className="w-16 h-16 bg-[#D6E826]/10 rounded-2xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-[#D6E826]" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.info}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

