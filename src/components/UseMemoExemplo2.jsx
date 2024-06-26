import { useEffect, useMemo, useState } from "react";

export const UseMemoExemplo2 = () => {
  const [name, setName] = useState("undefined");
  const [age, setAge] = useState("undefined");
  const [country, setCountry] = useState("undefined");


  const userType = useMemo ( 
    ( )=>( {
    underAge: age < 18 ? true : false,
    citizen: country === "USA" ? true : false,
  } 
) , [ age , country]
) ;

useEffect(()=>{
  console.log(` age:${age}  name is: ${name} is underage: ${userType.underAge} usertype mudou: is american: ${userType.citizen} . country: ${country}  `)
},[userType,age,name,country])

  console.log("component re rendered useMemo example 2");

  const gravarNome = (e) => {
    setName(e.target.value);
    console.log(e.target.value)
    console.log(`name: ${name}`)
  };
  const gravarIdade = (e) => {
    setAge(e.target.value);
    console.log(e.target.value)
    console.log(`idade ${age}`)
  };

  const gravarPais = (e) => {
    setCountry(e.target.value);
    console.log(`país selecionado: ${country}`)
  };

  return (
    <>
      <h2>UseMemoExemplo2</h2>
      <label htmlFor="">digite o nome</label>
      <br />
      <input onChange={gravarNome} placeholder="nome" />
      <br />
      <br />
      <label htmlFor="">digitar idade</label>
      <br />
      <input onChange={gravarIdade} placeholder="idade" />
      <br />
      <br />
      <select onChange={(e)=>setCountry(e.target.value)}>
        <option value="USA">USA</option>
        <option value="UK">UNITED KINGDON</option>
        <option value="PL">PL</option>
        <option value="JP">NIPON</option>
      </select>
      <hr />
    </>
  );
};
