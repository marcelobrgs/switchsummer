

export const Main = ({ lista }) => {
  return (
    <>
      <hr />
      <div>Main:</div>
      <br />
      <ul>
        {lista.map(pessoa => (
          <li key={pessoa.id}>{pessoa.name}</li>
        ))}
      </ul>
      <hr />
    </>
  );
};
