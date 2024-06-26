/*
 recebe os filhos children
 componente que vai prover deste context aos filhos
 prover aos seu filhos
 receber pelas props os filhos

 vamos receber os children
 vamos prover a todos os filhos que estão envolvidos
 no provider

 vamos passar o usuário como value
 passa do provider aos filhos o usuário

 como usuário: usuário , se escreve apenas usuário

 provemos com o provider para todos que estão abaixo
 estrutura de árvore

 */

 import { useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

export const UsuarioProvider = ({children}) => {
    
 const [usuario, setUsuario] = useState({})
  
  return (
    <>
        <UsuarioContext.Provider value={{usuario, setUsuario, pais:'brasil' , moneda:'real' }}>
            {children}
        </UsuarioContext.Provider>
    </>
  )
}
