import type { JSX } from "react";
import { Link } from "react-router-dom";

function NotFoundPage(): JSX.Element {
  return (
    <section>
      <h2>404 - Page not found</h2>
      <p>Страница не найдена.</p>
      <Link to="/">Go to Home</Link>
    </section>
  );
}

export default NotFoundPage;
