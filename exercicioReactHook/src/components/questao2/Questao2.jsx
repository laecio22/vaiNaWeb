import s from './questao2.module.scss'
import { useState } from 'react'

const Questao2 = () => {
  const [valor, setValor] =  useState('')
  return (
    <section className={s.container2}>
        <h2>2- Criação  de um  input  que  ao digitar no campo,  mostra o que  foi digitado na  interface  do  usuário</h2>
        <input type="text"  value={valor} onChange={(e)=>setValor(e.target.value)} />
        <p>{valor}</p>
    </section>
  )
}

export default Questao2