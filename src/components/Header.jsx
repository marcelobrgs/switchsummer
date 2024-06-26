import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/counterContext'




export const Header = ({ children }) => {
  
  // destructuring das funções de counterContex usando useContext
  // useContext do React acessa counterContext.jsx
  const { counter , increment , decrement , reset } = useContext(counterContext);

  return (
    <>
    <div>
    <h1>Header {children}</h1>
    <h4>Contador: {counter}</h4>
    <button onClick={ increment}>incrementar</button>
    <button  onClick={ decrement}>decrementar</button>
    <button  onClick={ reset}>reset</button>
    </div>
    

    </>
    
  )
}
