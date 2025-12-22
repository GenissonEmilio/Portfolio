"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-slate-950/50">
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos em <span className="text-primary">Destaque</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Uma seleção de aplicações desenvolvidas focando em resolução de problemas reais e arquitetura escalável.
          </p>
        </motion.div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-xl bg-surface border border-slate-800 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Área da Imagem (Placeholder com Gradiente caso não tenha imagem real) */}
              <div className="h-48 w-full bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                {/* Ícone decorativo de fundo */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                  <FolderGit2 size={64} className="text-primary" />
                </div>
                
                {/* Overlay gradiente para legibilidade */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tags (Tech Stack) */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer com Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800/50">
                  <Link 
                    href={project.repoUrl} 
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <Github size={16} /> Código
                  </Link>
                  
                  {project.demoUrl && (
                    <Link 
                      href={project.demoUrl} 
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors ml-auto"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Botão "Ver Mais" para GitHub */}
        <div className="mt-16 text-center">
            <Link 
                href="https://github.com/SEU_USER" // Coloque seu user real aqui depois
                target="_blank"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
                Ver todos os repositórios no GitHub <ExternalLink size={16} />
            </Link>
        </div>

      </div>
    </section>
  );
}