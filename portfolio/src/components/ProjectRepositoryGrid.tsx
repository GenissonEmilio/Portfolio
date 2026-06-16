"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarClock,
  Code2,
  ExternalLink,
  GitFork,
  Github,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import type { GithubRepository } from "@/lib/github";

const INITIAL_VISIBLE_REPOSITORIES = 6;
const REPOSITORIES_PER_PAGE = 6;

type ProjectRepositoryGridProps = {
  repositories: GithubRepository[];
};

function formatRepositoryName(name: string) {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatUpdatedAt(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default function ProjectRepositoryGrid({
  repositories,
}: ProjectRepositoryGridProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_REPOSITORIES);

  const visibleRepositories = useMemo(
    () => repositories.slice(0, visibleCount),
    [repositories, visibleCount]
  );

  const hasMoreRepositories = visibleCount < repositories.length;

  if (repositories.length === 0) {
    return (
      <div className="rounded-xl border border-slate-800 bg-surface p-8 text-center">
        <Github className="mx-auto mb-4 h-10 w-10 text-primary" />
        <h2 className="text-xl font-semibold text-white">
          Repositorios indisponiveis no momento
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
          Nao consegui carregar os projetos do GitHub agora. Voce ainda pode
          acessar o perfil diretamente pelo botao abaixo.
        </p>
        <Link
          href="https://github.com/GenissonEmilio"
          target="_blank"
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary/30 px-4 py-2 text-sm font-medium text-primary transition hover:border-primary hover:bg-primary/10"
        >
          Abrir GitHub <ArrowUpRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleRepositories.map((repository, index) => {
          const tags = [
            repository.language,
            ...(repository.topics ?? []).slice(0, 3),
          ].filter(Boolean) as string[];

          return (
            <motion.article
              key={repository.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.04, 0.24) }}
              className="group flex min-h-[320px] flex-col rounded-xl border border-slate-800 bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <Code2 size={22} />
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <Star size={14} /> {repository.stargazers_count}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork size={14} /> {repository.forks_count}
                  </span>
                </div>
              </div>

              <h2 className="text-xl font-bold text-white transition group-hover:text-primary">
                {formatRepositoryName(repository.name)}
              </h2>

              <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-slate-400">
                {repository.description ??
                  "Projeto publico no GitHub. A descricao ainda nao foi preenchida no repositorio, mas o codigo esta disponivel para consulta."}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {tags.length > 0 ? (
                  tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))
                ) : (
                  <span className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-400">
                    Codigo publico
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-slate-800 pt-4 text-xs text-slate-500">
                <CalendarClock size={14} />
                Atualizado em {formatUpdatedAt(repository.updated_at)}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={repository.html_url}
                  target="_blank"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Ver repositorio <Github size={16} />
                </Link>

                {repository.homepage && (
                  <Link
                    href={repository.homepage}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-3 py-2.5 text-slate-300 transition hover:border-primary/60 hover:text-white"
                    aria-label={`Abrir demo de ${repository.name}`}
                    title="Abrir demo"
                  >
                    <ExternalLink size={17} />
                  </Link>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>

      {hasMoreRepositories && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((current) => current + REPOSITORIES_PER_PAGE)
            }
            className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-5 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
          >
            Ver mais projetos
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
              {repositories.length - visibleCount}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
