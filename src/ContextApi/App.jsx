import { MealsProvider } from "./MealsProvider";
import { MealList } from "./MealList";
import { Counter } from "./Counter";

export const App = () => {

    const italico = {
        fontStyle: 'italic'
    }

  return (
    <>
      <h1 style={italico}>App Component</h1>
      <MealsProvider>
        <MealList/>
        <Counter/>  
      </MealsProvider>
    </>
  );
};
