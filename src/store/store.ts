import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./productsSlice"
import orderReducer from "./orderSlice"


export const store = configureStore({
    reducer: {
        products: productsReducer,
        order: orderReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch