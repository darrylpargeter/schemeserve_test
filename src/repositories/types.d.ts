export interface Repositorie {
  stargazerCount: number;
  forkCount: number;
  url: string;
  name: string;
  id: string;
}

export interface RepositorieVars {
  searchTerm: string;
  pageLimit: number;
}

export interface RepositorieResponse {
  repositoryCount: number;
  nodes: Repositorie[];
  pageInfo: PageInfo;
}

export type RepositoreGetResponse = Response<RepositorieResponse>;
