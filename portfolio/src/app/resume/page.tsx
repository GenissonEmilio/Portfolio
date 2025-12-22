"use client";

import { motion } from "framer-motion";
import { Download, Mail, MapPin, Linkedin, Github, ExternalLink, Calendar, Building2 } from "lucide-react";
import Link from "next/link";
// Importamos os dados que já temos para não reescrever
import { experiences } from "@/data/experience"; 

export default function ResumePage() {
  return (
    <div className="pt-24 pb-20 container mx-auto px-4">
      
      {/* --- CABEÇALHO DA PÁGINA (Ação de Download) --- */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-bold text-slate-100">Meu Currículo</h1>
          <p className="text-slate-400 mt-2">
            Uma visão detalhada da minha trajetória acadêmica e profissional.
          </p>
        </div>
        
        {/* Botão de Download Real */}
        {/* Certifique-se de que o arquivo "curriculo.pdf" esteja na pasta "public" */}
        <a 
          href="/curriculo.pdf" 
          download="Curriculo_Genisson.pdf"
          className="group flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
          Baixar PDF
        </a>
      </div>

      {/* --- A "FOLHA" DO CURRÍCULO DIGITAL --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-auto bg-surface/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
      >
        {/* Detalhe visual de topo (Faixa colorida) */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />

        {/* 1. Header do Documento */}
        <header className="border-b border-slate-800 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Genisson</h2>
            <p className="text-xl text-primary font-medium">Full Stack Developer & IoT Enthusiast</p>
            <p className="text-slate-400 mt-4 max-w-lg text-sm leading-relaxed">
              Desenvolvedor focado em criar soluções escaláveis unindo web moderna e hardware. 
              Apaixonado por Visão Computacional, Sistemas Operacionais e Modelagem de Dados.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 text-sm text-slate-400">
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
              <Mail size={16} /> <span>officegenisson@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} /> <span>Sergipe, Brasil</span>
            </div>
            <Link href="https://linkedin.com" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Linkedin size={16} /> <span>linkedin.com/in/genisson-emilio</span>
            </Link>
            <Link href="https://github.com" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Github size={16} /> <span>github.com/GenissonEmilio</span>
            </Link>
          </div>
        </header>

        {/* 2. Educação (Fixo conforme seus dados) */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full" /> Educação
          </h3>
          
          <div className="relative border-l border-slate-800 ml-3 pl-8 pb-2">
            {/* Item Educação */}
            <div className="relative">
              <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-primary" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="text-lg font-bold text-slate-200">Bacharelado em Sistemas de Informação</h4>
                <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full w-fit">2023 - Presente</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 mb-2">
                <Building2 size={16} />
                <span>Instituto Federal de Sergipe (IFS)</span>
              </div>
              <p className="text-slate-500 text-sm">
                Foco em Engenharia de Software, Estrutura de Dados e Redes de Computadores.
                Monitoria em Algoritmos e Pesquisa em IoT.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Experiência (Puxando do src/data/experience.ts) */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full" /> Experiência Profissional
          </h3>
          
          <div className="space-y-8 border-l border-slate-800 ml-3 pl-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                 <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-600" />
                 
                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h4 className="text-lg font-bold text-slate-200">{exp.role}</h4>
                    <span className="text-sm text-slate-500">{exp.startDate} - {exp.endDate}</span>
                 </div>
                 
                 <div className="text-primary text-sm font-medium mb-3">{exp.company}</div>
                 
                 <ul className="list-disc list-outside ml-4 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-400 text-sm leading-relaxed pl-2">
                        {item}
                      </li>
                    ))}
                 </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Skills (Lista compacta) */}
        <section>
          <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full" /> Skills & Tecnologias
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-slate-300 font-semibold mb-3">Backend & Systems</h4>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Java", "Python", "Spring Boot", "MySQL", "PostgreSQL", "C++ (Arduino)"].map((tech) => (
                   <span key={tech} className="px-3 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700">
                     {tech}
                   </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-slate-300 font-semibold mb-3">Frontend & Design</h4>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Figma", "Framer Motion"].map((tech) => (
                   <span key={tech} className="px-3 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700">
                     {tech}
                   </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </motion.div>
    </div>
  );
}