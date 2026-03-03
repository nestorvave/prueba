import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Finder } from "./presentation/pages/Finder";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Finder />
    </QueryClientProvider>
  );
}

export default App;
