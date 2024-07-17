import Lista from "./Lista";
import { useState } from "react";

export const App = () => {
  // Código a ser passado para o componente Lista
  //let  codigoPesquisado = '2';

  //cria hook useState que atualiza o valor do mês selecionado
  const [mes, setMes] = useState("");

  // monitora mudanças no menu dropdown
  // objeto event tem informações sobre o evento disparado
  // o mesmo método é usado no input de texto e no menu dropdown
  const onChangeDropDown = (event) => {
    setMes(event.target.value);

    // a propriedade value armazena o valor atual do elemento dropdown
    {
      /*
        event.target.value 
        event: objeto event com informações sobre o evento
        target: emissor do evento, elemento html dropdown
        value: valor atual
        
        target = alvo
        elemento de entrada onde o evento aconteceu
        
        */
    }
    console.log("event target value : " + event.target.value);
    console.log("event target  :" + event.target);
    console.log("event   :" + event);
  };

  return (
    <div className="App">
      <h2>Aplicativo React - Selecione o mês</h2>
      <hr />
      <p>Componente Pai: App</p>
      <p>Passa ao componente filho o valor selecionado</p>

    <div className="resultado">
    <h4>Selecione um valor abaixo:</h4>
      <select
        id="dropdown"
        style={{ width: "100px" }}
        onChange={onChangeDropDown}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>

    </div>
      

      <br />
      <br />

      <form className="meuform">
        <div className="form-group">
          <h4>ou Digite abaixo um número:</h4>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Digite um número"
            onChange={onChangeDropDown}
            ></input>
          
          
        </div>
      </form>

      <Lista codigo={mes} />
    </div>
  );
};
