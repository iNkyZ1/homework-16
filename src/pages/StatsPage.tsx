import type { JSX } from "react";
import { useLoaderData } from "react-router-dom";
import type { StatsUser } from "../loaders/statsLoader";

function StatsPage(): JSX.Element {
  const user = useLoaderData() as StatsUser;

  return (
    <section>
      <h2>Stats</h2>
      <p>User: {user.name}</p>
      <p>Email: {user.email}</p>
    </section>
  );
}

export default StatsPage;
