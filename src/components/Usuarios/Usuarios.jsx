import { useEffect } from "react";
import { useState } from "react";

import './Usuarios.css';
function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/usuarios")
      .then(response => response.json())
      .then(data => {
        setUsuarios(data);
      })
  }, []);
  return (
    <div className='users'>
      <ul className='containerU'>
        <h1>Usuarios desde la API</h1>
        {usuarios.map(user => (
          <li className="listU" key={user.id}>

            <strong className='id'> Id: </strong>{user.id}<br />
            <strong className='name'> Nombre: </strong>{user.nombre}<br />
            <strong className='username'> Username: </strong>{user.userName}<br />
            <strong className='birthdate'> Fecha de Nacimiento: </strong>{user.fecha_nac}<br />
          </li>
        ))}
      </ul>
    </div>


  )
}
export default Usuarios