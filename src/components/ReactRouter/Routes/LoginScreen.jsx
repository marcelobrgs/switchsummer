import { useForm } from "../hooks/useForm";
import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

export const LoginScreen = () => {
  const initialForm = { nombre: " ", tecnologia: "",  email: "", redes: ""  };

  const { formState, onInputChange, nombre, tecnologia, email, redes } =  useForm(initialForm);

  const { setUsuario } = useContext(UsuarioContext)


  const onSubmit = (event) => {
    event.preventDefault();
    setUsuario(formState)
    //console.log(formState);
  };

  return (
    <>
      <br />
      <h1>Login</h1>
      <hr />

      <form className="container" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={nombre}
            onChange={onInputChange}
          ></input>
        </div>

        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            
            Tecnologia
          </label>
          <input
            type="text"
            className="form-control"
            name="tecnologia"
            value={tecnologia}
            onChange={onInputChange}
          ></input>
        </div>

        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={onInputChange}
          ></input>
        </div>

        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
           
            Redes
          </label>
          <input
            type="text"
            className="form-control"
            name="redes"
            value={redes}
            onChange={(event) => onInputChange(event)}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Registrar usuário
        </button>
      </form>
    </>
  );
};
