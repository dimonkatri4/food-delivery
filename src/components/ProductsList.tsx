import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import ProductItem from "./ProductItem";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../store/selectors/productsSelectors";
import {useParams} from "react-router-dom";
import { setSelectedStore } from '../store/productsSlice';


const ProductsList = () => {

    let products = useSelector(getProducts)
    const dispatch = useDispatch()
    const {store} = useParams()

    useEffect(() => {
        dispatch(setSelectedStore(store))
    }, [store])

    products = store ? products.filter(p => p.nameShop === store) : products

    return (
        <Grid container spacing={2}>
            {products.map(p => <ProductItem
                key={p.id}
                id={p.id}
                name={p.name}
                poster={p.image}
                price={p.price}
                store={p.nameShop}
            />)}
        </Grid>
    );
};

export default ProductsList;