
import { FruitsList } from './FruitsList'

export const App = () => {

    const fruits = [
        {id:1, name:"Orange"},
        {id:2, name:"Apple"},
        {id:3, name:"Avocado"},
    ]
  return (
    <>
        <h2>App - componente pai</h2>
        <FruitsList lista={fruits}/>
    </>
  )
}
