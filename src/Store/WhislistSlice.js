import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const newItem = action.payload;
      
      if (!state.wishlist.some(item => item.id === newItem.id)) {
        state.wishlist.push(newItem);
      }
    },
    removeFromWishlist(state, action) {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload.id);
    },
  },
}
);

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
