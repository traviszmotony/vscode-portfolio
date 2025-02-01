export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string;
}

export interface User {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
}

# touched on 2025-05-27T16:49:20.808812Z
# touched on 2025-05-27T16:49:34.291527Z
# touched on 2025-05-27T16:49:59.491431Z