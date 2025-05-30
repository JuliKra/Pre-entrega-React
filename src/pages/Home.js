import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch('https://api.rawg.io/api/games?key=c4e9e139d69f4e13a9b27388b7963684');
        if (!res.ok) throw new Error('Error al obtener los juegos');
        const data = await res.json();
        const transformed = data.results.map(game => ({
          id: game.id,
          nombre: game.name,
          imagen: game.background_image,
          precio: 59.99,
          fecha: game.released,
          rating: game.rating
        }));
        setProducts(transformed);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <p>Cargando juegos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2 className="my-4">Productos destacados</h2>
      <ProductList products={products} addToCart={addToCart} />
    </>
  );
};

export default Home;
