import Questao1 from "../questao1/Questao1";
import Questao2 from "../questao2/Questao2";
import Questão3 from "../questao3/Questão3";
import s from "./main.module.scss";

const Main = () => {
  return (
    <main className={s.main}>
      <h1>Exercício React com hooks </h1>
      <Questao1/>
      <Questao2/>
      <Questão3/>
    </main>
  );
};

export default Main;
