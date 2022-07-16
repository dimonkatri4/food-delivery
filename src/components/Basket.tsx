import React from "react";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import BasketItem from "./BascketItem";
import {useSelector} from "react-redux";
import {getOrder} from "../store/selectors/orderSelectors";

interface Props {
    cartOpen: boolean
    closeCart: () => void
}

const Basket = ({cartOpen, closeCart}: Props) => {

    const order = useSelector(getOrder)

    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary="Basket" />
                </ListItem>
                <Divider />

                {!order.length ? (
                    <ListItem>Shopping cart is empty!</ListItem>
                ) : (
                    <>
                        {order.map((item) => (
                            <BasketItem key={item.name} {...item} />
                        ))}
                        <Divider />
                        <ListItem>
                            <Typography sx={{fontWeight: 700}}>
                                Total:{' '}
                                {order.reduce((acc, item) => {
                                    return acc + item.price * item.quantity;
                                }, 0)}{' '} UAH
                            </Typography>
                        </ListItem>
                    </>
                )}

            </List>
        </Drawer>
    )
}

export default Basket