
export const getStaticProps = async () => {
  const resp = await fetch('http://localhost:3000/api/random');
  const dados = await resp.json();

  return {
    revalidate: 10, // 10 Segundos
    props: {
      valor: dados.valor
    }
  }
}

const Estatico = props => {
  return (
    <div>
      <h1>Contéudo Estáticos</h1>
      <h2>ùltimo Valor = {props.valor}</h2>
    </div>
  )
}

export default Estatico;