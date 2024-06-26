import { memo } from "react";

export const ModeToggler =   ({modo , spanStyle ,classeDom}) => {
  const dark = {
    
    backgroundColor: "black",
  };
  const light = {
    backgroundColor: "white",
    color: "black",
  };




  //const darkModeOn = false;

  const temaEscuro = <h1 style={dark}>Dark mode is on 🌝</h1>;
  const temaClaro = <h1 style={light}>Light mode is on 🧶- Default </h1>;

  return (
    <>
    <hr />
    <br />
      <div>ModeToggler</div>
      <br />
      <div>{ modo ? temaEscuro : temaClaro}</div>
      <h2>Classname: <span style={spanStyle}> {classeDom !='' ? 'dark-mode 🌝 ': 'default 🧶 '}</span></h2>
    </>
  );
};
