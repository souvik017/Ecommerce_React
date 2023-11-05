import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
import wishlistReducer from "./WhislistSlice";


  
const Store = configureStore({
    reducer: {
        cart:cartReducer,
        wishlist:wishlistReducer,
},
middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default Store;