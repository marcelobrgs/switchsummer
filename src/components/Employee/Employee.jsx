export const Employee = (Funcionario) => {
  const teste = Funcionario;
  console.log('teste: ' + teste)
  for (const [key, value] of Object.entries(teste)) {
    console.log(key, value);
  }
  return <div>Employee</div>;
};
