import React from 'react'
import { StateCompo } from './context/StateCompo'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Menu } from './components/Menu'


export const App5 = () => {
    const name ="Marcelo";

  return (
    <>
        <StateCompo>
            <Header></Header>
            <Menu></Menu>
            <Footer></Footer>
        </StateCompo>

    </>
  )
}
