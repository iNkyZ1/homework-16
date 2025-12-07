import { type FormEvent, type JSX, useState } from "react";

function SettingsPage(): JSX.Element {
  const [name, setName] = useState<string>(
    localStorage.getItem("userName") ?? ""
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    localStorage.setItem("userName", name);
  }

  return (
    <section>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <button type="submit">Save</button>
      </form>
    </section>
  );
}

export default SettingsPage;
