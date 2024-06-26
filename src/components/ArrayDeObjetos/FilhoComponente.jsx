

export const FilhoComponente = (meuArray) => {
  
  const elementos = meuArray.map((objeto) => (
    <p key={objeto.id}> Nome: {objeto.nome} ID: {objeto.id}  </p>
  ));
  return <>{elementos}</>;
};
