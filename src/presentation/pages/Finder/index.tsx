import { Button } from "../../components/button/button";
import { TextInput } from "../../components/text-input/text-input";
import { useFinder } from "./hooks/useFinder";
import { FaRegStar } from "react-icons/fa";

export const Finder = () => {
  const { repos, isLoading, setUsername, fetchData, names, error, setRepos } =
    useFinder();

  return (
    <main className="min-h-screen p-6 md:p-10">
      <h1 className="text-lg md:text-xl font-medium mb-6 md:mb-8 text-center">
        GitHub Repository Finder — Rubidex
      </h1>

      <section className="flex flex-col sm:flex-row gap-3 mb-8 md:mb-10 justify-center">
        <TextInput
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          name="user"
          customSize="w-full md:w-52"
        />
        <Button label="Search" onClick={() => fetchData()} />
        <Button
          label="Clear"
          onClick={() => {
            setRepos([]);
            setUsername("");
          }}
        />
      </section>

      {error && (
        <p className="text-sm text-red-600 mb-6 text-center md:text-left">
          {error}
        </p>
      )}

      <section className="flex flex-col md:flex-row gap-8 md:gap-10 items-stretch md:items-start">
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
                className="block bg-white border rounded-lg p-4 hover:shadow-sm transition"
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

        <aside className="w-full md:w-64 bg-white border rounded-lg p-5">
          <h2 className="font-medium mb-4">Recent Search</h2>

          {names.length === 0 ? (
            <p className="text-sm text-gray-600">No recent searches yet</p>
          ) : (
            <div className="space-y-2">
              {names.map((name, index: number) => (
                <p
                  key={name + index}
                  onClick={() => fetchData(name)}
                  className="text-sm cursor-pointer hover:bg-gray-200 rounded px-2 py-1"
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
