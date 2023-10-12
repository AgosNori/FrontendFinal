import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers,faShoppingCart,faUser,faHome ,faUserPlus, faBagShopping} from "@fortawesome/free-solid-svg-icons";

import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logoContainer">
        <img
          src="https://github.com/AgosNori/NoriegaAgostina--Goddesses/blob/master/img/logo.png?raw=true"
          alt="Logo"
          className="logo"
        />
      </div>
      <ul className="navLinks">
        <li>
          <Link to="/" className="navLink">
          <FontAwesomeIcon className="iconito" icon={faHome} />  
          Inicio
          </Link>
        </li>
        <li>
          <Link to="/login" className="navLink">
          <FontAwesomeIcon icon={faUser} /> Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="navLink">
          <FontAwesomeIcon icon={faUserPlus} />Register
          </Link>
        </li>
        <li>
          <Link to="/carrito" className="navLink">
          <FontAwesomeIcon icon={faShoppingCart} /> Carrito
          </Link>
        </li>
        <li>
          <Link to="/productos" className="navLink">
      <FontAwesomeIcon icon={faBagShopping}/> Productos
          </Link>
        </li>
        <li>
          <Link to="/usuarios" className="navLink">
            <FontAwesomeIcon icon={faUsers} /> Usuarios
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
