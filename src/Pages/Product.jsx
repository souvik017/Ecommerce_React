import React, { useState } from 'react';
import Products from '../Commponents/ProductCard';
import FilterComponent from '../Commponents/Filter';

function Product() {
  const [filter, setFilter] = useState('https://fakestoreapi.com/products');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <FilterComponent filter={filter} onFilterChange={handleFilterChange} />
      <Products link={filter} />
    </div>
  );
}



export default Product;

