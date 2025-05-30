import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      const res = await fetch(`https://api.rawg.io/api/games/${id}?key=c4e9e139d69f4e13a9b27388b7963684`);
      const data = await res.json();
      setProduct({
        id: data.id,
        nombre: data.name,
        imagen: data.background_image,
        precio: 59.99,
        descripcion: data.description_raw,
        rating: data.rating
      });
      setLoading(false);
    };
    fetchGame();
  }, [id]);

  if (loading) return <p>Cargando detalles...</p>;

  return (
    <div>
      <h2>{product.nombre}</h2>
      <img src={product.imagen} alt={product.nombre} className="img-fluid" />
      <p>{product.descripcion}</p>
      <p>Rating: {product.rating}</p>
      <p>Precio: ${product.precio}</p>
      <button className="btn btn-primary" onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductDetail;