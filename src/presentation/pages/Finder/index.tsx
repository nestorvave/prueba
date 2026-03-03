import { Button } from "../../components/button/button";
import { TextInput } from "../../components/text-input/text-input";
import { useFinder } from "./hooks/useFinder";
import { FaRegStar } from "react-icons/fa";

export const Finder = () => {
  const { repos, isLoading, setUsername, fetchData, names, error } =
    useFinder();

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-xl font-medium mb-8">
        GitHub Repository Finder — Rubidex
      </h1>
      <section className="flex gap-3 mb-10 justify-center">
        <TextInput
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          name="user"
        />
        <Button label="Search" onClick={() => fetchData()} />
      </section>
      {error && <p className="text-sm text-red-600">{error}</p>}

      <section className="flex gap-10 items-start">
        <div className="flex-1 space-y-4">
          {isLoading && <p className="text-sm">Loading...</p>}

          {!isLoading && repos.length === 0 && (
            <p className="text-sm text-gray-600">No data available</p>
          )}

          {repos.map(
            (
              { name, description, stars, language, html_url },
              index: number,
            ) => (
              <a
                key={name + stars + index}
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="block bg-white border p-4 hover:shadow-sm transition"
              >
                <h3 className="font-medium mb-1">{name}</h3>

                <p className="text-sm text-gray-600 mb-2">
                  {description || "No description"}
                </p>

                <p className="text-sm text-gray-600 mb-2">
                  Language {language || "Unknown"}
                </p>

                <p className="text-sm flex items-center gap-1">
                  <FaRegStar /> {stars}
                </p>
              </a>
            ),
          )}
        </div>

        <aside className="w-64 bg-white border p-5">
          <h2 className="font-medium mb-4">Recent Search</h2>

          {names.length === 0 ? (
            <p className="text-sm text-gray-600">No recent searches yet</p>
          ) : (
            <div className="space-y-2">
              {names.map((name, index: number) => (
                <p
                  key={name + index}
                  onClick={() => fetchData(name)}
                  className="text-sm cursor-pointer hover:bg-gray-200"
                >
                  {name}
                </p>
              ))}
            </div>
          )}
        </aside>
      </section>
    </main>
  );
};
