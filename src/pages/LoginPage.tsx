import { type FormEvent, type JSX, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface LocationState {
  from?: string;
}

function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as LocationState | null;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", "John Doe");

    const redirectTo = state?.from ?? "/dashboard";
    navigate(redirectTo, { replace: true });
  }

  return (
    <section>
      <h2>Login</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 300,
          gap: 8,
        }}
      >
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default LoginPage;
