import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "SPARC - Smart Campus",
    description: "Sistema IoT completo para monitoramento de consumo de água e energia em campus universitário. Inclui dashboards em tempo real e alertas de anomalias.",
    techStack: ["Next.js", "Django", "IoT", "PostgreSQL", "MQTT"],
    imageUrl: "/projects/sparc-bg.png",
    repoUrl: "https://github.com/SEU_USER/sparc",
    demoUrl: "https://sparc-demo.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "Morea Access Control",
    description: "Solução de hardware e software para controle de acesso via fechadura magnética de baixo custo. API robusta para gestão de usuários e logs de entrada.",
    techStack: ["Node.js", "C++ (Arduino)", "React", "MongoDB"],
    imageUrl: "/projects/morea-bg.png",
    repoUrl: "https://github.com/SEU_USER/morea-lock",
    featured: true,
  },
  {
    id: "3",
    title: "ViT - Vision Transformer",
    description: "Implementação e estudo de arquitetura Vision Transformer para classificação de imagens, comparando performance com CNNs tradicionais.",
    techStack: ["Python", "PyTorch", "Computer Vision", "Jupyter"],
    imageUrl: "/projects/vit-bg.png",
    repoUrl: "https://github.com/SEU_USER/vit-study",
    featured: false,
  },
];