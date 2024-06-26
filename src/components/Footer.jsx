import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/counterContext'

export const Footer = () => {
  // destructuring, busca o valor atual de counter
  // pode desestruturar as funções increment, decrement
  // usando o mesmo raciocínio
  // destructuring de counterContext em useContext
  const { counter } = useContext(counterContext)
  return (
    <>
    <h3>Footer</h3>
    <div>O contador é atualizado em Header <br></br> Resultado: {counter}</div>
    <br></br>
    <p>Estado passando de pai para filho na estrutura</p>
    </>
    
  )
}
