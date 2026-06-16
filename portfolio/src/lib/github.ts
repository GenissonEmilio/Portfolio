export type GithubRepository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "GenissonEmilio";

export async function getGithubRepositories(): Promise<GithubRepository[]> {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&type=owner`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: {
        revalidate: 60 * 60 * 6,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Nao foi possivel carregar os repositorios do GitHub.");
  }

  const repositories = (await response.json()) as GithubRepository[];

  return repositories
    .filter((repository) => !repository.archived)
    .sort(
      (first, second) =>
        new Date(second.updated_at).getTime() -
        new Date(first.updated_at).getTime()
    );
}
