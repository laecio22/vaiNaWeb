

const Card = (props) => {
  return (
    <article>
      <p>{props.nome}</p>
      <p>{props.imagem}</p>
      <p>{props.linkedin}</p>
    </article>
  )
}

export default Card