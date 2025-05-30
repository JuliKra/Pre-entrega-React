import React from 'react';

const Checkout = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.precio, 0);

  return (
    <div className="container">
      <h2 className="my-4">🛒 Checkout</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div className="card shadow p-3">
          <ul className="list-group list-group-flush">
            {cart.map((item, i) => (
              <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                {item.nombre}
                <span>${item.precio}</span>
              </li>
            ))}
            <li className="list-group-item fw-bold d-flex justify-content-between">
              Total:
              <span>${total.toFixed(2)}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Checkout;