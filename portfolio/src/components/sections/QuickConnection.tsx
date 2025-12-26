"use client";

import Link from "next/link"; 
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function QuickConnection() {
  return (
    <section className="py-20 bg-slate-950/50 border-t border-slate-800/50 mt-10">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-24">
          
          {/* Coluna da Esquerda: Nome/Marca */}
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-4 inline-block">
              Genisson<span className="text-primary">.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Transformando ideias em código e desafios em soluções inovadoras. Vamos construir o futuro juntos.
            </p>
          </div>

          {/* Colunas do Centro/Direita: Links e Contato */}
          <div className="flex flex-col sm:flex-row gap-16 md:gap-32">
            
            {/* Coluna 1: Quick Links */}
            <div>
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-6">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-4">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Experience", href: "/experience" },
                  { name: "Projects", href: "/projects" },
                  { name: "Resume", href: "/resume" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 2: Contato */}
            <div>
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-6">
                Contato
              </h3>
              <div className="flex flex-col gap-4">
                {/* Email */}
                <a 
                  href="mailto:officegenisson@gmail.com" 
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-primary/50 transition-colors">
                    <Mail size={14} />
                  </div>
                  officegenisson@gmail.com
                </a>

                {/* Telefone */}
                <a 
                  href="tel:+5579998459574" 
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-primary/50 transition-colors">
                    <Phone size={14} />
                  </div>
                  (79) 99845-9574
                </a>

                {/* Ícones Sociais (Lado a Lado) */}
                <div className="flex gap-4 mt-4">
                  <Link 
                    href="https://github.com/GenissonEmilio" 
                    target="_blank"
                    className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg hover:shadow-primary/20"
                  >
                    <Github size={20} />
                  </Link>
                  <Link 
                    href="https://linkedin.com/in/genisson-emilio" 
                    target="_blank"
                    className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all shadow-lg hover:shadow-[#0077b5]/20"
                  >
                    <Linkedin size={20} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}