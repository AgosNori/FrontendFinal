import  { useState } from 'react';
import './NuevoProducto.css';
function NuevoProductoForm() {
  const [producto, setProducto] = useState({
    nom_producto: '',
    desc_producto: '',
    precio_producto: '',
    id_categoria: '',
    imagen: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({
      ...producto,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });

      if (response.status === 201) {
        console.log('Producto creado exitosamente.');
        // Realiza acciones adicionales si es necesario
      } else {
        console.error('Error al crear el producto.');
        // Maneja errores si es necesario
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <form className='nuevoProducto' onSubmit={handleSubmit}>
      <label className='labelProducto'>
        Nombre del Producto:
        <input className='inputProducto'
          type="text"
          name="nom_producto"
          value={producto.nom_producto}
          onChange={handleChange}
        />
      </label>
      <label className='labelProducto'>
        Descripcion del Producto:
        <input className='inputProducto'
          type="text"
          name="desc_producto"
          value={producto.desc_producto}
          onChange={handleChange}
        />
      </label>
      <label className='labelProducto'>
        Precio del Producto:
        <input className='inputProducto'
          type="text"
          name="precio_producto"
          value={producto.precio_producto}
          onChange={handleChange}
        />
      </label>
      <label className='labelProducto'>
        Categoria:
        <input className='inputProducto'
          type="text"
          name="id_categoria"
          value={producto.id_categoria}
          onChange={handleChange}
        />
      </label>
      {/* Agrega campos para otros atributos del producto */}
      <button  className="guardarProducto" type="submit">Guardar Producto</button>
    </form>
  );
}

export default NuevoProductoForm;
