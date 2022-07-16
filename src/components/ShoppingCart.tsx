import React from 'react';
import {Grid, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {getOrder} from "../store/selectors/orderSelectors";
import OrderItem from "./OrderItem";
import {calculateTotal} from "../helpers/totalAmount";
import InputForm from "./InputForm/InputForm";

const ShoppingCart = () => {

    const order = useSelector(getOrder)

    const totalAmount = calculateTotal(order)

    return (
        <>
            <Typography variant='h3' sx={{textAlign:'center'}}>Your Order:</Typography>
        <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
                <InputForm />
            </Grid>
            <Grid item xs={6} md={6}>
                {order.map(item => <OrderItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    store={item.nameShop}
                    quantity={item.quantity} /> )
                }
                <Typography variant='h4'> Total: {totalAmount} UAH </Typography>
            </Grid>
        </Grid>
            </>
    )
}

export default ShoppingCart