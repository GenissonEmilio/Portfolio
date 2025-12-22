"use client";

import AboutSection from "@/components/sections/About"; // O componente da bio/foto
import Skills from "@/components/sections/Skills"; // O novo componente de grid

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 flex flex-col gap-10">
      
      {/* Parte Superior: Bio, Texto e Foto */}
      <AboutSection />
      
      {/* Divisor Visual (Opcional, linha sutil) */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      </div>

      {/* Parte Inferior: Grid de Skills */}
      <Skills />

    </div>
  );
}