import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {ProductType} from "../types/ProductType";
import { useAppDispatch } from '../hooks/redux';
import { setOrder } from '../store/orderSlice';

interface Props {
    id: number
    poster: string
    price: number
    name: string
    store: string
}

const ProductItem = ({id, poster,price, name, store}: Props) => {

    const dispatch = useAppDispatch()

    const addOrder = (order: ProductType) => {
        dispatch(setOrder(order))
    }

    return (
        <Grid item xs={12} md={4}>
            <Card
                sx={{
                    height: '100%',
                }}
            >
                <CardMedia
                    image={poster}
                    component="img"
                    alt={name}
                    sx={{ height: 140 }}
                />
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h3"
                    >
                        {name}
                    </Typography>
                    <Typography variant="body1">Price: {price} UAH</Typography>
                    <Typography variant="subtitle1">Store: {store} </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="text"
                        onClick={() =>
                            addOrder({
                                id,
                                name,
                                nameShop: store,
                                image: poster,
                                price,
                            })
                        }
                    >
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProductItem