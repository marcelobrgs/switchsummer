import { useEffect, useState, useMemo } from "react";

export const UseMemoComponent = () => {
  const [text, setText] = useState("");
  const [number,setNumber] = useState(0);

  const digitar = (e) => {
    setText(e.target.value);
    console.log(e.target.value);   

  };

  const digitarNumero = (e) => {
    setNumber(e.target.value);
    console.log(e.target.value);   
  };
  

  const expensiveFunction = (n) => {
    console.log("running expensive function ");
    let total = 0;
    for (let i = 1; i < n; i++) {
      total += i;
      //console.log(` valor de i: ${i}`);
      //console.log(`total: ${total}`)
    }
    return total;
    
  };

  const sum = useMemo(() => expensiveFunction(number), [number])
  


  return (
    <>
      <div>
        <br />
        <label>digite um texto</label>
        <br />
        <input placeholder="digite um texto" onChange={digitar} />
        <br />
        
        <label>digite um número</label>
        <br />
        <input 
              placeholder="digite um numero" 
              value={number}
              type="number"
              onChange={digitarNumero} />
        <br />

        <label>total:</label>
        <p>{sum}</p>
        
        <br />
        <hr />
      </div>
    </>
  );
};
