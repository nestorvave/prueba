import { githubApi } from "../../../api/github.api";
import type {
  IGithubResponse,
  IGithubUi,
} from "../../model/github-repos/github-repos.interface";

export const getGithubRepos = async (
  username: string,
): Promise<IGithubUi[]> => {
  if (!username) {
    throw new Error("Username is required");
  }
  console.log(username);
  const { data } = await githubApi.get<IGithubResponse[]>(
    `/users/${username}/repos`,
  );

  return data.map(({ name, description, stargazers_count, language, html_url }) => ({
    name,
    description,
    stars: stargazers_count,
    language,
	html_url
  }));
};
