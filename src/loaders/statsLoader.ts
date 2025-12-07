export interface StatsUser {
  id: number;
  name: string;
  email: string;
}

export async function statsLoader(): Promise<StatsUser> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!res.ok) {
    throw new Response("Failed to load stats", { status: 500 });
  }

  return res.json() as Promise<StatsUser>;
}
