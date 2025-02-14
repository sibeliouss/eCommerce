import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterSlice";
import { cartSlice } from "../features/cart/CartSlice";
import { catalogSlice } from "../features/catalog/catalogSlice";

export const store= configureStore({
    reducer:{
        counter: counterSlice.reducer,
        cart: cartSlice.reducer,
        catalog: catalogSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch