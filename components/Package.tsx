import { useHelloQuery } from "use-query-issue";

export default function Package() {
  const { data, isLoading } = useHelloQuery({});

  return (
    <div>
      <h1>Package fetch</h1>
      {!isLoading && data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
