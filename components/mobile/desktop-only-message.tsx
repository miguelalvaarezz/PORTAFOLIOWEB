"use client";

import { Monitor } from "lucide-react";

export function DesktopOnlyMessage() {
  return (
    <div className="mobile-version min-h-screen flex justify-center bg-[#0f1f3a] px-8 pt-48">
      <div className="text-center space-y-12 max-w-md">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
            <Monitor className="w-12 h-12 text-blue-500" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-3xl font-black text-white leading-tight">
            Versión de Escritorio
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Este sitio está optimizado para <span className="text-blue-400 font-semibold">navegadores de escritorio</span>.
          </p>
        </div>

        {/* Line decoration */}
        <div className="flex items-center justify-center gap-2 pt-8">
          <div className="h-[1px] w-12 bg-white/20" />
          <div className="w-1 h-1 rounded-full bg-blue-500" />
          <div className="h-[1px] w-12 bg-white/20" />
        </div>
      </div>
    </div>
  );
}

