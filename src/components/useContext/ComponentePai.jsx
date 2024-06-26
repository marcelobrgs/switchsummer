import { ContextMeuContexto } from "./ContextMeuContexto";
import { ComponenteFilho } from "./ComponenteFilho";

export const ComponentePai = () => {
  const objeto = [
    { id: "1", nome: "Marcelo" } ,
    { id: "2", nome: "Barcelo" } ,
    { id: "3", nome: "Carlos" } ,
    { id: "4", nome: "Edward" } ,
 
  ];

  return (
    <>
      <ContextMeuContexto.Provider value={objeto}>
        <ComponenteFilho />
      </ContextMeuContexto.Provider>
    </>
  );
};
