import { useState, useEffect } from "react";

const Main = () => {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [hora, setHora] = useState(new Date());
  const [quantidadeCliquesButton,  setQuantidadeCliquesButton] =  useState(0)

 //efeito  para  mostrar   o horário  atual
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
      console.log("teste");
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  //função  para  alterar  uma  mensagem caso  haja  alteração no  nome  e  indicar
  //a  quantidade  de  cliques  no botão 
  const mudarNome = () => {
    if (nome === "") {
      setMensagem("Informe  um  nome");
    } else {
      setMensagem(`Seja  bem vindo ${nome}`);
      setQuantidadeCliquesButton(quantidadeCliquesButton + 1)
    }
  };

  return (
    <main>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <p>{mensagem}</p>
      <p>Quantidade  de  cliques  para alterar  nome: {quantidadeCliquesButton}</p>
      <button onClick={mudarNome}>Mudar</button>
      <div style={{ textAlign: "center" }}>
        <h1>Relógio em tempo real</h1>
        <p>{hora.toLocaleTimeString("pt-BR")}</p>
      </div>
    </main>
  );
};

export default Main;
