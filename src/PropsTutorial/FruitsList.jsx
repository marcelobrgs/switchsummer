export const FruitsList = ({ lista }) => {
  return (
    <>
    <hr />
    <br />
      <div>FruitsList (componente filho)</div>
      <br />
      <ul>
        {lista.map((item) => (
          <li key={item.id} >{item.name}</li>
        ))}
      </ul>
    </>
  );
};
