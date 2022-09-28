import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10, // 10 sec
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider {...{ client }}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
