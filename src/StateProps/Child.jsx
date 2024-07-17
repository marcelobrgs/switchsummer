

export const Child = ({message}) => {
  return (
    <>
    <hr />
        <div>Componente filho: Child</div>
        <br />
        <div>Mensagem recebida do componente pai:</div>
        <h2>{message}</h2>
        </>
  )
}
