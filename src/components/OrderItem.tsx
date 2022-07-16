import React, {useEffect} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {useAppDispatch} from "../hooks/redux";
import {changeOrderCount, deleteOrder} from "../store/orderSlice"

interface Props {
    id: number
    image: string
    name: string
    price: number
    store: string
    quantity: number
}

const OrderItem = ({image, name, price, store, quantity, id}: Props) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (quantity === 0) dispatch(deleteOrder(id))
    }, [quantity])

    const changeQuantity = (id: number, count: number) => {
        dispatch(changeOrderCount({id, count}))
    }

    return (
        <Grid item xs={12} md={8}>
            <Card sx={{height: '100%', marginBottom: 5}}>
                <CardMedia
                    image={image}
                    component="img"
                    alt={name}
                    sx={{height: 110}}
                />
                <CardContent sx={{}}>
                    <Typography
                        variant="h6"
                        component="h3"
                    >
                        {name}
                    </Typography>
                    <Typography variant="subtitle1">Store: {store} </Typography>
                    <Typography variant="body1">Sum: {price}UAH X {quantity} = {price * quantity} UAH</Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'center'}}>
                    <Button
                        onClick={() => changeQuantity(id, 1)}
                        variant="text"
                        sx={{fontSize: '20px'}}
                    > + </Button>
                    <Typography>{quantity}</Typography>
                    <Button
                        onClick={() => changeQuantity(id, -1)}
                        variant="text"
                        sx={{fontSize: '20px'}}
                    > - </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default OrderItem