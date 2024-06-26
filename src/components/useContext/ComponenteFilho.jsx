import { useContext } from "react";
import { ContextMeuContexto } from "./ContextMeuContexto";

export const ComponenteFilho = () => {
  const meuObjeto = useContext(ContextMeuContexto);

  return (
    <>
      <ol>
        {meuObjeto.map(elemento=>{return(<li key={elemento.id}>{elemento.id} - {elemento.nome}</li>)})}
        <hr />
      </ol>
      <div>
        <p>Id: {meuObjeto.id}</p>
        <p>Nome: {meuObjeto.nome}</p>
      </div>
    </>
  );
};
