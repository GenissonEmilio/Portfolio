"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Lado Esquerdo: Informações */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Vamos trabalhar <br />
              <span className="text-primary">juntos?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Estou sempre aberto a discutir novos projetos, ideias de produtos ou oportunidades de parceria técnica.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-primary border border-slate-800">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a href="mailto:officegenisson@gmail.com" className="text-slate-200 hover:text-primary transition-colors">
                    officegenisson@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-primary border border-slate-800">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Localização</p>
                  <p className="text-slate-200">Brasil (Disponível Remoto)</p>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="mt-10 flex gap-4">
              <Link 
                href="https://linkedin.com/in/genisson-emilio" 
                target="_blank"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </Link>
              <Link 
                href="https://github.com/GenissonEmilio" 
                target="_blank"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
              >
                <Github size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Lado Direito: Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Nome</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full bg-background border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Email</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com"
                    className="w-full bg-background border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Mensagem</label>
                <textarea 
                  rows={4} 
                  placeholder="Como posso ajudar?"
                  className="w-full bg-background border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600 resize-none"
                />
              </div>

              <button 
                className="w-full py-4 bg-primary rounded-lg text-white font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                Enviar Mensagem <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}