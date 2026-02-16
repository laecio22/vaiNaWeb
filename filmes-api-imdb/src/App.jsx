import { useEffect, useState } from "react";
import axios from "axios";
import "./Styles.scss";

/*
Chave de API -> Quem está fazendo a requisição? Essa pessoa tem permissão? Quanto você usou?

Variáveis de ambiente -> são valores sensíveis armazenado que podem mudar conforme o ambiente (desenvolvimento, produção e teste)

*/
import { FaSearch } from "react-icons/fa";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const App = () => {
  const [filmes, setFilmes] = useState([]);
  const [busca, setBusca] = useState("");
  const [buscaClick, setBuscaClick] = useState("");

  const clickBusca = () => {
    setBuscaClick(busca);
  }

  const filtrados = filmes.filter((item) => item.title.toLowerCase().includes(buscaClick.toLowerCase()))

  useEffect(() => {
    const buscarDados = async () => {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`,
      );

      try {
        setFilmes(dados.data.results);
        console.log(dados);
      } catch (error) {
        alert(`Desculpa  houve uma  falha, ${error}`);
      }
    };
    buscarDados();
  }, []);
  return (
    <>
      <header>
        <h1>
          Cine<span>VnW</span>
        </h1>
        <div className="divInput">
          <input
            type="text"
            placeholder="buscar filmes..."
            onChange={(e => setBusca(e.target.value))}
          />
          <FaSearch onClick={clickBusca} />
        </div>
      </header>
      <main>
        <section className="boxCard">
          {filtrados.map((item, id) => (
            <article className="card" key={id}>
              <div className="cardImage" >
                <span className="badge">
                  New
                </span>              
                  <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
                  alt={`Imagem  do filme ${item.title}`} />
                  <div className="play">
                    ▶️
                  </div>
              </div>
                  <h2>{item.title}</h2>
                  <h3>{Math.floor(item.vote_average)}</h3>
                  <div className="rating">
                    ⭐⭐⭐⭐☆
                  </div>
            </article>
          ))}
        </section>
      </main>
      <footer className="footer">
          <p>©Cine <span>VNW</span></p>
      </footer>
    </>
  );
};

export default App;
