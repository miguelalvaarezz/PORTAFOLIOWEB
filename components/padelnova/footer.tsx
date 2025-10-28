"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-black mb-4">
              Padel <span className="text-[#D6E826]">Nova</span>
            </h3>
            <p className="text-gray-400 mb-4">
              El futuro del pádel en Madrid.
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Padel Nova. Todos los derechos reservados.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#instalaciones" className="text-gray-400 hover:text-[#D6E826] transition-colors">
                  Instalaciones
                </Link>
              </li>
              <li>
                <Link href="#reservas" className="text-gray-400 hover:text-[#D6E826] transition-colors">
                  Reservas
                </Link>
              </li>
              <li>
                <Link href="#torneos" className="text-gray-400 hover:text-[#D6E826] transition-colors">
                  Torneos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Información</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Madrid, España</li>
              <li>Horario: 7:00 - 23:00</li>
              <li>+34 910 123 456</li>
              <li>info@padelnova.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "Twitter"].map((social) => (
                <div
                  key={social}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#D6E826] transition-colors cursor-pointer"
                >
                  <span className="text-xs">{social[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

