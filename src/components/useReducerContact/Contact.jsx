import { useReducer, useState, useRef } from "react";

const initialState = [
  {
    id: Date.now(),
    name: "Barcelo",
    email: "barcelo@barcelo.com",
  },
];

function reducer(state = initialState, action) {
  switch (action.type) {
    case "add":
      console.log(" reducer - increment");
      return [...state, action.payload];

    case "delete":
      console.log("reducer - decrement");
      return state.filter((contact) => {
        return contact.id !== action.payload.id;
      });
    default:
      throw new Error();
  }
}

export const Contact = () => {
  //const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");

  console.log(state);
  /*
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
*/

  const inputRef = useRef();
  const emailRef = useRef();

  const handleClick = () => {
    if (inputRef.current.value === " ") {
      alert("preencha user name");
      return;
    }
    //alert(`O valor do input é: ${inputRef.current.value}`);
  };

  const addContact = (event) => {
    event.preventDefault();

    //handleClick();

    if (inputRef.current.value === " ") {
      alert("preencha user name");
      return;
    } 
    else if (emailRef.current.value === " ") {
      alert("preencha email");
      return;
    } 
    else {
      const contact = {
        id: Date.now(),
        name: name,
        email: email,
      };

      setName(" "); // limpa os campos de input text e email
      setEmail(" ");
      dispatch({ type: "add", payload: contact }); // dispatch é uma função do reducer que atualiza o state
    }
  };

  return (
    <>
      <h2>Contact</h2>
      <form id="form" onSubmit={addContact}>
        <div className="input-control">
          <label htmlFor="">User Name</label>
          <br />
          <input
            type="text"
            placeholder="name"
            name="name"
            id="username"
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="error"></div>

          <label htmlFor="">Email</label>
          <br />
          <input
            type="text"
            placeholder="email"
            name="email"
            id="email"
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="error"></div>
        </div>

        <div>
          <button type="submit">Add Contact</button>
        </div>
        <hr />
      </form>

      <div>
        <ul>
          {state.map((contact) => {
            return (
              <li key={contact.id}>
                {contact.name} - {contact.email}
                <span>
                  <button
                    onClick={() =>
                      dispatch({ type: "delete", payload: { id: contact.id } })
                    }
                  >
                    Delete
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
