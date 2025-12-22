import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Pessoal",
    description: "Portfolio pessoal desenvolvido com Next.js e TypeScript, apresentando projetos, experiências e habilidades técnicas.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/projects/portfolio-bg.png",
    repoUrl: "https://github.com/GenissonEmilio/portfolio",
    demoUrl: "https://genissondev.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "Morea Access Control",
    description: "Solução de hardware e software para controle de acesso via fechadura magnética de baixo custo. API robusta para gestão de usuários e logs de entrada.",
    techStack: ["NextJs", "C++ (Arduino)", "NestJs", "Prisma"],
    imageUrl: "/projects/morea-bg.png",
    repoUrl: "https://github.com/Morea-IFS/trancadura-web-react.git",
    demoUrl: "https://trancadura-web-react.vercel.app/",
    featured: true,
  },
  {
    id: "3",
    title: "Neural-bot (Vision Transformer)",
    description: "Implementação e estudo de arquitetura Vision Transformer para classificação de imagens, comparando performance com CNNs tradicionais.",
    techStack: ["Python", "PyTorch", "Computer Vision", "Jupyter"],
    imageUrl: "/projects/vit-bg.png",
    repoUrl: "https://github.com/GenissonEmilio/Neural-bot.git",
    featured: false,
  },
];