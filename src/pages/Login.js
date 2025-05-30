import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('user', 'true');
    navigate('/checkout');
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <button onClick={handleLogin} className="btn btn-primary">Entrar</button>
    </div>
  );
};

export default Login;