import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';

import './Navbar-Style.css'

import Cart from '../pages/Cart/Cart'
import Catalog from '../pages/Catalog/Catalog'
import ThankYouPage from '../pages/ThankYouPage/ThankYouPage'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const [cartItems, setCartItems] = useState([])

    const handleAddCart = (product, quantity) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find((item) => item.id === product.id);

            if (itemExists) {
                toast.info(`Quantidade do item ${product.name} atualizada!`);
                return prevItems.map((item) => item.id === product.id ? {...item, quantity: item.quantity + quantity} : item)
            } else {
                toast.success(`${product.name} adicionado com sucesso!`);
                return [...prevItems, {...product, quantity}];
            }

        })
    };

    const handleUpdateCart = (product, quantity) => {
        toast.info(`Quantidade do item ${product.name} atualizada!`);
        setCartItems((prevItems) => {
            return prevItems.map((item) => item.id === product.id ? { ...item, quantity: +quantity } : item);
        })
    };
    
    const handleRemoveFromCart = (product) => {
        toast.info(`${product.name} foi removido com sucesso!`);
        setCartItems((prevItems) =>  prevItems.filter((item) => item.id !== product.id));
    };

    return (
        <BrowserRouter>
        <nav>
            <Link to="/">Catálogo</Link>
            <Link to="/cart">Carrinho</Link>
        </nav>
        <div className="container">
            <Routes>
            <Route 
                path="/" 
                element={<Catalog onAddToCart={handleAddCart} />}></Route>
            <Route 
                path="/cart" 
                element={
                    <Cart 
                        cartItems={cartItems} 
                        onUpdateCart={handleUpdateCart} 
                        onRemoveFromCart={handleRemoveFromCart}
                        setCartItems={setCartItems}
                    />}>
            </Route>
            <Route 
                path="/thank-you" 
                element={<ThankYouPage />}></Route>
            </Routes>
        </div>
        <ToastContainer 
            position='top-center'
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
        />
        </BrowserRouter>
    );
};

export default Navbar;