import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import React from 'react';
import StoreIcon from '@mui/icons-material/Store'
import {useSelector} from "react-redux";
import StoreItem from "./StoreItem";
import {getStores} from "../store/selectors/productsSelectors";
import {Link} from "react-router-dom";

interface Props {
    storesOpen: boolean
    closeStores: () => void
}

const Stores = ({storesOpen, closeStores}: Props) => {

    const stores = useSelector(getStores)

    return (
        <Drawer anchor="left" open={storesOpen} onClose={closeStores}>
            <List sx={{width: '300px'}}>
                <ListItem>
                    <ListItemIcon >
                        <StoreIcon />
                    </ListItemIcon>
                    <ListItemText primary="Stores" />
                </ListItem>
                <Divider />
                <ListItem>
                    <Link to='products/' onClick={closeStores} >
                        Show to all stores
                    </Link>
                </ListItem>
                <Divider />
                {stores.map(s => <StoreItem key={s} nameStore={s} closeStores={closeStores} />)}
            </List>
        </Drawer>
    );
};

export default Stores;