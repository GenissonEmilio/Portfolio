import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Desenvolvedor Full Stack IoT",
    company: "Projeto SPARC (Smart Campus)",
    location: "Campus Universitário",
    type: "Hybrid",
    startDate: "2025",
    endDate: "Present",
    description: [
      "Desenvolvimento de sistema de monitoramento de consumo de água e energia.",
      "Arquitetura utilizando Django (Backend) e Next.js (Frontend).",
      "Integração com dispositivos IoT para coleta de dados em tempo real.",
      "Implementação de dashboards analíticos para gestão de recursos."
    ],
    // logoUrl: "/logos/sparc.png" (Adicione depois se tiver)
  },
  {
    id: "2",
    role: "Pesquisador & Desenvolvedor",
    company: "Laboratório Morea",
    location: "Lab. de Inovação",
    type: "On-site",
    startDate: "2024",
    endDate: "2025",
    description: [
      "Desenvolvimento de fechadura magnética de baixo custo com controle de acesso.",
      "Criação de API para gerenciamento de usuários e logs de entrada.",
      "Modelagem de banco de dados para segurança e auditoria.",
    ],
  },
  {
    id: "3",
    role: "Estudante de Engenharia de Software",
    company: "Formação Acadêmica",
    location: "Universidade",
    type: "On-site",
    startDate: "2023",
    endDate: "Present",
    description: [
      "Foco em Visão Computacional (Vision Transformers - ViT).",
      "Estudos avançados em Sistemas Operacionais e Modelagem de Dados (MER/DER).",
      "Monitoria em disciplinas de algoritmos e estruturas de dados."
    ],
  }
];