
import { MealsContext } from "./MealsContext"
import { useState } from "react";



export const MealsProvider = ({children}) => {
    
    const todaysMeals = [
        'Baked Beans',
        "Baked Sweet Potatos",
        'Baked Potatos',
        'Rosbife',
        'Alaminuta'
    ];
    
    const [meals , setMeals ] = useState(todaysMeals)

   
    {/*

    atenção:
    em MealsContext.Provider o value tem chaves dentro de chaves {{ }} 
    é um props com um destructuring  
    <MealsContext.Provider value={{meals}}> 
    
    */}
    
  return (
    <>
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    </>
  )
}
