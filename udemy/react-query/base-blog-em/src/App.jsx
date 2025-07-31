import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Posts } from "./Posts";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Blog &apos;em Ipsum</h1>
        <Posts />
      </div>
    </QueryClientProvider>
  );
}

export default App;
