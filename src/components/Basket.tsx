import React from "react";
import {Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import BasketItem from "./BascketItem";
import {useSelector} from "react-redux";
import {getOrder} from "../store/selectors/orderSelectors";
import {useNavigate} from "react-router-dom";
import {calculateTotal} from "../helpers/totalAmount";

interface Props {
    cartOpen: boolean
    closeCart: () => void
}

const Basket = ({cartOpen, closeCart}: Props) => {

    const order = useSelector(getOrder)
    const navigate = useNavigate()

    const goToOrder = () => {
        navigate('/order')
        closeCart()
    }

    const totalAmount = calculateTotal(order)

    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary="Basket"/>
                </ListItem>
                <Divider/>

                {!order.length ? (
                    <ListItem>Shopping cart is empty!</ListItem>
                ) : (
                    <>
                        {order.map((item) => (
                            <BasketItem key={item.name} {...item} />
                        ))}
                        <Divider/>
                        <ListItem>
                            <Typography sx={{fontWeight: 700}}>
                                Total:{' '}
                                {totalAmount}{' '} UAH
                            </Typography>
                        </ListItem>
                    </>
                )}
            </List>
            <Button
                variant='contained'
                disabled={!order.length}
                onClick={() => goToOrder()}
                sx={{maxWidth: 300, alignSelf:'center'}}
            >
                See Cart
            </Button>
        </Drawer>
    )
}

export default Basket