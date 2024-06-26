import { useRef, useState } from "react";

export const Clicks = () => {
  // a variável start é inicialmente
  // definida como false
  // start pode ser true or false
  const [start, setStart] = useState(false);
  const [clicks, setClicks] = useState(0);
  console.log("total de click " + clicks);
  const [limiteClicks, setLimiteClicks] = useState(false);

  // o valor inicial da referencia é zero
  const ref = useRef(0);
  // retorna um objeto com propriedade current
  // .current retorna o valor atual de ref, que é zero
  console.log("useRef current value : " + ref.current);
  console.log(ref); // retorna current:0

  //função cliksCounter
  const clicsCounter = () => {
    //cada click de botão incrementa ref em + 1
    ref.current += 1;
    console.log("useRef current value : " + ref.current);

    setClicks((prev) => prev + 1);
    // outra forma de escrever a função acima:
    //setClicks(clicks + 1);

    console.log("total de clicks: " + clicks);

    if (ref.current >= 3) {
      setStart(true);
      document.body.style.backgroundcolor = "red";

      let mensagem = document.getElementById("mensagem");
      mensagem.innerText = "excedeu limite de clics";

      setLimiteClicks(true);
      let mensagem2 = document.getElementById("mensagem2");
      mensagem2.innerText = "surpresa";
    }

    // useRef é uma referência a valores
    // que não irá RENDERIZAR
    // se quiser Renderizar, useState
  };

  return (
    <>
      <h2>useRef</h2>
      <p>Contador é atualizado por useState</p>
      <h1>Total de Clicks: {clicks}</h1>
      <h2 className="surpresa" id="mensagem"></h2>
      {limiteClicks && <h2 className="surpresa">Excedeu o Limite de clics / useState </h2>}

      <p>
        .....................................................................
      </p>
      <p>
        useRef referencia à valores que <strong>NÃO renderizam</strong>{" "}
      </p>
      {start && <h1 className="surpresa">Limite de clics </h1>}

      <h2 className="surpresa" id="mensagem2"></h2>
      <button onClick={clicsCounter} className="meubotao">
        Add Click
      </button>
    </>
  );
};
