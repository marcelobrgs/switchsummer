import { useReducer, useState } from "react";

const initialState = 0;

function reducer(state = initialState, action) {
    switch (action.type) {
        case "increment":
            console.log(" reducer - increment");
            return state+1;
        case "decrement":
            console.log('reducer - decrement')
            return state-1;
        default:
            throw new Error();    
    }
}

export const Counter = () => {
  //const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  /*
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
*/

  return (
    <>
      <p>Counter</p>
      <h1>UseReducerHook</h1>
      <h3>{state}</h3>
      <button onClick={()=> dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=> dispatch({type:'decrement'})}>Increment</button>
      
    </>
  );
};
