import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ProductType} from "../types/ProductType";


const initialState = {
    products: [] as ProductType[],
    stores: [] as string[],
    selectedStore: '' as string | undefined
}

export const productsSlice =createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductType[]>) => {
            state.products = action.payload
        },
        setStores: (state, action: PayloadAction<ProductType[]>) => {
            const storesInProducts = action.payload.map(p => p.nameShop)
            const stores = storesInProducts.filter((store, index) => {
                return storesInProducts.indexOf(store) === index
            })
            state.stores = stores
        },
        setSelectedStore: (state, action: PayloadAction<string | undefined>) => {
            state.selectedStore = action.payload
        }
    }
})

export const {setProducts, setStores, setSelectedStore} = productsSlice.actions

export default productsSlice.reducer