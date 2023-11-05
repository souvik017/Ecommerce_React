const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  cart:[],
  itemQuantities: {},
  totalPrice:0,
};

// Set a default quantity of 1 for each item in itemQuantities
initialState.cart.forEach((item) => {
  initialState.itemQuantities[item.id] = 1;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        const existingItem = state.cart[find];
        state.itemQuantities[action.payload.id] += 1;
        existingItem.quantity += 1;
        state.totalPrice += existingItem.price
      } else {
        state.cart.push(action.payload);
        state.itemQuantities[action.payload.id] = 1; // Set default quantity to 1 for the new item
        state.totalPrice += action.payload.price;
      }
    },
    remove(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      delete state.itemQuantities[action.payload];
        state.totalPrice += action.payload.price;
    },
    increaseItemQuantity(state, action) {
      const { itemId } = action.payload;
      state.itemQuantities[itemId] += 1;
      const existingItem = state.cart.find((item) => item.id === itemId);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += existingItem.price; // Increase total price
      }
    },
    decreaseItemQuantity(state, action) {
      const { itemId } = action.payload;
      state.itemQuantities[itemId] -= 1;
      const existingItem = state.cart.find((item) => item.id === itemId);
      if (existingItem) {
        existingItem.quantity -= 1;
        state.totalPrice -= existingItem.price; // Decrease total price
        if (existingItem.quantity === 0) {
          // If quantity reaches 0, remove the item
          state.cart = state.cart.filter((item) => item.id !== itemId);
          delete state.itemQuantities[itemId];
        }
      }
    },
  
    checkout(state, action){

    }
  },
});

export const { add, remove, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;