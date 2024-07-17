import React from "react";

export const SwitchComponent = ({ valor }) => {
  const estiloInverno = {
    color: "white",
  };

  const estiloVerão = {
    color: "black",
  };

  const { summer } = valor;

  return (
    <>
    <hr />
    <br />
    
      <div>SwitchComponent</div>
      <br />
         {/*
           
           Para renderizar um boolean em React, primeiramente
            é necessário convertê-lo para string, usando o método
            .toString()

        */}
      <div style={{ fontWeight:'bold'}}>O valor toggleclima é : {valor.toString().toUpperCase()}</div>

      <div>
        {valor ? (
          <>
            <h1 style={estiloVerão}>Verão 🌞 </h1>
            
          </>
        ) : (
          <h1 style={estiloInverno}>Inverno 🌧 </h1>
        )}
      </div>
    </>
  );
};
