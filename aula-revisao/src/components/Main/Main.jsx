import { useState } from "react";

const Main = () => {
  const [nome, setNome] = useState("Laecio");

  const mudarNome = () => {
     setNome('Mauro')
  }

  return (
    <main>
      <h2>{nome}</h2>
      <button onClick={mudarNome}>Mudar</button>
    </main>
  );
};

export default Main;
