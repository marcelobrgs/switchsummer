import { useForm } from "../../hooks/useForm";
import { useReducer } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const initialState = [
  { id: new Date().getTime(), tarea: "Explicar Reducer", finalizada: "sim" },
];

const mostrarAlerta = () => {
  alert("Digite uma tarefa");
};

// alerta tipo Toast
const mostrarToast = () => {
  toast.warn("Digite uma tarefa");
};

// alerta tipo Toast
const sucessoToast = () => {
  toast.success("Gravado com sucesso");
};

const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[TAREAS] Agregar Tarea":
      return [...state, action.payload]; // spread operator e agreaga o payload

    case "[TAREAS] Finalizar Tarea":
      return state.map((tarea) => {
        if (tarea.id == action.payload) {
          if (tarea.finalizada == true) {
            console.log(
              `A tarefa ${tarea.tarea} , id: ${tarea.id} foi finalizada? sim // ${tarea.finalizada} `
            );
          } else if (tarea.finalizada == false) {
            console.log(
              `A tarefa  ${tarea.tarea} , id ${tarea.id} foi finalizada? não // ${tarea.finalizada} `
            );
          }
          return {
            ...tarea, // spread operador
            finalizada: !tarea.finalizada, //inverte de true para false e vice versa
          };
        }
        return tarea;
      });

    case "[TAREAS] Eliminar Tarea":
      return state.filter((tarea) => tarea.id !== action.payload);

    case "[TAREAS] Borrar Tareas":      
      return [ ];

    default:
      return state;
  }
};

export const ListaTareas = () => {
  const [tareasState, dispatch] = useReducer(tareaReducer, initialState);

  const { tarea, formState, onInputChange } = useForm({ tarea: " " });

  const agregarTarea = (event) => {
    event.preventDefault();
    if (formState.tarea === " ") {
      mostrarToast();
      //mostrarAlerta();
      return;
    }

    console.log(formState);

    const tarea = {
      id: new Date().getTime(),
      tarea: formState.tarea,
      finalizada: false,
    };

    const action = {
      type: "[TAREAS] Agregar Tarea",
      payload: tarea,
    };

    dispatch(action);

    //sucessoToast();

    console.log(
      ` A tarefa : ${tarea.tarea} , id: ${tarea.id} , finalizada: ${tarea.finalizada} foi adicionada com sucesso`
    );

    const adicionadaToast = () => {
      toast.success(
        ` A tarefa : ${tarea.tarea} , id: ${tarea.id} , finalizada: ${tarea.finalizada} foi adicionada com sucesso`
      );
    };
    adicionadaToast();
  };

  const finalizarTarea = ({ id, finalizada, tarea }) => {
    const action = {
      type: "[TAREAS] Finalizar Tarea",
      payload: id,
    };

    dispatch(action);
    //sucessoToast();
    const alertaFinalizada = () => {
      toast.success(
        ` A tarefa : ${tarea} , id: ${id} , finalizada? ${finalizada}`
      );
    };
    alertaFinalizada();

    console.log(` A tarefa : ${tarea} , id: ${id} , finalizada? ${finalizada}`);
  };

  const eliminarTarea = ({ id, tarea }) => {
    const action = {
      type: "[TAREAS] Eliminar Tarea",
      payload: id,
    };
    dispatch(action);

    const toastEliminarTarea = () => {
      toast.info(` A tarefa : ${tarea} , id: ${id} , foi eliminada`);
    };
    toastEliminarTarea();

    console.log(` A tarefa : ${tarea} , id: ${id} , foi eliminada`);
  };


  const reset = () => {
    const action = {
      type: "[TAREAS] Borrar Tareas",
      payload: "",
    };
    dispatch(action);

    const apagarTodasTarefas = () => {
      toast.error( ` Todas as tarefas fora eliminadas`
      );
    };
    apagarTodasTarefas();

  }

  return (
    <>
      <ToastContainer></ToastContainer>
      <h2>ListaTareas</h2>
      <hr />

      <form onSubmit={agregarTarea}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="tarea"
            name="tarea"
            placeholder="Digite a tarefa"
            value={tarea}
            onChange={onInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {" "}
          Submit
        </button>

        <button type="button" className="btn btn-danger" onClick={reset} >Reset</button>

      </form>
      <hr />
      <ul className="list-group">
        {tareasState.map((item) => {
          return (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between"
            >
              <span>
                {item.id} - {item.tarea} - {item.finalizada ? "✅" : "⛔"}
                <input
                  type="checkbox"
                  value={item.finalizada}
                  onChange={() => finalizarTarea(item)}
                ></input>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => eliminarTarea(item)}
                >
                  Eliminar
                </button>

                

              </span>
            </li>
          );
        })}
      </ul>

      <p></p>
    </>
  );
};
