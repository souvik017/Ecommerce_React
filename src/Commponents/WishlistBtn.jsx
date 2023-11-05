import React from 'react';
import { useDispatch } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../Store/WhislistSlice';
import useIsInWishlist from '../Custom-Hooks/useCheckWhistlist';

const WishlistButton = ({ product }) => {
  const dispatch = useDispatch();
  const isInWishlist = useIsInWishlist(product.id);

  const handleWishlistClick = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <button 
    className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    onClick={handleWishlistClick}
    >
      {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </button>
  );
};

export default WishlistButton;
