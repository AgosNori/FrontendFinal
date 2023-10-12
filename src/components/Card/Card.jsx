
import { useState } from "react";
import './CardProducto.css';
const Card = (product) => {
  const [message, setMessage] = useState(false);

  function agregarCarrito() {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 3000);
  }

  return (
    <div className="container">
      <article className="product-card">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <button className="add-to-cart" onClick={agregarCarrito}>
            Agregar al carrito
          </button>
          {message && <div className="carrito-message">Agregado al carrito</div>}
        </div>
      </article>
    </div>

  );
};

export default Card;