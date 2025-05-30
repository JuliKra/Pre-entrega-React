import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ cartCount, cart, children }) => {
  return (
    <>
      <Header cartCount={cartCount} cart={cart} />
      <main className="container py-4">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;