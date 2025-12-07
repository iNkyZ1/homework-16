import type { JSX } from "react";

function ProfilePage(): JSX.Element {
  const userName: string = localStorage.getItem("userName") ?? "Anonymous";
  const userEmail: string =
    localStorage.getItem("userEmail") ?? "unknown@example.com";

  return (
    <section>
      <h2>Profile</h2>
      <p>Name: {userName}</p>
      <p>Email: {userEmail}</p>
    </section>
  );
}

export default ProfilePage;
