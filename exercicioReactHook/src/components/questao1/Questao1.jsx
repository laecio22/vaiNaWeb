import s from './questao1.module.scss';
import { useState } from 'react';

const Questao1 = () => {
  const [isVisivel, setIsVisivel] =  useState(false)

  const toggleParagrafo = () => {  
    setIsVisivel(!isVisivel)
    
  }

  return (
    <section className={s.container1}>
      <h2>
       1- Criação de um componente para aparecer ou esconder parágrafo , de acordo
        com a ação do clique do botão
      </h2>
     
     <button onClick={toggleParagrafo}>{isVisivel ? 'Esconder': 'Mostrar'}</button>
     { isVisivel &&    <p>Texto visível</p>}
    
    </section>
  );
};

export default Questao1;
