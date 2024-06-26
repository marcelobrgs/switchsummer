import { FilhoComponente } from "./FilhoComponente";

export const PaiComponente = () => {
  
    const meuArray = [  
    {  id: 1, nome: "Marcelo",   },
    {  id: 2, nome: "Barcelo" },
    { id: 3,  nome: "Carlos" 
    },  ];
  return (
    <>
      <h3>Pai componente</h3>
      <FilhoComponente meuArray={meuArray}></FilhoComponente>
    </>
  );
};
