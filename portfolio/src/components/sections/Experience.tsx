"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";

const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Define se o card fica na esquerda (par) ou direita (ímpar) em telas grandes
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col md:flex-row items-center justify-between md:justify-center w-full mb-8 relative",
        isLeft ? "md:flex-row-reverse" : ""
      )}
    >
      {/* 1. Lado Vazio */}
      <div className="hidden md:block w-5/12" />

      {/* 2. O Ponto Central (Nó) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background z-20 -translate-x-1/2 shadow-[0_0_15px_rgba(139,92,246,0.5)]"
      />

      {/* 3. O Card de Conteúdo */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? 50 : -50 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          "w-[calc(100%-40px)] ml-10 md:ml-0 md:w-5/12 bg-surface/50 backdrop-blur-sm border border-slate-800 p-6 rounded-xl hover:border-primary/50 transition-colors group",
          isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        )}
      >
        {/* Cabeçalho do Card */}
        <div className="flex flex-col gap-1 mb-4">
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">
            {experience.role}
          </h3>
          <div className="text-primary font-medium">{experience.company}</div>
          
          <div className="flex flex-wrap gap-3 text-sm text-slate-400 mt-2">
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {experience.startDate} - {experience.endDate}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {experience.location}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase size={14} /> {experience.type}
            </span>
          </div>
        </div>

        {/* Lista de Atividades */}
        <ul className="list-disc list-outside ml-4 space-y-2 text-slate-300 text-sm">
          {experience.description.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Título da Seção */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minha <span className="text-primary">Jornada</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Uma linha do tempo dos projetos acadêmicos, profissionais e pesquisas que moldaram minha experiência técnica.
          </p>
        </motion.div>

        {/* Container da Linha do Tempo */}
        <div className="relative max-w-5xl mx-auto">
          {/* A Linha Vertical Central (Background Line) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-900 to-transparent -translate-x-1/2 md:transform" />

          {/* Renderização dos Cards */}
          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}