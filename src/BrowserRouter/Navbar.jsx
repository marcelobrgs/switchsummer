import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {


  const estiloLinkNav = {
    display: "block",
    color: "blue",
    textAlign: "center",
    padding: "14px 16px",
    fontWeight: "bold",
    
    
  };
  return (
    <>
      <div>
        <nav className="navbar navbar-light bg-light">

        {/*
        Observação:
        importar Link: 
        import { Link } from "react-router-dom";;
        Pode-se substituir as anchor tags (a) de links por <Link>
        <Link> também aceita classes de estilo inline css
        
        
        */}


          <a  style={estiloLinkNav} href ="/darkmode/"> Home   </a>
          <Link style={estiloLinkNav} to="/darkmode/">Home</Link>

          
          
          <a style={estiloLinkNav} className="nav-link" href="/darkmode/products">
           
            Products
          </a>

        <Link style={estiloLinkNav} to="/darkmode/products ">Products</Link>

          <a style={estiloLinkNav} className="nav-link" href="/darkmode/about">
           
            About
          </a>

          <Link style={estiloLinkNav} to="/darkmode/about ">About</Link>
          
          <a style={estiloLinkNav} className="nav-link" href="/darkmode/contact">
           
            Contact{" "}
          </a>

          <Link style={estiloLinkNav} to="/darkmode/contact ">Contact</Link>

        </nav>

        <br />
      </div>
    </>
  );
};
