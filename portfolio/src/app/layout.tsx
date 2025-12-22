import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // <--- Importe aqui

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genilsson | Portfolio",
  description: "Desenvolvedor Full Stack...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar /> {/* <--- Adicione aqui */}
        
        <main className="min-h-screen flex flex-col relative overflow-hidden pt-16"> 
           {/* Adicionei pt-16 (padding-top) para o conteúdo não ficar escondido atrás da navbar fixa */}
           
           {/* Efeitos de fundo (Glow) */}
           <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10" />
           
           {children}
        </main>
      </body>
    </html>
  );
}