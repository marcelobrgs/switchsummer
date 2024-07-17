import { Child } from "./Child";

export const App = () => {
  const mensagem = new Date().toLocaleDateString();
  return (
    <>
      <h3>Componente pai: App</h3>
      <Child message={mensagem} />
    </>
  );
};
