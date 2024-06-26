import React from "react";
import { useContext } from "react";
import { counterContext } from "../context/counterContext";

export const Menu = () => {
  const { counter, reset } = useContext(counterContext);
  return (
    <>
      <hr></hr>
      <h3>Menu</h3>
      <p>
        Resultado de counter vindo de header: <br></br>
        {counter}
      </p>
      <p>Enviando reset de filho para pai</p>
      <button onClick={reset}>Reset</button>
      <p>Pode enviar informações de pai para filho e de filho para pai</p>
      <hr></hr>
    </>
  );
};
