import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => (
  <div className="card mb-4 shadow-sm">
    <img src={product.imagen} className="card-img-top" alt={product.nombre} />
    <div className="card-body">
      <h5 className="card-title">{product.nombre}</h5>
      <p className="card-text">💵 ${product.precio}</p>
      <p className="card-text">⭐ {product.rating}</p>
      <div className="d-flex justify-content-between">
        <button className="btn btn-sm bottoncito" onClick={() => addToCart(product)}>
          Agregar al carrito
        </button>
        <Link to={`/product/${product.id}`} className="btn btn-sm btn-outline-secondary">
          Ver más
        </Link>
      </div>
    </div>
  </div>
);

export default ProductCard;