"use client";

import AboutSection from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import QuickConnection from "@/components/sections/QuickConnection";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-0 flex flex-col gap-10">
      
      {/* Parte Superior: Bio, Texto e Foto */}
      <AboutSection />
      
      {/* Divisor Visual (Opcional, linha sutil) */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      </div>

      {/* Parte Inferior: Grid de Skills */}
      <Skills />

      {/* Conexão Rápida / Rodapé Simples */}
      <QuickConnection />
    </div>
  );
}