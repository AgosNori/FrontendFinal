import { useState } from "react";
import './Register.css';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    telefono: '',
    fecha_nac: '',
    userName: '',
  });

  const [errors, setErrors] = useState([])
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleRegister = async () => {
    try {
      if (!formData.nombre || !formData.email || !formData.contraseña) {
        Swal.fire({
          icon: "error",
          title: "Error de validacion",
          text: "Por favor, completa todos los campos obligatorios",
        });
        return;
      }
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Registro exitoso",
        });
        navigate("/");
      } else {
        const data = await response.json();
        setErrors(data.errors || []);
      }
    } catch (error) {
      console.log('Error al registrar usuario:', error);
    }
  };
  return (
    <div className="container">

      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error.msg}</li>
          ))}
        </ul>
      )}
      <form>
        <fieldset>
          <legend><h3>Registro</h3></legend>
          <div>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Nombre"

            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"

            />
          </div>
          <div>
            <input
              type="number"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              placeholder="Teléfono"

            />
          </div>
          <div>
            <input
              type="password"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleInputChange}
              placeholder="Contraseña"

            />
          </div>
          <div>
            <input
              type="date"
              name="fecha_nac"
              value={formData.fecha_nac}
              onChange={handleInputChange}
              placeholder="Fecha de nacimiento"

            />
          </div>
          <div>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              placeholder="Nombre de usuario"

            />
          </div>
          <div className="boton">
            <button type="button" onClick={handleRegister}>Registrarse</button>
          </div>

        </fieldset>
      </form>
    </div>
  );
}

export default Register;
