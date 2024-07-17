import { useContext } from 'react';
import { MealsContext } from './MealsContext'

export const Counter = () => {

    const { meals } = useContext(MealsContext);

    const teste = meals.length;
    
  return (
    <>
        <div>
            <h3>Componente Counter:</h3>
            <h2>Counter: {meals.length}  - teste counter: {teste}</h2>
        </div>
    </>
  )
}
