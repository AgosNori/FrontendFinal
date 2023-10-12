import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState({ email: '', contraseña: '' });
  /*
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState({ email: '', contraseña: '' });
    */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuarios({ ...usuarios, [name]: value });
  };
  /*
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUsuarios({ ...usuarios, [name]: value });
    };
    */

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validar que los campos no estén vacíos
    if (!usuarios.email || !usuarios.contraseña) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, complete todos los campos.",
      });
      return; // Detener el proceso de inicio de sesión si los campos están vacíos
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuarios),
      });

      if (response.ok) {

        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Inicio de sesión exitoso",
        });
        navigate('productos');

      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Inicio de sesión fallido",
        });
        navigate('/login');
      }
    } catch (error) {
      console.error("An error occurred:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Un error ocurrió: " + error.message,
      });
    }
  };

  return (
    <div className="containerLogin">

      
      <form onSubmit={handleSubmit} className="formLogin">
        
        <fieldset className="fieldset">
        <legend><h3>Login</h3></legend>
          <div>
            <input className="inputLogin"
              type="email"
              name="email"
              value={usuarios.email}
              onChange={handleInputChange}
              placeholder="Email"

            />
          </div>
          <div >
            <input className="inputLogin"
              type="password"
              name="contraseña"
              value={usuarios.contraseña}
              onChange={handleInputChange}
              placeholder="Contraseña"

            />
          </div>
          <div className="botonLogin">
            <button type="submit" onClick={handleSubmit}>Login</button>
          </div>
        </fieldset>
      </form>


    </div>
  );
}

export default Login;
