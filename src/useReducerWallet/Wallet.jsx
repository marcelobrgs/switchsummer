import { useReducer } from "react";
import { ReducerComponent } from "./ReducerComponent";

const initialState = { money: 500 };

export const Wallet = () => {
  const [state, dispatch] = useReducer(ReducerComponent,  initialState);

  const meuEstilo = {
    color:'black',
    backgroundColor:"white",
    padding:'9px',
    borderRadius:'12px'

  }

  
  let corDeFundo;
  let corDaFonte;
  

if(state.money <0) {
    corDeFundo = "red";
    corDaFonte = "white";
} 
else if(state.money > 500) {
    corDeFundo = "blue";
    corDaFonte = "white";
}  
else{
    corDeFundo = "white";
    corDaFonte= "black";
}

  return (
    <>
    <br />
      <h3>Wallet : <span style={{backgroundColor:corDeFundo , padding:'10px' , color:corDaFonte , borderRadius:'19px'}}>{state.money}</span> </h3>
      <br />
      <button onClick={() => dispatch({ type: "ride" })}>Increment</button>
      <button onClick={() => dispatch({ type: "fuel" })}>Decrement</button>
    </>
  );
};
