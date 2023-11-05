import React from 'react';
import { useSelector } from 'react-redux';

function Checkout() {
  const { cart, itemQuantities, totalPrice } = useSelector((state) => state.cart);
  const roundedTotalPrice = Math.round(totalPrice);

  return (
    <div className='text-center'>
      <h2 className='text-6xl '>Checkout</h2>
      {cart.length === 0 ? (
        <p className='text-4xl m-32'>........Please add items to cart........</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
               <h1 className='text-3xl my-12'>{product.title} - Quantity: {itemQuantities[product.id]}</h1>
              </li>
            ))}
          </ul>
          <p className='text-4xl'>Total Price: ${roundedTotalPrice}</p>
          <button className="bg-indigo-500 hover-bg-indigo-700 text-white font-bold py-2 px-4 rounded mx-4 my-12 ">
         Buy Now</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;



