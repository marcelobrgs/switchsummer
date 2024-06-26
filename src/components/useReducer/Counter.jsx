import { useReducer } from "react";
import { ReducerComponent } from "./ReducerComponent";

export const Counter = () => {
  const [state, dispatch] = useReducer(ReducerComponent, { count: 0 });

  return (
    <>
      <h2>Contagem: {state.count}</h2>
      <button
        className="meubotao"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
      <button
        className="meubotao"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
    </>
  );
};
