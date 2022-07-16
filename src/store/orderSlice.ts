import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductType} from "../types/ProductType";
import {OrderType} from "../types/OrderType";


const initialState = {
    order: [] as OrderType[]
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrder: (state, action: PayloadAction<ProductType>) => {
            let quantity = 1

            const indexInOrder = state.order.findIndex(
                (item) => item.id === action.payload.id
            )

            if (indexInOrder > -1) {
                quantity = state.order[indexInOrder].quantity + 1

                state.order = state.order.map((item) => {
                    if (item.id !== action.payload.id) return item

                    return {
                        id: item.id,
                        name: item.name,
                        nameShop: item.nameShop,
                        image: item.image,
                        price: item.price,
                        quantity,
                    }
                })
            } else {
                state.order = [
                    ...state.order,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        nameShop: action.payload.nameShop,
                        image: action.payload.image,
                        price: action.payload.price,
                        quantity,
                    },
                ]
            }
        },
        deleteOrder: (state, action: PayloadAction<number>) => {
            state.order = state.order.filter((item) => item.id !== action.payload)
        }
    }
})

export const {setOrder, deleteOrder} = orderSlice.actions

export default orderSlice.reducer