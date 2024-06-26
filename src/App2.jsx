import { Hijo } from "./components/Hijo";

import { UserProvider  } from "./provider/UserProvider";


export const App2 = () => {
  

  return (
    <>
      <UserProvider >       
        <Hijo></Hijo>
      </UserProvider>
    </>
  );
};
