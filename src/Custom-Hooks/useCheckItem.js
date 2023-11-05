import { useSelector } from 'react-redux';

const useIsItemInCart = (itemId) => {
    const cart = useSelector((state) => state.cart.cart);
    return !!cart.find(item => item.id === itemId);
  };

export default useIsItemInCart;
