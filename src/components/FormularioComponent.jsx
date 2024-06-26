
import { useRef } from "react";
import { useForm } from "../hooks/useForm";
import { useEffect } from "react";

export const FormularioComponent = () => {

  const focusRef = useRef()
  console.log(focusRef)

  
  const initialForm = {
    userName: "",
    email:"",
    password:''
  }
  const {formState, onInputChange} = useForm(initialForm);

  const {userName,email,password} = formState;

  const onSubmit = (event)=>{
    event.preventDefault()
    console.log(formState)
  }

  useEffect(() => {
    //define o foco para o componente input
    // coloca o cursor do mouse no componente ao iniciar
    
    //focusRef.current.focus()
  
    
  }, [])
  


  return (
    <>
      <form onSubmit ={onSubmit} >
        <div className="m-group">
          <label htmlFor=""> 🧙‍♂️ UserName</label>
          <input
          ref ={focusRef} //coloca o foco, cursor do mouse neste componente
            type="text"          
            className="form-control"
            name="userName"
            id="id_userName"
            placeholder="🧑 Enter user name"
            value ={userName}
            onChange = {onInputChange}
          ></input>
        </div>
        <div className="m-group">
          <label htmlFor=""> ✉ Email address</label>
          <input
          
          
            type="email"
            className="form-control"
            name="email"
            id="id_email"
            placeholder=" 🎲 Enter email"
            value={email}
            onChange = {onInputChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor=""> 🔐 Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="id_password"
            placeholder=" 🔑 Password"
            value={password}
            onChange = {onInputChange}
          ></input>
        </div>
        <button 
          type="submit" 
          className="btn btn-primary">
          Submit
        </button>
        <br />
        
        <hr />
      </form>
    </>
  );
};
