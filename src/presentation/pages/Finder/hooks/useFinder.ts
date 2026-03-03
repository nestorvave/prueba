import { useState } from "react";
import { useHistoryStore } from "../../../../store/history";
import { getGithubRepos } from "../../../../domain/use-cases/github-repos/get-github-repos.use-case";
import type { IGithubUi } from "../../../../domain/model/github-repos/github-repos.interface";

/*  const { data, isLoading } = useQuery({
  queryKey: ["githubData"],
  queryFn: () => axios.get("https://api.github.com/users/username/repos"),
});
*/
export const useFinder = () => {
  const [repos, setRepos] = useState<IGithubUi[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const { addNames, names } = useHistoryStore();

  const fetchData = async (name?: string) => {
    const user = name ? name : username;
    try {
      setIsLoading(true);
      const data = await getGithubRepos(user);
      setRepos(data);
      addNames([user]);
    } catch (error) {
      setError("An error ocurrs during the request");
      setRepos([]);
    } finally {
      setIsLoading(false);
    }
  };

  return { repos, isLoading, setUsername, fetchData, username, names, error };
};
