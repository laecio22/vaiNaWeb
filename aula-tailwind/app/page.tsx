const Home = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl">Aula estilo e responsividade</h1>
      <a href="https://nextjs.org/" target="_blank">
        Next - É um framework criado pela Vercel para aprimorar aplicações
        feitas com React.
      </a>
      <a href="https://tailwindcss.com/" target="_blank">
        {" "}
        Tailwind - é um framework de CSS baseado em classes utilitárias. Você
        estiliza direto no HTML/JSX, sem criar arquivos CSS para tudo.
      </a>
    </main>
  );
};

export default Home;
