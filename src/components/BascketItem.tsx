import React from "react";
import { IconButton, ListItem, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import {useAppDispatch} from "../hooks/redux";
import {deleteOrder} from "../store/orderSlice"

interface Props {
    id: number
    name: string
    price: number
    quantity: number
}

const BasketItem = ({ id, name, price, quantity}: Props) => {

    const dispatch = useAppDispatch()

    const removeFromOrder = (id: number) => {
        dispatch(deleteOrder(id))
    }

    return (
        <ListItem>
            <Typography
                variant="body1"
            >
                {name} {price} UAH x{quantity}
            </Typography>
            <IconButton
                onClick={() => removeFromOrder(id)}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;