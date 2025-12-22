"use client";

import { motion } from "framer-motion";
// Importando ícones oficiais do pacote react-icons
import { FaReact, FaJava, FaPython, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiExpress, SiTailwindcss, SiNextdotjs, SiFlutter, SiMysql, SiSpringboot, SiNestjs, SiSharp } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  { name: "React JS", icon: FaReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Next JS", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Node JS", icon: FaNodeJs, color: "#339933" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "Nest JS", icon: SiNestjs, color: "#E0234E" },
  { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "C#", icon: SiSharp, color: "#239120" },
];

export default function Skills() {
  return (
    <section className="py-20 relative w-full">
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-slate-100">Skills Técnicas</h2>
          <p className="text-sm text-slate-500 uppercase tracking-widest">
            Skills que domino e aplico
          </p>
        </div>

        {/* Grid de Ícones (Pirâmide via justify-center) */}
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                y: -5, 
                borderColor: skill.color,
                boxShadow: `0 0 15px ${skill.color}40` // 40 é transparência hex
              }}
              className="w-24 h-24 bg-surface border border-slate-800 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 group"
            >
              <skill.icon size={32} style={{ color: skill.color }} className="filter grayscale group-hover:grayscale-0 transition-all duration-300" />
              <span className="text-[10px] font-medium text-slate-400 group-hover:text-slate-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}