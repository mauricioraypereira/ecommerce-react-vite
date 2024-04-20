import React from 'react'

import './CheckoutButton-Style.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';

const CheckoutButton = ({cartItems, setCartItems, content, totalPrice }) => {
  
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length > 0) {
        toast.success('Compra finalizada com sucesso!');
        
        navigate("/thank-you", { state: { cartItems, totalPrice } });
        
        setCartItems([]);
    } else {
        toast.error('Seu carrinho está vazio.')
    }
};

  return (
    <button onClick={handleCheckout}>
        {content}
    </button>
  )
}

export default CheckoutButton