"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Linkedin, Github, Loader2, CheckCircle } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // DADOS DO EMAILJS
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    if (formRef.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(
          () => {
            setLoading(false);
            setSuccess(true);
            formRef.current?.reset();
            setTimeout(() => setSuccess(false), 5000);
          },
          (error) => {
            console.error("Erro ao enviar email:", error);
            setLoading(false);
            setError(true);
          }
        );
    }
  };

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
                  <p className="text-slate-200">Brasil (Disponível)</p>
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

          {/* Lado Direito: Formulário Funcional */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 relative"
          >
            {/* Feedback de Sucesso (Overlay) */}
            {success && (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="absolute inset-0 bg-slate-900/90 z-10 flex flex-col items-center justify-center rounded-2xl text-center p-6"
               >
                  <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                  <p className="text-slate-400">Obrigado pelo contato. Responderei o mais breve possível.</p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="mt-6 text-sm text-primary hover:text-white underline"
                  >
                    Enviar nova mensagem
                  </button>
               </motion.div>
            )}

            <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Nome</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Seu nome"
                    className="w-full bg-background border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full bg-background border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Mensagem</label>
                <textarea 
                  rows={4} 
                  name="message"
                  required
                  placeholder="Como posso ajudar?"
                  className="w-full bg-background border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600 resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-primary rounded-lg text-white font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>Enviando... <Loader2 className="animate-spin" size={18} /></>
                ) : (
                  <>Enviar Mensagem <Send size={18} /></>
                )}
              </button>
              
              {error && (
                <p className="text-red-400 text-sm text-center mt-2">
                  Ocorreu um erro ao enviar. Tente novamente ou use o email direto.
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}