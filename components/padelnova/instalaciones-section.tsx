"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function InstalacionesSection() {
  const installations = [
    { 
      image: "/padelnova/Sky-padel-fabricante-oficial-de-las-pistas-de-padel-del-World-PAdel-Tour-en-Amsterdam-1.jpg",
      title: "Pistas Premium",
      description: "Instalaciones de categoría mundial"
    },
    { 
      image: "/padelnova/bar.jpg",
      title: "Bar a pie de pista",
      description: "Experiencia de primera clase"
    },
    { 
      image: "/padelnova/vestuarios.jpeg",
      title: "Vestuarios",
      description: "Completamente equipados"
    },
  ];

  return (
    <section id="instalaciones" className="pt-8 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Más acerca de{" "}
            <span className="text-[#D6E826]">PádelNova</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde PádelNova. Todas las comodidades para nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {installations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl group"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-2xl font-black text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
