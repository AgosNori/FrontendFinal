import { useState, useEffect } from "react";
import "./Carrito.css";


function Carrito() {
  const [cart, setCart] = useState([]); // Estado para almacenar los productos en el carrito
  const [productos, setProductos] = useState([]); // Estado para almacenar los productos obtenidos de la API

  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.id_productos === product.id_productos
    );
  
    if (existingProduct) {
      // Si ya existe, actualizamos la cantidad
      const updatedCart = cart.map((item) =>
        item.id_productos === product.id_productos
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // Si no existe, lo agregamos al carrito con cantidad 1
      setCart([...cart, { ...product, cantidad: 1 }]);
    }
  };
  
  const increaseQuantity = (product) => {
    addToCart(product); // Reutiliza la lógica de agregar al carrito
  };
  
  const decreaseQuantity = (product) => {
    const existingProduct = cart.find(
      (item) => item.id_productos === product.id_productos
    );
  
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id_productos === product.id_productos
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      ).filter((item) => item.cantidad > 0);
      setCart(updatedCart);
    }
  };
  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter(
      (product) => product.id_productos !== productToRemove.id_productos
    );
    setCart(updatedCart);
  };
  // Función para calcular el total de la compra
  const calculateTotal = () => {
    const total = cart.reduce(
      (acc, product) =>
        acc + parseFloat(product.precio_producto) * product.cantidad,
      0
    );
    return total.toFixed(2); // Redondeamos el total a 2 decimales
  };

  useEffect(() => {
    // Aquí obtienes los productos de tu API y los estableces en el estado
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener la información de productos");
        }
        return response.json();
      })
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  return (
    <div className="contenedor">
      <h2 className="titulo-carrito">Carrito de Compras</h2>
      <ul className="lista-carrito">
        {cart.map((product) => (
          <li key={product.id_productos}>
            <div className="producto-info">
              <img
                src={product.imagen} // Agrega la imagen del producto
                alt={product.nom_producto}
                width="100"
                height="100"
                className="img-carrito"
              />
              <div className="nombre-precio">
                <span>{product.nom_producto}</span>
                <span>${product.precio_producto}</span>
              </div>
            </div>

            <div className="cantidad-buttons">
              <button
                className="quantity-button"
                onClick={() => decreaseQuantity(product)}
              >
                -
              </button>
              <span>{product.cantidad}</span>
              <button
                className="quantity-button"
                onClick={() => increaseQuantity(product)}
              >
                +
              </button>
            </div>
            <button
              className="eliminar-carrito"
              onClick={() => removeFromCart(product)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>

      
    </div>
  );
}

export default Carrito;
/*
  // Función para eliminar un producto del carrito
  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter(
      (product) => product.id_productos !== productToRemove.id_productos
    );
    setCart(updatedCart);
  };

  // Función para aumentar la cantidad de un producto
  const increaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.id_productos === product.id_productos
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    );
    setCart(updatedCart);
  };

  // Función para disminuir la cantidad de un producto
  const decreaseQuantity = (product) => {
    const updatedCart = cart
      .map((item) =>
        item.id_productos === product.id_productos
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
      .filter((item) => item.cantidad > 0);
    setCart(updatedCart);
  };

  // Función para calcular el total de la compra
  const calculateTotal = () => {
    const total = cart.reduce(
      (acc, product) =>
        acc + parseFloat(product.precio_producto) * product.cantidad,
      0
    );
    return total.toFixed(2); // Redondeamos el total a 2 decimales
  };
*/