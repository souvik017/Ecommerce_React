import React, { useEffect, useState } from 'react';
import CartButton from './CartButton';
import { Link } from 'react-router-dom';
import WishlistButton from './WishlistBtn';


function Products({ 
  link,
  width="w-3/5",
  height="68",
}) {
  const [Product, setProduct] = useState(null);

  useEffect(() => {
    fetch(link)
      .then((response) => response.json())
      .then((response) => setProduct(response));
  }, [link]);

  if (!Product) {
    return <div className=' text-3xl text-center my-80 w-screen h-screen font-bold '>
      <h1>...Loading...</h1></div>;
  }
  return (
    <>
      {Product.map((product) => (
        <div key={product.id}>
          <div className={`mx-auto mt-8 ${width} ${height} p-2 transform flex content-evenly overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg`}>
           <Link to={`/product/${product.id}`} >

            <div className="p-4">
              <img
                className="max-w-xs min-w-0 w-44 p-auto object-contain object-center"
                src={product.image}
                alt={product.title}
              />
            </div>
            </Link>
            <div className="p-4 gap-10">
              <h2 className="mb-2 text-xl font-medium text-gray-900">{product.title}</h2>
              <h2 className="mb-2 text-xs font-medium text-gray-900">{product.description}</h2>
        
              <div className="flex justify-between mt-10">
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold text-gray-900">Price- ${product.price}</p>
                </div>
                </div>
                <div className='gap-4 flex my-4'>
                 <div> <CartButton product={product} /></div>
                 <div><WishlistButton product={product}/></div>
                  
                </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Products;
