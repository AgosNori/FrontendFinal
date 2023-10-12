import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductosListar from './components/ProductosListar/ProductosListar';
import Usuarios from './components/Usuarios/Usuarios';
import Navbar from './components/layouts/Navbar';
import Carrito from './components/Carrito/Carrito';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/layouts/Footer';
/*import { useState } from 'react';
import NavbarAdmin from './components/UserAdmin/NavbarAdmin'; // Asegúrate de importar el componente NavbarAdmin
*/
function App() {
  /*
 const [user, setUser] = useState(null);

 // Función para manejar el cierre de sesión
 const logout = () => {
   setUser(null);
   // Aquí puedes realizar cualquier otra acción necesaria al cerrar sesión
 };
*/
  return (
    <>
      <BrowserRouter>{/*
        {user ? (
          <NavbarAdmin logout={logout} /> // Pasa la función de logout al componente NavbarAdmin
        ) : (
          <Login /> // Muestra el componente de inicio de sesión cuando el usuario no está autenticado
        )}*/}
        <Navbar />
        <div className='rutas'>
          <Routes>
            <Route path='/' element={<ProductosListar />} />
            <Route path='/usuarios' element={<Usuarios />} />
            <Route path='/register' element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
