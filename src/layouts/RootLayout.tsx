import type { JSX } from "react";
import { Link, Outlet } from "react-router-dom";

function RootLayout(): JSX.Element {
  return (
    <div>
      <header style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
        <nav style={{ display: "flex", gap: "12px" }}>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>

      <main style={{ padding: "16px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
