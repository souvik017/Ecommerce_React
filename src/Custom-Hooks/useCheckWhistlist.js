import { useSelector } from 'react-redux';

const useIsInWishlist = (itemId) => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  return !! wishlist.find(item => item.id === itemId);
};

export default useIsInWishlist;
