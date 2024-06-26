

import { useUserContext, useUserToggleContext } from "../provider/UserProvider";


export const Hijo2 = () => {

  const user = useUserContext();

  const cambiaLogin = useUserToggleContext();

  return (
    <>
      <h2>componente filho</h2>
      <p>componente filho contém um título e um parágrafo</p>
      {user && (
        <p>
          Hola {user.name} <br></br> {user.email}
        </p>
      )}
      <button onClick={cambiaLogin}>Cambia Login componente pai </button>
    </>
  );
};
