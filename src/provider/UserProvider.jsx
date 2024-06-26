
import  React , { useState, useContext } from "react";
import PropTypes from 'prop-types';

const userContext = React.createContext();

//se tem ou não tem usuário
const userToggleContext = React.createContext();

// hook
// useContext é usado pelo componente filho
export function useUserContext() {
  return useContext(userContext);
}

// hook
//encapsulamento
export function useUserToggleContext() {
  return useContext(userToggleContext);
}   

export const UserProvider = (props) => {
  
  const [user, setUser] = useState(null);

  //função muda login
  const cambiaLogin = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({
        name: "Marcelo",
        email: "marcelo@gmail.com",
      });
    }
  };

  return (
    <>
      <userContext.Provider value={user}>
        <userToggleContext.Provider value={cambiaLogin}>
          {props.Children}
        </userToggleContext.Provider>
      </userContext.Provider>
    </>
  );
};

UserProvider.propTypes = {
    Children: PropTypes.node,
}
