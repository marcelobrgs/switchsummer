export const Lista = ({ codigo }) => {
  // Array de objetos conforme especificado
  let lista = [
    { codigo: "1", mes: "janeiro" },
    { codigo: "2", mes: "fevereiro" },
    { codigo: "3", mes: "março" },
    { codigo: "4", mes: "abril" },
    { codigo: "5", mes: "maio" },
    { codigo: "6", mes: "junho" },
    { codigo: "7", mes: "julho" },
    { codigo: "8", mes: "agosto" },
    { codigo: "9", mes: "setembro" },
    { codigo: "10", mes: "outubro" },
    { codigo: "11", mes: "novembro" },
    { codigo: "12", mes: "dezembro" },
  ];

  // Função para encontrar o objeto na lista com base no código
  // retorna o ítem da lista com código igual ao código escolhido
  const encontrarMes = (codigo) => {
    return lista.find((item) => item.codigo === codigo);
    
  };


  // Chama a função para encontrar o objeto correspondente ao código
  // IMPORTANTE
  // é obrigatório chamar a função encontraMes passando o código
  // o valor é earmazenado em uma variável  mesEncontrado
  // se não chamar a função, nada funciona
  const mesEncontrado = encontrarMes(codigo);
 

  // Renderiza o mês correspondente
  return (
    <>
      <hr />

      <div className="resultado">
        <p>Componente filho Lista:</p>
        <p>O mês selecionado:</p>
        <div>
          {mesEncontrado ? (
            <h1>{mesEncontrado.mes}</h1>
          ) : (
            <h1>Código não encontrado</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Lista;
