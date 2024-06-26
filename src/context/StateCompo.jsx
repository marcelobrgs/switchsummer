
import { Children } from 'react';
import { useState } from 'react';
import { counterContext } from './counterContext';


export const StateCompo = ( { children } ) => {
    const [counter, setCounter] = useState(0);

    const increment= ()=>{
        setCounter(prev=>prev+1);
    }
    const decrement= ()=>{
        setCounter(prev=>prev-1);
    }
    const reset= ()=>{
        setCounter(0);
    }
    
   // converter StateCompo em um provedor de contexto 
  return (
    <>
        <counterContext.Provider 
            value=  {
                {counter, increment , decrement , reset}
                        }>
            {children}
        </counterContext.Provider>
    </>
  )
}
