import React, { useEffect, useState } from 'react'
import '../App.css'
import Header from './Header'
import { Container } from '@mui/material'
import ProductsList from './ProductsList'
import Stores from './Stores'
import { useDispatch } from 'react-redux'
import { setProducts, setStores } from '../store/productsSlice'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { products } from '../mocks/mockProducts'
import Basket from './Basket'
import ShoppingCart from './ShoppingCart'

function App() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        location.pathname === '/' && navigate('/products')
    })

    useEffect(() => {
        dispatch(setProducts(products))
        dispatch(setStores(products))
    }, [])

    const [isStoresOpen, setIsStoresOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    return (
        <>
            <Header
                handleStores={() => setIsStoresOpen(true)}
                handleCart={() => setIsCartOpen(true)}
            />
            <Stores storesOpen={isStoresOpen} closeStores={() => setIsStoresOpen(false)} />
            <Container sx={{ mt: '1rem' }}>
                <Routes>
                    <Route path="/products" element={<ProductsList />}>
                        <Route path=":store" element={<ProductsList />} />
                    </Route>
                    <Route path="/order" element={<ShoppingCart />} />
                </Routes>
            </Container>
            <Basket cartOpen={isCartOpen} closeCart={() => setIsCartOpen(false)} />
        </>
    )
}

export default App
