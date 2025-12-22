"use client";

import { TypeAnimation } from "react-type-animation";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava, FaPython, FaBootstrap, FaFlutter } from "react-icons/fa6";
import { SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiExpress, SiNestjs, SiSharp } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";

import MenuOptions from "@/components/layout/MenuOptions";
import ToolsIcons from "@/components/ui/ToolsIcons";
import ProjectBox from "@/components/ui/ProjectBox";
import ContactForm from "@/components/ui/ContactForm";
import NotebookScene from "@/components/3d/NotebookScene";

export default function Home() {
    return (
        <div id="home" className="flex flex-col gap-10 pb-10">
            {/* Seção Hero */}
            <section className="pt-10">
                <h1 className="text-2xl whitespace-nowrap font-bold">
                    Olá, eu sou Genisson Emilio
                </h1>

                <TypeAnimation 
                    sequence={[
                        'Desenvolvedor Full-Stack', 1000,
                        '', 500,
                        'Criador de soluções em software', 1000,
                        '', 500,
                        'Apaixonado por tecnologia', 1000,
                        '', 500
                    ]}
                    wrapper="h1"
                    cursor={true}
                    repeat={Infinity}
                    className="text-2xl inline-block text-blue-500 font-bold mt-2"
                />
                
                <p className="mt-4 text-lg text-gray-800 leading-relaxed max-w-3xl">
                    Bem vindo! Sou um desenvolvedor de software com experiência em desenvolvimento web. Comecei minha jornada em programação em 2021 e sou apaixonado por aprender a usar novas tecnologias. Estou sempre em busca de aprender novas tecnologias e habilidades. 
                </p>
            </section>

            {/* Seção Sobre */}
            <section id="sobre" className="scroll-mt-24">
                <MenuOptions name="Sobre mim"/>
                <h3 className="text-xl text-blue-700 font-bold mb-2">Um pouco sobre mim</h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                    Meu foco é em desenvolvimento usando tecnologias web como JavaScript, TypeScript, ReactJS entre outras.
                    <br />
                    Atualmente estou cursando Bacharelado em Sistemas de informação pelo:
                    <span className="pl-1">
                        <a href="https://www.ifs.edu.br" target="_blank" className="text-blue-700 hover:underline">IFS - Instituto Federal de Sergipe / SE - Brasil.</a>
                    </span>
                </p>

                <h3 className="text-xl text-blue-700 font-bold mt-8 mb-4">Tecnologias e Ferramentas</h3>
                <p className="text-lg text-gray-800 mb-6">
                    Usando uma combinação de tecnologias de ponta e software de código aberto confiável, crio aplicativos e sites de alto desempenho.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                    <ToolsIcons name="React JS" color="blue" icon={FaReact}/>
                    <ToolsIcons name="TypeScript" color="#0b57d0" icon={SiTypescript}/>
                    <ToolsIcons name="JavaScript" color="#fdd663" icon={SiJavascript}/>
                    <ToolsIcons name="Express" color="#000000" icon={SiExpress}/>
                    <ToolsIcons name="Tailwind CSS" color="#7eaaff" icon={SiTailwindcss}/>
                    <ToolsIcons name="Next JS" color="#000000" icon={SiNextdotjs}/>
                    <ToolsIcons name="Flutter" color="#02569B" icon={FaFlutter}/>
                    <ToolsIcons name="Bootstrap" color="#000000" icon={FaBootstrap}/>
                    <ToolsIcons name="Java" color="#EA2D2E" icon={FaJava}/>
                    <ToolsIcons name="Python" color="#FFD43B" icon={FaPython}/>
                    <ToolsIcons name="MySQL" color="#0b57d0" icon={GrMysql}/>
                    <ToolsIcons name="Git" color="#F05033" icon={FaGitAlt}/>
                    <ToolsIcons name="Node JS" color="green" icon={FaNodeJs}/>
                    <ToolsIcons name="HTML" color="#E34F26" icon={FaHtml5}/>
                    <ToolsIcons name="CSS3" color="#1572B6" icon={FaCss3Alt}/>
                    <ToolsIcons name="Spring Boot" color="#6DB33F" icon={BiLogoSpringBoot}/>
                    <ToolsIcons name="Nest JS" color="#E0234E" icon={SiNestjs}/>
                    <ToolsIcons name="React Native" color="blue" icon={TbBrandReactNative}/>
                    <ToolsIcons name="C#" color="#239120" icon={SiSharp}/>
                </div>
            </section>

            {/* Seção Projetos */}
            <section id="projetos" className="scroll-mt-24">
                <MenuOptions name="Projetos" />
                <h3 className="text-2xl font-bold mb-6 text-blue-700">O que eu Fiz</h3>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                        <ProjectBox name="E-commerce" description="E-commerce fullstack desenvolvido com Next.js, NestJS, Prisma, Tailwind CSS e TypeScript." link="https://github.com/GenissonEmilio/Ecommerce.git" />
                        <ProjectBox name="Portfolio" description="Um portifolio feito em React e TypeScript visando treinar e criar um local para disponibilidade dos meus projetos." link="https://github.com/GenissonEmilio/Portifolio.git" />
                        <ProjectBox name="API com Spring Boot" description="Uma API feita com Spring juntamente com o react." link="https://github.com/GenissonEmilio/API-Spring-Boot.git" />
                        <ProjectBox name="Site para Atletica" description="Um site feito para a atletica, utilizando React e TypeScript." link="https://github.com/GenissonEmilio/AASI-Repository.git" />
                    </div>
                </motion.div>
            </section>

            {/* Seção Contato */}
            <section id="contato" className="scroll-mt-24 mb-10">
                <MenuOptions name="Contato" />
                <h3 className="text-xl text-blue-700 font-bold mb-2">Me contate</h3>
                <p className="mb-10 text-lg text-gray-800">Se você gostou do meu trabalho ou quer conversar sobre alguma ideia, estou à disposição!</p>

                <div className="flex flex-col md:flex-row gap-10 items-start justify-between">
                    <div className="w-full md:w-1/2 max-w-[400px] mx-auto md:mx-0">
                        <ContactForm />
                    </div>

                    <div className="hidden md:block w-full md:w-1/2 h-[400px]">
                        <NotebookScene />
                    </div>
                </div>
            </section>
        </div>
    )
}