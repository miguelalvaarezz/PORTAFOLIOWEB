"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Heart, Code2 } from "lucide-react";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsAppMessage = encodeURIComponent('Buenas Miguel, me interesa conocer cómo podría transformar mi club de pádel con una web moderna, con reservas automáticas y torneos online.\n¿Podríamos agendar una demo gratuita para verlo en acción?\n¡Gracias!');
  const whatsAppUrl = `https://wa.me/34695537321?text=${whatsAppMessage}`;

  const socialLinks = [
    { icon: Mail, href: "mailto:miguelalvaarezz@gmail.com", label: "Email", color: "hover:text-red-400" },
    { icon: WhatsAppIcon, href: whatsAppUrl, label: "WhatsApp", color: "hover:text-green-400" },
  ];

  const quickLinks = [
    { href: "#sobre-mi", label: "1. Problemas" },
    { href: "#proyectos", label: "2. Soluciones" },
    { href: "#habilidades", label: "3. Demo" },
    { href: "#skills", label: "4. Proceso" },
    { href: "#yo", label: "5. About Me" },
    { href: "#contacto", label: "6. Contacto" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="py-12 md:py-20">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-5 order-2 lg:order-1"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.0, 
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
              >
                <Link href="/" className="flex items-center space-x-3 group mb-6 md:mb-8">
                  <motion.div 
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-blue-500 rounded group-hover:border-blue-400 transition-colors duration-300"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-lg md:text-xl font-bold text-blue-500 group-hover:text-blue-400 transition-colors duration-300">
                      M
                    </span>
                  </motion.div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-xl md:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      Miguel
                    </span>
                    <span className="text-xl md:text-2xl font-light text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Álvarez
                    </span>
                  </div>
                </Link>
              </motion.div>
              
              <motion.p 
                className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
              >
                Diseñador gráfico y desarrollador web especializado en crear 
                experiencias digitales excepcionales para clubes de pádel.
              </motion.p>

              {/* Social Links */}
              <motion.div 
                className="flex space-x-3 md:space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
              >
                {socialLinks.map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 md:w-12 md:h-12 bg-gray-900 border border-gray-800 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} hover:border-gray-700 hover:bg-gray-800`}
                      whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 1.0 + index * 0.1,
                        ease: [0.34, 1.56, 0.64, 1]
                      }}
                      viewport={{ once: true }}
                      aria-label={social.label}
                    >
                      <SocialIcon className="w-4 h-4 md:w-5 md:h-5" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="lg:col-span-3 order-1 lg:order-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-white mb-8">Enlaces</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="lg:col-span-4 order-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-white mb-8">Contacto</h4>
              <div className="space-y-4 text-gray-400">
                <motion.a
                  href="mailto:miguelalvaarezz@gmail.com"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="hover:text-white transition-colors duration-300 cursor-pointer block"
                >
                  miguelalvaarezz@gmail.com
                </motion.a>
                <motion.a
                  href="tel:+34695537321"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="hover:text-white transition-colors duration-300 cursor-pointer block"
                >
                  +34 695 537 321
                </motion.a>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Lanzarote, España
                </motion.p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-900 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <motion.p
              className="text-gray-500 text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              © {currentYear} Miguel Álvarez. Todos los derechos reservados.
            </motion.p>

            {/* Made with love */}
            <motion.div
              className="flex items-center space-x-2 text-gray-500 text-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>y</span>
              <Code2 className="w-4 h-4 text-blue-500" />
            </motion.div>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-500 hover:text-white transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
            >
              <span className="text-sm">Volver arriba</span>
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </motion.button>

          </div>
        </motion.div>

      </div>
    </footer>
  );
}
