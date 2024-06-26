export const Logo = ({ src }) => {
  const myStyle = { 
    width:150, 
    height: 150,
    borderRadius: "50%",
    
  };

  return (
    <>
      <img src={src} style={myStyle}></img>
    </>
  );
};
