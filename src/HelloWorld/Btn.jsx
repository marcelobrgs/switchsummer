export const Btn = () => {
  const clicHandler = () => {
    alert("hello");
  };

  const meuBotao = {
    backgroundColor: "#ADE744",
    borderRadius: ".85rem",
    padding: " 15 px  15px 15px 15px ",
    fontWeight: "bold",
    border: "none",
  };

  /*
  exemplo de inline css
  direto dentro do arquivo jsx
  como um objeto
  utilizar camel Case ( primeira letra minuscula
  sem ífem, segunda letra maiúscula )
  */
  const bootstrap = {
    type: "button",
    className: "btn btn-primary",
    backgroundColor: "#0069D9",
    paddingLeft: " 18px",
    paddingRight: "18px",
    paddingTop: "6px",
    paddingBottom: "6px",
    border: "none",
    fontWeight: "bold",
    color: "white",
    borderRadius: "8px",
  };
  return (
    <>
      <br />
      <button style={bootstrap} onClick={clicHandler}>
        Clique aqui
      </button>
      <br />
      <br />
      <button style={bootstrap} onMouseOver={clicHandler}>
        OnMouseOver
      </button>
      <br />
      <br />
      <button style={meuBotao} onClick={clicHandler}>
        Clique aqui
      </button>
    </>
  );
};
