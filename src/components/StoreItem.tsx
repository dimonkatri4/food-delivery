import React from 'react';
import {ListItem} from "@mui/material";
import {Link} from "react-router-dom";

interface Props {
    nameStore: string
    closeStores: () => void
}

const StoreItem = ({nameStore, closeStores}: Props) => {
    return (
        <ListItem>
            <Link to={'products/' + nameStore} onClick={closeStores}>
                {nameStore}
            </Link>
        </ListItem>
    );
};

export default StoreItem;