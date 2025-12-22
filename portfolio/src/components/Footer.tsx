"use client";

import { Code2, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-slate-800 bg-slate-950 text-center md:text-left">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 text-slate-200 font-bold">
          <Code2 className="text-primary" size={24} />
          Genisson<span className="text-primary">.</span>
        </div>

        <div className="text-slate-500 text-sm flex items-center gap-1">
          <p>© {currentYear} Genisson. Built with</p>
          <Heart size={14} className="text-red-500 fill-red-500 mx-1" />
          <p>using Next.js & Tailwind</p>
        </div>

        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-primary transition-colors">Termos</a>
          <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}