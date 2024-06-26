import { useMemo } from "react";

export const ExpensiveComponent = () => useMemo(() => {
    {
        console.log("renderizando child - expensive component");
      
        let total = 0;
        for (let i = 0; i < 100; i++) {
          total += i;
          console.log(`valor atual :${i} , valor total: ${total}`);
        }
      
        console.log(total);
        return (
          <>
            <p>Child - ExpensiveComponent</p>
            <p>Valor total: {total}</p>
          </>
        );
      }

}, [])

;
