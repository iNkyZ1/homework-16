import type { JSX } from "react";
import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout(): JSX.Element {
  return (
    <div>
      <h1>User Dashboard</h1>

      <nav style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
        <NavLink to="/dashboard/profile">Profile</NavLink>
        <NavLink to="/dashboard/settings">Settings</NavLink>
        <NavLink to="/dashboard/stats">Stats</NavLink>
      </nav>

      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default DashboardLayout;
