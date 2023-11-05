import React from 'react'

function FilterComponent({ filter, onFilterChange }) {
    const handleFilterClick = (newFilter) => {
      onFilterChange(newFilter);
    };
  
    return (
      <div className='flex gap-4 mx-96 my-2'>
        <button
          onClick={() => handleFilterClick('https://fakestoreapi.com/products')}
          className={`px-4 py-2 ${filter === 'https://fakestoreapi.com/products' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} rounded-lg mr-2`}
        >
          All Products
        </button>
        <button
          onClick={() => handleFilterClick('https://fakestoreapi.com/products/category/electronics')}
          className={`px-4 py-2 ${filter === 'https://fakestoreapi.com/products/category/electronics' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} rounded-lg mr-2`}
        >
          Electronics
        </button>
        <button
          onClick={() => handleFilterClick('https://fakestoreapi.com/products/category/jewelery')}
          className={`px-4 py-2 ${filter === 'https://fakestoreapi.com/products/category/jewelery' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} rounded-lg`}
        >
          Jewelry
        </button>
        <button
          onClick={() => handleFilterClick("https://fakestoreapi.com/products/category/men's%20clothing")}
          className={`px-4 py-2 ${filter === "https://fakestoreapi.com/products/category/men's%20clothing" ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} rounded-lg`}
        >
          Men's Clothing
        </button>
        <button
          onClick={() => handleFilterClick("https://fakestoreapi.com/products/category/women's%20clothing")}
          className={`px-4 py-2 ${filter === "https://fakestoreapi.com/products/category/women's%20clothing" ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} rounded-lg`}
        >
        Women's Clothing
        </button>
        
      </div>
    );
  }

export default FilterComponent
