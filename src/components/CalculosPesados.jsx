import { useMemo, useState } from "react";

export const CalculosPesados = () => {
  const [listaNumeros, setListaNumeros] = useState([2, 3, 5, 6, 8, 9]);
  const [show, setShow] = useState(true);

  const getCalculo = (listaNumeros) => 
    useMemo(()=>{
        return listaNumeros.reduce((a,b) =>a*b)

    },[listaNumeros])



  const agregarNumero = () => {
    console.log(listaNumeros);
    setListaNumeros([
      ...listaNumeros,
      listaNumeros[listaNumeros.length - 1] + 1,
    ]);

    console.log(listaNumeros[listaNumeros.length - 1]);
  };

  return (
    <>
      <h2>Calculo</h2>
      <h2>{getCalculo(listaNumeros)}</h2>
      <br></br>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>{show ? "Show" : "Hide"}</button>
      <button className="btn btn-primary" onClick={() => agregarNumero()}>Agregar números</button>
      <hr></hr>
    </>
  );
};
