const initialState = [
  {
    id: 1,
    tarea: "Explicar Reducer",
    finalizada: 'sim',
  },
];

const nuevaTarea = {
  id: 2,
  tarea: "Explicar useReducer",
  finalizada: 'não',
};

const nuevaTarea2 = {
  id: 3,
  tarea: "Explicar useCallback",
  finalizada: 'não',
};

const agregarTarea = {
  type: "[TAREAS] Agregar Tarea",
  payload: nuevaTarea, 
  payload2: nuevaTarea2
};

const tareaReducer = (state = initialState, action = {}) => {
  if (action.type === "[TAREAS] Agregar Tarea") {
    return [...state, action.payload, action.payload2];
  }
  return state;
};

//console.log(tareaReducer(initialState, agregarTarea));


export const ListaTareas = () => {
  return (
    <>
      <div>ListaTareas</div>
      {
        <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Tarea</th>
                  <th scope="col">Finalizada</th>                  
                </tr>
              </thead>
              <tbody>
                {
               
               // aplicando método map em um reducer
               // isto é um teste
               // aparentemente funciona 
               tareaReducer(initialState, agregarTarea).map(estado => {
                  return (
                    <tr key={estado.id}>
                      <th scope="row">{estado.id}</th>
                      <td>{estado.tarea}</td>
                      <td>{estado.finalizada}</td>                      
                    </tr>
                  );
                })}
              </tbody>
          </table>
      }
      
      <p></p>
    </>
  );
};
