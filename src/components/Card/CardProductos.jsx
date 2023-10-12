/*
import PropTypes from "prop-types";
import { useState } from "react";
import './CardProducto.css';
import ReactRating from "react-rating";

function CardProducto() {
  const [productos, setProductos] = useState([]);
  /*const [message, setMessage] = useState(false);
  const [filter, setFilter] = useState({ nom_producto: '', precio_producto: '', categorias: '' });
  const [sortOrder, setSortOrder] = useState('asc');
  const [cart, setCart] = useState([]);
  if (!producto) {
    return <div>No hay producto disponible.</div>;
  }

  const handleCompraClick = (productoName) => {
    alert(`Has agregado ${productoName} al carrito.`);
  };
  /*
  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    if (sortOrder === 'asc') {
      return (a.nom_producto || '').localeCompare(b.nom_producto || '');
    } else {
      return (b.nom_producto || '').localeCompare(a.nom_producto || '');
    }
  }); 
  const addToCarts = (producto) => {
    const productInCart = cart.find((item) => item.id_productos === producto.id_productos);
    if (productInCart) {
      const updatedCart = cart.map((item) =>
        item.id == producto.id_productos
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCart(updatedCart);
    }
  };
  const productosFiltrados = productos.filter((producto) => {
    const namemMatch = (producto.nom_producto || '').toLowerCase().includes(filter.nom_producto.toLowerCase()) || filter.nom_producto === '';
    const priceMatch = (producto.precio_producto || '').toLowerCase().includes(filter.precio_producto) || filter.precio_producto === '';
    const categoryMatch = (producto.categoria || '').toLowerCase() === filter.categorias.toLowerCase() || filter.categorias === '';
    return namemMatch && priceMatch && categoryMatch;
  });
  
  const handleCalificacionChange = (nuevaCalificacion, productoId) => {
    // Actualizar la calificación en el estado local inmediatamente
    const nuevosProductos = productos.map((producto) => {
        if (producto.id_productos === productoId) {
            return { ...producto, rating: nuevaCalificacion };
        }
        return producto;
    });
    setProductos(nuevosProductos);
  
  // Enviar la calificación actualizada al servidor
  fetch(`http://localhost:3000/products/${productoId}`, {
    method: "PUT", // Utiliza el método PUT para actualizar el producto
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ rating: nuevaCalificacion }), z
  })
    .then(response => response.json())
    .then(data => {
      // Actualiza el estado de productos con la respuesta del servidor
      // Esto es opcional y depende de cómo quieras manejar la respuesta del servidor
      // Si no deseas actualizar el estado nuevamente aquí, puedes eliminar esta parte
      const updatedProducts = productos.map((producto) => {
        if (producto.id_productos === productoId) {
          return { ...producto, rating: data.rating };
        }
        return producto;
      });
      setProductos(updatedProducts);
    })
    .catch(error => {
      console.error("Error al actualizar la calificación:", error);
    });


return (
  <div className='products'>
    <h1>Productos desde la API</h1>

    <ul className='container'>
      {productos.map(producto => (
      <strong className='nom'></strong>{producto.nom_producto}<br />
      <strong className='desc'></strong>{producto.desc_producto}<br />
      <strong className='precio'>$</strong>{producto.precio_producto}<br />
      <img className="imagen" src={producto.imagen} alt="" /><br />
   
      <button onClick={() => handleCompraClick(producto.nom_producto)} className="comprar-button">Comprar</button><br />
      ))}

      <ReactRating
        initialRating={parseFloat(producto.rating)}
        emptySymbol={<i className='far fa-star'></i>}
        fullSymbol={<i className='fas fa-star'></i>}
        onChange={(nuevaCalificacion) =>
          handleCalificacionChange(nuevaCalificacion, producto.id_productos)

        }
        readonly={true}
      />

    </ul>
  </div>


);
      }   

CardProducto.propTypes = {
  producto: PropTypes.shape({
    id_productos: PropTypes.number.isRequired,
    nom_producto: PropTypes.string.isRequired,
    desc_producto: PropTypes.string.isRequired,
    precio_producto: PropTypes.number.isRequired,
    imagen: PropTypes.string, // Tipo STRING para la URL de la imagen
  }),
  addToCart: PropTypes.func, // Función para agregar al carrito
}
export default CardProducto;*/

import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactRating from "react-rating";
import './CardProducto.css'

function CardProducto({ producto, addToCart }) {
  const [message, setMessage] = useState(false);
  const [productos, setProductos] = useState([]);

  if (!producto) {
    return <div>No hay productos disponibles</div>;
  }



  const handleCalificacionChange = (nuevaCalificacion, productoId) => {
    // Actualizar la calificación en el estado local inmediatamente
    const nuevosProductos = productos.map((producto) => {
      if (producto.id_productos === productoId) {
        return { ...producto, rating: nuevaCalificacion };
      }
      return producto;
    });
    setProductos(nuevosProductos);

    // Enviar la calificación actualizada al servidor
    fetch(`http://localhost:3000/products/${productoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: nuevaCalificacion }),
    })
      .then(response => response.json())
      .then(() => {
        // Actualiza el estado de productos con la respuesta del servidor si es necesario
      })
      .catch(error => {
        console.error("Error al actualizar la calificación:", error);
      });
  };
  

  return (
    <div className='containerC'>
      <div className='product-cardC'>
        <img src={producto.imagen} alt={producto.nom_producto} className='product-image' />
        <div className='product-details'>
          <h3 className='product-title'>{producto.nom_producto}</h3>
          <p className='product-price'>Precio: ${producto.precio_producto}</p>
          <p className='product-desc'>{producto.desc_producto}</p>
          <button className='add-to-cart' onClick={addToCart}>
            Agregar al carrito
            {message && <div className='carrito-message'>Agregado al carrito</div>}
          </button>
          <ReactRating
            initialRating={parseFloat(producto.rating)}
            emptySymbol={<i className='far fa-star'></i>}
            fullSymbol={<i className='fas fa-star'></i>}
            onChange={(nuevaCalificacion) =>
              handleCalificacionChange(nuevaCalificacion, producto.id_productos)
            }
            readonly={true}
          />
        </div>
      </div>

    </div>
  );
}

CardProducto.propTypes = {
  producto: PropTypes.shape({
    id_productos: PropTypes.number.isRequired,
    nom_producto: PropTypes.string.isRequired,
    desc_producto: PropTypes.string.isRequired,
    precio_producto: PropTypes.number.isRequired,
    imagen: PropTypes.string,
    rating: PropTypes.number,
  }),
  addToCart: PropTypes.func,
};

export default CardProducto;
