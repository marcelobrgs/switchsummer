import { Employee } from "./Employee";

const Funcionario =   
[
  {  nome: "Marcelo",   id: 1 , email: "marcelo@teste.com" , website: "www.com" },
  {  nome: "Barcelos",   id: 2 , email: "barcelo@teste.com" , website: "www.com" },
  {  nome: "Carlos",   id: 3 , email: "carlos@teste.com" , website: "www.com" },  
];
const data = Funcionario;

export const AppEmployee = () => {
  return (
    <>
      <h3>AppEmployee</h3>
      
      <Employee Funcionario={Funcionario} nome={Funcionario.nome} id={Funcionario.id}></Employee>
      
      <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Website</th>
                </tr>
              </thead>
              <tbody>
                {data.map(user => {
                  return (
                    <tr key={user.id}>
                      <th scope="row">{user.id}</th>
                      <td>{user.nome}</td>
                      <td>{user.email}</td>
                      <td>{user.website}</td>
                    </tr>
                  );
                })}
              </tbody>
          </table>
    </>
  );
};
