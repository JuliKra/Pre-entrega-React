import React from 'react';

const Cart = ({ cart }) => {
  if (cart.length === 0) return <p>El carrito está vacío</p>;

  return (
    <ul className="list-group">
      {cart.map((item, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          <span>{item.nombre}</span>
          <span>${item.precio.toFixed(2)}</span>
        </li>
      ))}
    </ul>
  );
};

export default Cart;