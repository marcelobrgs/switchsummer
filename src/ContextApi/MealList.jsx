
import { useContext } from "react";
import { MealsContext } from "./MealsContext";

export const MealList = () => {
  
    const { meals } = useContext(MealsContext);

  return (
    <>
      <div>
        <hr />
        <h1>Componente MealList</h1>
        <h3> Meals List using Context Api</h3>
        <ul>
          {meals.map((meal, index) => (
            <li key={index}>{meal}</li>
          ))}
        </ul>
      </div>
      <hr />
    </>
  );
};
