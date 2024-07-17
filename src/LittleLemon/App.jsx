import React from 'react'
import { HeadingLittleLemon } from './HeadingLittleLemon'
import { useState } from 'react';

export const App = () => {
  const [word, setWord] = useState(false);

  const handleClick = ()=>{
    setWord(!word);
  }

  return (
    <>
    <h2>App Little Lemon 🍋</h2>
    <hr />
    <HeadingLittleLemon message={word}/>
    <button onClick={handleClick}>Clique aqui 🍋</button>
    </>
  )
}
