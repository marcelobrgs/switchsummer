import { useState } from "react";
import { ExpensiveComponent } from "./ExpensiveComponent";

export const AppTutorial = () => {
  const [text, setText] = useState("");
  console.log("renderizando app tutorial");
  return (
    <>
    <h1>App Tutorial</h1>
      <input
        placeholder="digite aqui"
        onChange={(event) => { 
            setText(event.target.value); 
            console.log("variável text:" + text);
            console.log("event target value:"+text); 
            
        
        }}
      ></input>
      <ExpensiveComponent></ExpensiveComponent>
      <br></br>
      <hr />
    </>
  );
};
