import React from 'react'

import './CartItem-Style.css'

import SimpleButton from '../../../buttons/SimpleButton/SimpleButton'

const CartItem = ({item, onUpdateCart, onRemoveFromCart}) => {
  return (
    <div className='cart-item'>
        <h3>{item.name}</h3>
        <p>$ {item.price}</p>
        <div className="cart-buttons">
            <input 
                type="text"
                value={item.quantity}
                onChange={(e) => onUpdateCart(item, parseInt(e.target.value))}
            />
            <SimpleButton content="Remover" onClick={(e) => onRemoveFromCart(item)} />
        </div>
    </div>
  );
};

export default CartItem;