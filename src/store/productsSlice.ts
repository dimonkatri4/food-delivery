import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ProductType} from "../types/ProductType";


const initialState = {
    products: [] as ProductType[]
}

export const productsSlice =createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductType[]>) => {
            state.products = action.payload
        }
    }
})

export const {setProducts} = productsSlice.actions

export default productsSlice.reducer