import React, {useEffect} from "react";
import {AppBar, Badge, IconButton, Toolbar, Typography} from "@mui/material"
import { ShoppingBasket } from "@mui/icons-material"
import StoreIcon from '@mui/icons-material/Store'
import {useSelector} from "react-redux";
import {getSelectedStores} from "../store/selectors/productsSelectors";
import {getOrder} from "../store/selectors/orderSelectors";

interface Props {
    handleStores: () => void
    handleCart: () => void
}

function Header({handleStores, handleCart}: Props) {

    const selectedStore = useSelector(getSelectedStores)
    const order = useSelector(getOrder)

    const quantityOrder = order.reduce((acc, item) => {
        return acc + item.quantity
    }, 0)


    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton onClick={handleStores}>
                    <StoreIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{flexGrow: 1}}
                >
                    {selectedStore ? selectedStore : 'All stores'}
                </Typography>
                <IconButton color="inherit" onClick={handleCart}>
                    <Badge color="secondary" badgeContent={quantityOrder} >
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header