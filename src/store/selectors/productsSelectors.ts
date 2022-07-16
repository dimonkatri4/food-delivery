import {RootState} from "../store";

export const getProducts = (state: RootState) => state.products.products
export const getStores = (state: RootState) => state.products.stores
export const getSelectedStores = (state: RootState) => state.products.selectedStore