"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Cpu, BrainCircuit, MonitorSmartphone } from "lucide-react"; // Ícones atualizados
import Link from "next/link";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function Hero() {
  // Lista de competências refinada com base no seu CV
  const displayText = useTypewriter([
    "Full Stack Developer",
    "AI & Deep Learning Researcher", // Muito mais forte que "Enthusiast"
    "IoT Solutions Architect",       // Referência ao SPARC/Morea
    "Mobile & Web Specialist",       // Referência ao Freelance (Java/Kotlin/React)
  ]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden">
      
      {/* Background Elements (Grid sutil) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="container px-4 mx-auto text-center z-10 relative">
        
        {/* Badge "Open to work" */}
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
          Pesquisador e Desenvolvedor focado em criar soluções que conectam <strong className="text-slate-200">Inteligência Artificial</strong>, <strong className="text-slate-200">Sistemas Web</strong> e <strong className="text-slate-200">IoT</strong>. 
          Transformo pesquisa acadêmica em produtos digitais de alto impacto.
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
            href="/curriculo.pdf" 
            target="_blank" // Abre em nova aba para não sair do site
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-medium hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            Ver Currículo <Download size={18} />
          </Link>
        </motion.div>

        {/* Tech Stack Flutuante (Atualizado com seus pilares reais) */}
        <div className="mt-20 flex justify-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           
           {/* Pilar 1: Web e Mobile (Freelance/Next.js/Kotlin) */}
           <div className="flex flex-col items-center gap-3 group cursor-default">
              <div className="p-3 rounded-2xl bg-slate-900/50 border border-slate-800 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                <MonitorSmartphone size={32} className="text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <span className="text-xs font-medium text-slate-500 group-hover:text-slate-300">Web & Mobile</span>
           </div>

           {/* Pilar 2: AI & Research (PIBIC/CNNs) */}
           <div className="flex flex-col items-center gap-3 group cursor-default">
              <div className="p-3 rounded-2xl bg-slate-900/50 border border-slate-800 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-colors">
                <BrainCircuit size={32} className="text-slate-400 group-hover:text-purple-400 transition-colors" />
              </div>
              <span className="text-xs font-medium text-slate-500 group-hover:text-slate-300">AI & Vision</span>
           </div>

           {/* Pilar 3: IoT & Hardware (SPARC/Morea) */}
           <div className="flex flex-col items-center gap-3 group cursor-default">
              <div className="p-3 rounded-2xl bg-slate-900/50 border border-slate-800 group-hover:border-pink-500/50 group-hover:bg-pink-500/10 transition-colors">
                <Cpu size={32} className="text-slate-400 group-hover:text-pink-400 transition-colors" />
              </div>
              <span className="text-xs font-medium text-slate-500 group-hover:text-slate-300">IoT Systems</span>
           </div>

        </div>
      </div>
    </section>
  );
} 