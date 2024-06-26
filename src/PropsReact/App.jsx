import { Header } from "./Header"
import { Main } from "./Main"
import { Sidebar } from "./Sidebar"

export const App = () => {
    const lista =[
        { id:1, name:"Barcelos", age:45 } ,
        { id:2, name:"Carlos", age:55 } ,
];

 const hello = "Hello";
 const mensagem = "Esta é a sidebar"

    
  return (
    <>
        <h2>App</h2>
        <hr />
        <Header greet={hello}/>
        <Main lista={lista}/>
        <Sidebar message={mensagem}/>
    </>
  )
}
