import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseItemQuantity, remove, decreaseItemQuantity } from "../Store/CartSlice";
import CheckoutButton from '../Commponents/checkoutBtn'; // Corrected the import path

function Cart() {
  const { cart, itemQuantities } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mx-4 md:mx-28 px-4 py-8"> 
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div><h1 className="text-2xl font-bold my-4">My Cart</h1></div>
        <div><CheckoutButton /></div>
      </div>
      {cart.length === 0 ? (
        <p className='text-4xl m-32 text-center'>Please add items to cart</p>
      ) : (
        <ul> 
          {cart.map((product) => ( // Removed "index" from the map function
            <li className='list-none' key={product.id}> {/* Changed "index" to "product.id" as the key */}
              <div className="mt-8">
                <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
                  <div className="flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <h2 className="text-lg font-bold">{product.title}</h2>
                    <p className="mt-2 text-gray-600">{product.description}</p>
                    <div className="mt-4 flex items-center">
                      <span className="mr-2 text-gray-600">Quantity:</span>
                      <div className="flex items-center">
                        <button className="bg-gray-200 rounded-l-lg px-2 py-1" onClick={() => { dispatch(decreaseItemQuantity({ itemId: product.id, amount: 1 })) }}>
                          -
                        </button>
                        <span className="mx-2 text-gray-600">{itemQuantities[product.id] || 1}</span>
                        <button className="bg-gray-200 rounded-r-lg px-2 py-1" onClick={() => { dispatch(increaseItemQuantity({ itemId: product.id, amount: 1 })) }}>
                          +
                        </button>
                      </div>
                      <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 ml-4 rounded mx-4" onClick={() => { dispatch(remove(product.id)) }}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
