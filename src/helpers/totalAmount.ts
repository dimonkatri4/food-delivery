import {OrderType} from "../types/OrderType";

export const calculateTotal = (order: OrderType[]) => {
    return order.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0)
}