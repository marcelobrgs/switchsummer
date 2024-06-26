import { Title } from "./useCallBack/Title";
import { Button } from "./useCallBack/Button";
import { Count } from "./useCallBack/Count";
import { useState } from "react";
import { useCallback } from "react";

// ParentComponent é um container para os outros componentes

export const ParentComponent = () => {

  const [age, setAge] = useState(25);
  const [salary,setSalary] = useState(50000);


  // chamar use Callback nas funções incrementAge e incrementSalary
  /*
  usecallback( function, [dependencies])

  sintaxe
    useCallback(
    ( ) => {
      first
    },
    [second],
  )

  */

 const incrementAge = useCallback(
    () => {  setAge(age+1);  },  [age],
  )
  

  const incrementSalary =useCallback( 
    ( ) => {   setSalary(salary+1000);   }, [salary],
  )
  


  return (
    <>
      <p>
        ParentComponent é um container <br></br> para outros componentes
      </p>
      <Title></Title>
      <Count  numero ="1." text="Age " count={age}></Count>
      
      <Button handleClick ={incrementAge} teste="teste Age"> Increment age </Button> 
      <br></br>
      <br></br>

      <Count numero="2." text="Salary" count={salary}></Count>
      <Button handleClick={incrementSalary} teste="Teste Salary">Increment Salary </Button>
      <hr></hr>
    </>
    
        
  )
};
