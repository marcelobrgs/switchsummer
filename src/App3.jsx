import { UserProvider } from "./provider/UserProvider";

import { Hijo2 } from "./components/Hijo2";

export const App3 = () => {
  
  return (
    <>
      <UserProvider>
        <Hijo2></Hijo2>
      </UserProvider>
    </>
  );
};
