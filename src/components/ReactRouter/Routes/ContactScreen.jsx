/*
 const usuario ={
        nombre: 'Sergie code',
        tecnologia: 'React',
        mail: 'sergie@sergie.com',
        youtube: '@sergiecode'
    }

*/

import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

export const ContactScreen = () => {

  const { usuario } = useContext(UsuarioContext)

  return (
    <>
    <br />
    <div className="container">
      
    <table className="table table-striped table-dark">
        <thead>
          <tr>

            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Tecnologia</th>
            <th scope="col">Email</th>
            <th scope="col">YouTube</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <th scope="row">{usuario.nombre}</th>
            <td>{usuario.tecnologia}</td>
            <td>{usuario.email}</td>
            <td>{usuario.youtube}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
    </>
  );
};
