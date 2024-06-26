import React from "react";


// memorizar o que ingressa para evitar novas renderizações
// { incrementarPadre } é uma props, passada pelo componente pai CallBAckComponent.jsx

export const Incrementar = React.memo( ({incrementarPadre}) => {
    console.log("novo render em filho incrementar")
  return (
    <>
    <p>Componente filho</p>
     
     {/* 
     no evento onclick foi necessário chamar uma função seta 
     pois são passados parâmetros dentro da função, valores 1 e 10 para incrementar

     incrementarPadre é disparado pelo componente filho
     atualizando no componente pai , counter
     o evento onClick do filho chama a função passada pelo componente pai
  */}
     
      <button className="meubotao" onClick={()=>incrementarPadre(1)}>Incrementar +1</button>
      <button className="meubotao" onClick={()=>incrementarPadre(10)}>Callback +10</button>
    </>
  );
}
);



