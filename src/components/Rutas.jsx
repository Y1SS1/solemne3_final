import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage'
import TicketeriaPage from "../Pages/TicketeriaPage"
import ContactoPage from '../Pages/ContactoPage'
import CrearTicketPage from "../Pages/CrearTicketPage"
import TicketPage from "../Pages/TicketPage"
import AdminPage from "../Pages/AdminPage" 

function Rutas() {
  return (
<Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      
      {/* 1. Cambiamos esto para que la ruta vieja apunte al formulario de CrearTicketPage */}
      <Route path="/TicketeriaPage" element={<CrearTicketPage />} />
      
      {/* 2. Dejamos esta por si acaso, ambas abrirán la misma pantalla profesional */}
      <Route path='/CrearTicketPage' element={<CrearTicketPage />}/>
      
      <Route path="/tickets" element={<TicketeriaPage />} />
      
      <Route path='/Contacto' element={<ContactoPage />}/>
      <Route path='/TicketPage' element={<TicketPage />}/>
      <Route path='/AdminPage' element={<AdminPage />}/> 
    </Routes>
  )
}
export default Rutas;