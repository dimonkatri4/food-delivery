import React from "react";
import {AppBar, Badge, IconButton, Toolbar, Typography} from "@mui/material"
import { ShoppingBasket } from "@mui/icons-material"
import StoreIcon from '@mui/icons-material/Store'
import {useSelector} from "react-redux";
import {getSelectedStores} from "../store/selectors/productsSelectors";

interface Props {
    handleStores: () => void
}

function Header({handleStores}: Props) {

    const selectedStore = useSelector(getSelectedStores)

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
                <IconButton color="inherit">
                    <Badge color="secondary" >
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header