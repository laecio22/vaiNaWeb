import s  from './main.module.scss'

const Main = () => {
  return (
    <main>
      <form className={s.main}>
        <h2>Cadastre um Instrutor</h2>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Imagem" />
        <input type="text" placeholder="Linkedin" />
        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
};

export default Main;
