import { SwitchComponent } from "./SwitchComponent";
import { useState } from "react";

export const App = () => {
  const [summer, setSummer] = useState(false);

  const toggleClima = () => {
    setSummer(!summer);
    document.body.classList.toggle("summer-mode");
    
  };
  return (
    <>
        {!summer
        ?  <h2 style={{color:'white'}}>App Switch Clima 🌧</h2>
        :  <h2 style={{color:'black'}}>App Switch Clima 🌞</h2> }
     
      <br />
      <button type="button" className="btn btn-primary" onClick={toggleClima}>
        Toggle
      </button>
      <br />
      <SwitchComponent valor={summer} />
    </>
  );
};
