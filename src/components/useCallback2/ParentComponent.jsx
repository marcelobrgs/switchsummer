import { useCallback } from "react";
import { ChildComponent } from "./ChildComponent";
import { useState } from "react";

export const ParentComponent = () => {

  const [clickCount, setClickCount] = useState(0);

  const handleClick = useCallback(() => {
    setClickCount(clickCount+1);
    console.log("clicou")
  }, [ clickCount]);

  const decrementar = useCallback(() => {
    setClickCount(clickCount+1);
    console.log("clicou")
  }, [ clickCount]);




  const teste = "teste";

  return (
                <>
                <div>ParentComponent</div>
                <h3>Contagem de cliques: {clickCount}</h3>
                <ChildComponent propDecrementar={decrementar} propIncrementar={handleClick} outraProp={teste} endereco="Rua tal"/>
                </>
  );
};
