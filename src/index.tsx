import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";

import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
});

root.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>,
);
