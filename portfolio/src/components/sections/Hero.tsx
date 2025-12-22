"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Cpu, Database } from "lucide-react";
import Link from "next/link";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function Hero() {
  // Lista de competências que serão digitadas
  const displayText = useTypewriter([
    "Full Stack Developer",
    "Computer Vision Enthusiast", // Referência ao seu interesse em ViT
    "IoT & Systems Architect",    // Referência ao projeto SPARC
    "Data Modeling Specialist",   // Referência ao MER/DER
  ]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden">
      
      {/* Background Elements (Grid sutil) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="container px-4 mx-auto text-center z-10 relative">
        
        {/* Badge "Open to work" ou similar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Disponível para novos projetos
        </motion.div>

        {/* Título Principal */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Olá, eu sou <br className="md:hidden" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500">
            Genisson
          </span>
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 font-mono h-[32px] mb-8 flex items-center justify-center gap-2"
        >
          <span className="text-primary">{">"}</span>
          <span>{displayText}</span>
          <span className="w-[3px] h-[24px] bg-primary animate-pulse ml-1" />
        </motion.div>

        {/* Descrição Curta */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-slate-400 mb-10 text-lg leading-relaxed"
        >
          Transformo conceitos complexos em interfaces modernas e sistemas robustos. 
          Focado em criar experiências digitais que unem performance, design e inteligência de dados.
        </motion.p>

        {/* Botões de Ação */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="/contact" 
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
          >
            Vamos conversar <ArrowRight size={18} />
          </Link>
          
          <Link 
            href="/resume" 
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-medium hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            Ver Currículo <Download size={18} />
          </Link>
        </motion.div>

        {/* Tech Stack Flutuante (Decorativo) */}
        <div className="mt-20 flex justify-center gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           {/* Ícones representativos - Você pode adicionar mais depois */}
           <div className="flex flex-col items-center gap-2">
              <Terminal size={32} />
              <span className="text-xs">Dev</span>
           </div>
           <div className="flex flex-col items-center gap-2">
              <Database size={32} />
              <span className="text-xs">Data</span>
           </div>
           <div className="flex flex-col items-center gap-2">
              <Cpu size={32} />
              <span className="text-xs">IoT/AI</span>
           </div>
        </div>
      </div>
    </section>
  );
}