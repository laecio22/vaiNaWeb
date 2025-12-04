import s from './questao3.module.scss'
import { useState, useEffect } from 'react'

const Questão3 = () => {
    const [corAtual, setCorAtual] = useState('green')
    useEffect(()=>{
        const quadradoElement =  document.querySelector("#quadrado")
        quadradoElement.style.backgroundColor = corAtual

    }, [corAtual])

    const alterarCorFundo = () =>{
        if (corAtual === 'green') {
            setCorAtual('purple')
        } else {
            setCorAtual('green')
        }
    }
  return (
    <section className={s.container3}>
        <h2>3- Criar  um  componente  quadrado  que  muda  a  cor  do seu background,  depois  de  clicar  no botão mudar Cor</h2>
        <div className={s.quadrado} id='quadrado'>
        </div>
        <button onClick={ alterarCorFundo}>Mudar Cor</button>
    </section>
  )
}

export default Questão3