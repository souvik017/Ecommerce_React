import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../Store/WhislistSlice';

function Wishlist() {
  const list = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();
  return (
    <div className="container mx-28 px-4 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div><h1 className="text-2xl font-bold my-4">Wishlist</h1></div>
      </div>
      {list.length === 0 ? (
        <div className='pb-72 text-center'>
        <p className='text-4xl m-32 text-center font-bold'>........Please add items to Wishlist.......</p>
        </div>
      ) : (
        <ul> 
      {list.map((product, index) => (
        <li className='list-none' key={index}>
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
                <button className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 my-8 rounded'
                 onClick={()=>{dispatch(removeFromWishlist(product))}} >
                Remove
                </button>
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

export default Wishlist;
