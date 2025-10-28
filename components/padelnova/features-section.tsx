"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Smartphone, Trophy } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Reservas Online",
    description: "Reserva tu pista desde tu móvil en menos de 30 segundos. Pago automático y confirmación instantánea.",
    color: "from-[#D6E826] to-[#C6D81F]",
  },
  {
    icon: Trophy,
    title: "Torneos Activos",
    description: "Participa en nuestros torneos mensuales. Registro online, clasificaciones en tiempo real.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Zap,
    title: "Sistema Automático",
    description: "Todo automatizado. Sin esperas, sin complicaciones. El futuro del pádel está aquí.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Reservas Seguras",
    description: "Protección de datos, pagos seguros y sistema de respaldo garantizado.",
    color: "from-gray-700 to-gray-900",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#D6E826] text-xs font-light tracking-[0.3em] uppercase mb-4 block">
            Tecnología
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Todo en un{" "}
            <span className="text-[#D6E826]">clic</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnología de última generación para ofrecerte la mejor experiencia posible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

