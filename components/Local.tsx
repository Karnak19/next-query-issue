import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Local() {
  const { data, isLoading } = useQuery({
    queryKey: ["hello"],
    queryFn: () => axios.get("/api/hello").then((r) => r.data),
  });

  return (
    <div>
      <h1>Local fetch</h1>
      {!isLoading && data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
