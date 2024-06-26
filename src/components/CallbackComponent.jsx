import { useState , useCallback } from "react";
import { Incrementar } from "./Incrementar";

export const CallbackComponent = () => {
  const [counter, setCounter] = useState(0);


  // useCallback memoriza a função 
  // necessita das dependências [ ] 
  // função não nomeada dentro de useCallback

  const incrementarPadre = useCallback( (valor) => {
      setCounter(contador => contador + valor);
    }, [ ],
  )
  

  return (
    <>
      <br></br>
      <h3>CallbackComponent</h3>
      <p>Componente pai</p>
      <br></br>
      
      {/*
      
      o componenete pai CallbackComponent está sendo atualizado pelo 
      componente filho, Incrementar.jsx

      incrementarPadre é um props, propriedades passadas de pai para filho

  */}
      
      <h3>Contador: {counter}</h3>
      <Incrementar incrementarPadre={incrementarPadre}></Incrementar>
      <hr></hr>
    </>
  );
};
