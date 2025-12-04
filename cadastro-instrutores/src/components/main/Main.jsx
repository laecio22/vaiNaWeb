import s from "./main.module.scss";
import { useState } from "react";
import Card from "../card/Card";

const Main = () => {
  const [nome, setNome] = useState("");
  const [imagem, setImagem] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instrutores, setInstrutores] = useState([]);

  const submeterInstrutor = (e) => {
    e.preventDefault();
    const instrutorObject = {
      nome,
      imagem,
      linkedin,
    };

    setInstrutores([...instrutores, instrutorObject]);
    setNome("");
    setImagem("");
    setLinkedin("");
  };

  return (
    <main className={s.main}>
      <form onSubmit={submeterInstrutor}>
        <h2>Cadastre um Instrutor</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Imagem"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />
        <input
          type="text"
          placeholder="Linkedin"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
      <section className={s.section}>
        {instrutores.map((instrutor, index) => {
          return (
            <Card
              nome={instrutor.nome}
              imagem={instrutor.imagem}
              linkedin={instrutor.linkedin}
              key={index}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Main;
