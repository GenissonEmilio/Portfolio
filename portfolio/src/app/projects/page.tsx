import { Github, Layers3, Sparkles } from "lucide-react";
import ProjectRepositoryGrid from "@/components/ProjectRepositoryGrid";
import { getGithubRepositories, type GithubRepository } from "@/lib/github";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  let repositories: GithubRepository[] = [];

  try {
    repositories = await getGithubRepositories();
  } catch {
    repositories = [];
  }

  return (
    <main className="pt-28 pb-20">
      <section className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Github size={16} />
            Repositorios publicos do GitHub
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Projetos, estudos e experimentos em codigo aberto
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
            Aqui fica uma visao mais completa do que venho construindo:
            produtos web, estudos de arquitetura, automacoes e pequenos
            laboratorios que ajudam a transformar ideias em entregas reais.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-surface p-5">
            <Layers3 className="mb-4 h-7 w-7 text-primary" />
            <h2 className="text-base font-semibold text-white">
              Projetos vivos
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              A lista vem direto do GitHub, usando nome, descricao, links,
              linguagem principal e topicos dos repositorios.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-surface p-5">
            <Sparkles className="mb-4 h-7 w-7 text-primary" />
            <h2 className="text-base font-semibold text-white">
              Contexto antes do clique
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Cada card mostra o essencial para entender rapidamente o objetivo
              do repositorio antes de abrir o codigo.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-surface p-5">
            <Github className="mb-4 h-7 w-7 text-primary" />
            <h2 className="text-base font-semibold text-white">
              Carregamento gradual
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              A pagina comeca enxuta e o botao de ver mais revela novos
              projetos sem trocar de tela.
            </p>
          </div>
        </div>

        <ProjectRepositoryGrid repositories={repositories} />
      </section>
    </main>
  );
}
