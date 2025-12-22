import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genisson Emilio | Portfolio",
  description: "Desenvolvedor Full-Stack e Criador de soluções em software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1 w-full max-w-7xl mx-auto px-5 pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}