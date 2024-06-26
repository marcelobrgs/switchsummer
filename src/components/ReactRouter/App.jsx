import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./Componentes/Navbar"
import { HomeScreen } from "./Routes/HomeScreen"
import { ContactScreen } from "./Routes/ContactScreen"
import { AboutScreen } from "./Routes/AboutScreen"
import { UsuarioProvider } from "./context/UsuarioProvider"
import { LoginScreen } from "./Routes/LoginScreen"



export const App = () => {
  return (
    <UsuarioProvider>
        <div>
            <Navbar/>

            <Routes>
                <Route path='/useRef/' element={<HomeScreen></HomeScreen>}>Home</Route>
                
                <Route path='/useRef/login' element={<LoginScreen></LoginScreen>}>Home</Route>
                
                <Route path='/useRef/about' element={<AboutScreen></AboutScreen>}>About</Route>
                <Route path='/useRef/contact' element={<ContactScreen></ContactScreen>}>Contact</Route>
                <Route path="/useRef/*" element={<Navigate to='/useRef/'></Navigate>}></Route>
            </Routes>
            
          
            
        </div>
    </UsuarioProvider>
  )
}
