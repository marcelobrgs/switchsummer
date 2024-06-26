import { useState } from "react";
import { ModeToggler } from "./ModeToggler";

export const NightModeComponent = () => {
  const bold = {
    fontWeight: "bold",
    fontSize: "20px",
    fontFamily: "Tahoma",
    paddingLeft: "13px",
  };

  const [darkMode, setDarkMode] = useState(false);

  console.log(` o valor de darkMode é  ${darkMode}`);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    console.log(` função toglle:  ${darkMode}`);

    // alterna a classe de document para dark-mode
    // utiliza o método toggle
    document.body.classList.toggle("dark-mode"); // adiciona uma classe ao body para aplicar estilos de dark mode
    console.log(classe);
  };

  const classe = document.body.classList;

  const italico = {
    fontStyle: "italic",
  };
  return (
    <>
      <hr />
      <div>NightModeComponent</div>
      <h2>
        
        <span style={italico}>
         
          {classe != "" ? "dark-mode 🌝 " : "default 🧶 "}{" "}
        </span>
      </h2>
      <br />

      <button type="button" className="btn btn-primary" onClick={toggleTheme}>
        Toggle
      </button>
      <label style={bold}>
        Darkmode está: <span style={bold}>{darkMode ? "ON" : "OFF"}</span>{" "}
      </label>
      <br />
      <br />

      <button type="button" className="btn btn-primary" onClick={toggleTheme}>
        Toggle MEMORIZADO
      </button>
      <label style={bold}>
        Darkmode está: <span style={bold}>{darkMode ? "ON" : "OFF"}</span>{" "}
      </label>
      <br />
      <br />

      <div className="form-check form-switch">
        <input
          onClick={toggleTheme}
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label
          style={bold}
          className="form-check-label"
          label="flexSwitchCheckDefault"
        >
          Darkmode está: <span style={bold}>{darkMode ? "ON" : "OFF"}</span>
        </label>
      </div>
      <ModeToggler modo={darkMode} spanStyle={italico} classeDom={classe} />
    </>
  );
};
