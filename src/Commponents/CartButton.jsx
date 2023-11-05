import React from 'react';
import { useDispatch } from 'react-redux';
import { add, remove } from '../Store/CartSlice';
import useIsItemInCart from '../Custom-Hooks/useCheckItem';

function CartButton({ product }) {
  const dispatch = useDispatch();
  const itemCheck = useIsItemInCart(product.id);

  const handleButtonClick = () => {
    if (itemCheck) {
      dispatch(remove(product.id));
    } else {
      dispatch(add(product));
    }
  };

  return (
    <button
      className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onClick={handleButtonClick}
    >
      {itemCheck ? 'Remove from Cart' : 'Add to Cart'}
    </button>
  );
}

export default CartButton;
