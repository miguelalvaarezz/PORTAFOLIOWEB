"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Calendar, Trophy } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Instalaciones", href: "#instalaciones" },
    { name: "Reservas", href: "#reservas" },
    { name: "Torneos", href: "#torneos" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/padelnova" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-[#D6E826] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-black font-black text-xl">P</span>
            </div>
            <span className={`text-xl md:text-2xl font-black transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}>
              Padel <span className="text-[#D6E826]">Nova</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  isScrolled ? "text-gray-700 hover:text-[#D6E826]" : "text-white hover:text-[#D6E826]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#reservas"
              className="bg-[#D6E826] text-black px-6 py-2 rounded-full font-bold hover:bg-[#C6D81F] transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Reservar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-[#D6E826] font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#reservas"
              className="block bg-[#D6E826] text-black px-6 py-3 rounded-full font-bold text-center"
            >
              Reservar Pista
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

