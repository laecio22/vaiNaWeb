import { useState, useEffect } from "react";
import  axios  from 'axios'

const App = () => {
  const [produtos, setProdutos] =  useState([])

  useEffect(()=> {
    const buscarDados = async() => {
      try {
        const dados =  await axios.get('https://fakestoreapi.com/products')
        setProdutos(dados.data)
      //  console.log(dados, 'dados')
        
      } catch (error) {
        console.log(`Ocorreu um erro : ${error}` )
      }
    }
      buscarDados()
  }, [])

  return (
    <>
     {
      produtos.map((item)=> (
        <article>
           <img src={item.image} alt={item.title} />
           <h2>{item.title}</h2>
           <p>{item.description}</p>
           <span>{item.price}</span>
        </article>

      ))
     }
    </>
  );
};

export default App;
