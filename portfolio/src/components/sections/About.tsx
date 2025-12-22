"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- COLUNA DA ESQUERDA (TEXTO) --- */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Título "Sobre Mim" */}
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-widest uppercase text-sm"
            >
              Sobre Mim
            </motion.h2>

            {/* Tagline / Frase de Impacto */}
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold text-slate-100 leading-tight"
            >
              Apaixonado por construir soluções inovadoras na interseção de <span className="text-primary">Engenharia de Software</span>, <span className="text-secondary">IoT</span> e <span className="text-purple-400">Visão Computacional</span>.
            </motion.h3>

            {/* Os 3 Parágrafos de Bio */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 space-y-4 text-lg leading-relaxed text-justify"
            >
              <p>
                Olá! Eu sou Genisson, atualmente cursando <strong>Sistemas de Informação</strong> no <strong>Instituto Federal de Sergipe (IFS)</strong>. Com um forte interesse em arquitetura de dados e desenvolvimento full-stack, adoro criar experiências digitais que não apenas funcionam, mas que resolvem problemas reais de forma eficiente e escalável.
              </p>
              
              <p>
                Minha jornada técnica é marcada pela curiosidade em sistemas complexos. Tenho me aprofundado no estudo de <strong>Visão Computacional (ViT)</strong> e no desenvolvimento de soluções IoT, como o projeto SPARC, onde integrei hardware e software para monitoramento inteligente em campus universitário. Essas experiências fortaleceram minha capacidade de unir teoria acadêmica à implementação prática.
              </p>

              <p>
                Além do código, sou um entusiasta da modelagem de dados (MER/DER) e sistemas operacionais. Acredito que a base sólida de engenharia é o que permite a inovação verdadeira. Estou sempre em busca de novos desafios onde possa aplicar meu conhecimento para impactar positivamente a comunidade e o ecossistema tecnológico local.
              </p>
            </motion.div>
          </div>

          {/* --- COLUNA DA DIREITA (FOTO + EDUCAÇÃO) --- */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-8 mt-8 lg:mt-0">
            
            {/* Círculo com Borda Gradiente e Foto */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative w-64 h-64 md:w-72 md:h-72"
            >
              {/* Borda Gradiente Animada (container atrás da imagem) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-purple-500 to-pink-500 animate-pulse-slow p-1">
                <div className="w-full h-full rounded-full bg-background relative overflow-hidden">
                   {/* FOTO - Certifique-se de ter uma imagem em /public/profile.jpg */}
                   {/* Se não tiver imagem ainda, deixe o componente Image comentado e use a div cinza abaixo */}
                   
                   <Image 
                    src="/profile.jpg" 
                    alt="Genisson Profile" 
                    fill 
                    className="object-cover"
                   />
                   
                   {/* Placeholder temporário caso não tenha foto */}
                   <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
                      Photo Here
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Card de Educação */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-sm bg-surface/50 backdrop-blur-md border border-slate-800 rounded-xl p-4 flex items-center gap-4 hover:border-primary/50 transition-colors shadow-lg"
            >
              {/* Ícone da Instituição (Chapéu) */}
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <GraduationCap size={24} />
              </div>

              {/* Detalhes do Curso */}
              <div className="flex flex-col gap-1">
                <h4 className="text-slate-200 font-semibold text-sm">
                  Bacharelado em Sist. de Informação
                </h4>
                <p className="text-slate-400 text-xs">
                  Instituto Federal de Sergipe (IFS)
                </p>
                
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Calendar size={12} />
                    <span>2024 - Presente</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin size={12} />
                    <span>Sergipe, Brasil</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}