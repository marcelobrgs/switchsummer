

export const Header = ({greet}) => {
 
  const asideStyle = {
    backgroundColor: "green",
    marginTop:"15px",
    padding:"15px",
    fontWeight:"bold",
    fontSize:"25px"
  }

  return (
    <>
        <>
            <div style={asideStyle}>Header , <span>{greet}</span></div>
        </>
        
    </>
  )
}
