import { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export function useCarrito() {
  return useContext(CarritoContext);
}

export function CarritoProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
     // Verificamos si el producto ya está en el carrito
     const existingProduct = cart.find((item) => item.id_productos === product.id_productos);

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

  // Otros métodos relacionados con el carrito

  return (
    <CarritoContext.Provider value={{ cart, addToCart }}>
      {children}
    </CarritoContext.Provider>
  );
}
