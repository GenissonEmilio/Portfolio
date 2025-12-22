import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Experience />
      <Projects />
      {/* Aqui virão as próximas seções conforme avançarmos:
        <AboutSection />
        <ProjectsSection />
      */}
    </div>
  );
}