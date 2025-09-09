import { TypeAnimation } from "react-type-animation";
import MenuOptions from "../components/layout/MenuOptions/MenuOptions";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiExpress, SiNestjs } from "react-icons/si";
import { FaGitAlt, FaJava, FaPython, FaBootstrap, FaFlutter } from "react-icons/fa6";
import { SiSharp } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import '../App.css';
import { GrMysql } from "react-icons/gr";
import ToolsIcons from "../components/layout/ToolsIcons/ToolsIcons";
import ProjectBox from "../components/ProjectCard/ProjectBox/ProjectBox";
import ContactForm from "../components/forms/ContactForm";
import NotebookCard from "../components/ProjectCard/NotebookCard/NotebookCard";
import { motion } from "framer-motion";

const Home: React.FC = () => {

    return (
        <div id="home" style={{ padding: '70px 20px 0 20px' }}>
            <h1 style={{ fontSize: '1.5rem', whiteSpace: 'nowrap' }}>
                Olá, eu sou Genisson Emilio
            </h1>

            <TypeAnimation 
                    sequence={[
                        'Desenvolvedor Full-Stack',
                        1000,
                        '',
                        500,
                        'Criador de soluções em software',
                        1000,
                        '',
                        500,
                        'Apaixonado por tecnologia',
                        1000,
                        '',
                        500
                    ]}
                    wrapper="h1"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1.5rem', display: 'inline-block', color: '#3B82F6' }}
                />
                <p>
                    Bem vindo! Sou um desenvolvedor de software com experiência em desenvolvimento web. Comecei minha jornada em programação em 2021 e sou apaixonado por aprender a usar novas tecnologias. Estou sempre em busca de aprender novas tecnologia e aprender novas habilidades. 
                </p>

                <div id="sobre">
                    <MenuOptions name="Sobre mim"/>
                    <h3>Um pouco sobre mim</h3>
                    <p>Meu foco é em desenvolvimento usando tecnologias web como JavaScript, TypeScript, ReactJS entre outras tecnologias.
                        <br />

                        Atualmente estou cursando Bacharelado em Sistemas de informação pelo:
                        <span className="textLink">
                            <a href="https://www.ifs.edu.br" target="_blank">IFS - Instituto Federal de Sergipe / SE - Brasil.</a>
                        </span>
                    </p>

                    <h3 style={{ paddingTop: '10px'}}>Tecnologias e Ferramentas</h3>
                    <p>Usando uma combinação de tecnologias de ponta e software de código aberto confiável, eu crio aplicativos e sites de alto desempenho e focados no usuário para smartphones, tablets e desktops.
                    </p>
                    <div className="iconBox">
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
                </div>

                <div id="projetos">
                    <MenuOptions name="Projetos" />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>O que eu Fiz</h3>

                    <motion.div id="projetos" 
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false }}>
                        <div className="projectGrid">
                            <div className="projectContent">
                                <ProjectBox name="E-commerce" description="E-commerce fullstack desenvolvido com Next.js, NestJS, Prisma, Tailwind CSS e TypeScript, integrando frontend moderno e responsivo com backend escalável e seguro." link="https://github.com/GenissonEmilio/Ecommerce.git" />
                            </div>
                            <div className="projectContent">
                                <ProjectBox name="Portfolio" description="Um portifolio feito em React e typeScript visando treinar e criar um local para disponibilidade dos meus projetos futuros." link="https://github.com/GenissonEmilio/Portifolio.git" />
                            </div>
                            <div className="projectContent">
                                <ProjectBox name="API com Spring Boot" description="Uma API feita com Spring juntamente com o react." link="https://github.com/GenissonEmilio/API-Spring-Boot.git" />
                            </div>
                            <div className="projectContent">
                                <ProjectBox name="Site para Atletica" description="Um site feito para a atletica, utilizando React e TypeScript." link="https://github.com/GenissonEmilio/AASI-Repository.git" />
                            </div>
                            
                        </div>
                    </motion.div>
                </div>

                <div id="contato" style={{ paddingBottom: '50px' }}>
                    <MenuOptions name="Contato" />
                    <h3>Me contate</h3>
                    <p style={{ paddingBottom: '50px' }} >Se você gostou do meu trabalho ou quer conversar sobre alguma ideia, estou à disposição! Entre em contato comigo por aqui ou pelas redes abaixo.</p>

                    <div className="contatoContainer">
                        <div style={{ width: '400px'}}>
                            <ContactForm />
                        </div>

                        <div className="contatoContent">
                            <NotebookCard />
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default Home;
