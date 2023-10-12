import { useEffect, useState } from "react";
import ReactRating from "react-rating";
import './Productos.css'


function Productos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(response => response.json())
            .then(data => {
                setProductos(data);
            })
    }, []);

    const handleCompraClick = (productoName) => {
        alert(`Has agregado ${productoName} al carrito.`);
    };

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
            body: JSON.stringify({ rating: nuevaCalificacion }),
        })
            .then(response => response.json())
            .then(data => {
                // Actualiza el estado de productos con la respuesta del servidor
                // Esto es opcional y depende de cómo quieras manejar la respuesta del servidor
                // Si no deseas actualizar el estado nuevamente aquí, puedes eliminar esta parte
                const updatedProducts = productos.map((producto) => {
                    if (producto.id === productoId) {
                        return { ...producto, rating: data.rating };
                    }
                    return producto;
                });
                setProductos(updatedProducts);
            })
            .catch(error => {
                console.error("Error al actualizar la calificación:", error);
            });
    };

    return (
        <div className='products'>
            <h1>Productos desde la API</h1>
         
            <ul className='container'>
                {productos.map(producto => (
                    <li key={producto.id}>
                        <strong className='nom'></strong>{producto.nom_producto}<br />
                        <strong className='desc'></strong>{producto.desc_producto}<br />
                        <strong className='precio'>$</strong>{producto.precio_producto}<br />
                        <img className="imagen" src={producto.imagen} alt="" /><br />

                        <button onClick={() => handleCompraClick(producto.nom_producto)} className="comprar-button">Comprar</button><br />
                        <ReactRating
                            initialRating={parseFloat(producto.rating)}
                            emptySymbol={<i className='far fa-star'></i>}
                            fullSymbol={<i className='fas fa-star'></i>}
                            onChange={(nuevaCalificacion) =>
                                handleCalificacionChange(nuevaCalificacion, producto.id)
                          
                            }
                            readonly={true}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Productos;
