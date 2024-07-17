import { Homepage } from "./Homepage";
import { About } from "./About";
import { Navbar } from "./Navbar";
import { Contact } from "./Contact";
import { Products } from "./Products";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const App = () => {
  return (
    <>
     
      <Navbar/>
      
      <Routes>
        <Route path="/darkmode/" element={<Homepage />}></Route>
        <Route path="/darkmode/products" element={<Products />}></Route>
        <Route path="/darkmode/about" element={<About />}></Route>
        <Route path="/darkmode/contact" element={<Contact />}></Route>
        <Route path="/darkmode/*" element={<Navigate to='/darkmode/'></Navigate>}/>
      </Routes>

      {/*
      Observação:
      importar Navigate para condizir páginas digitadas erradas para home  
      import { Navigate } from "react-router-dom";

      redirecina para home se digitar o endereço errado na barra do navegador
      <Route path="/darkmode/*" element={<Navigate to='/darkmode/'></Navigate>}/>

      */}

      
    </>
  );
};
