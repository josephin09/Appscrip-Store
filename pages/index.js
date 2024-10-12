import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import FilterMenu from '../components/FilterMenu';
import SortDropdown from '../components/SortDropdown';

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Discover Our Products</h1>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur.<br></br> 
          Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
        <div className="main-content">
          <div className="filter-section">
            <FilterMenu /> 
          </div>
          <div>
            <div className="sort-dropdown-wrapper">
              <SortDropdown />
            </div>
            <ProductList products={products} /> 
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
