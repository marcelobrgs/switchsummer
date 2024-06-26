
import React from "react";


export const Count = React.memo(  ({ text, count, numero}) => {

    console.log(`${numero}. Rendering ${text}`);
    
    return(
          <>
            <h3>{numero} - {text} - {count}</h3>
          
          </>
  ) 
  }
)


