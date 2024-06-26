import { useReducer } from "react";
import { ReducerComponent_2 } from "./ReducerComponent_2";

const initialState = {
    todos:[]
};


export const ToDoList = ( )=> {
    const [state, dispatch] = useReducer(ReducerComponent_2, initialState);
    const { todos } = state;
  
    const handleAddTodo = (todoText) => {
      dispatch({ type: 'ADD_TODO', payload: todoText });
    };
  
    const handleCompleteTodo = (todoId) => {
      dispatch({ type: 'COMPLETE_TODO', payload: todoId });
    };
  
    return (
      <div>
        <input type="text" onChange={(event) => handleAddTodo(event.target.value)} />
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.complete} onChange={() => handleCompleteTodo(todo.id)} />
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    )
}
