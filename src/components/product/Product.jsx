import React, { useState } from 'react';

import './Product-Style.css'

import SimpleButton from '../buttons/SimpleButton/SimpleButton'

const Product = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>$ {product.price}</p>
        <div className="cart-buttons">
            <select onChange={(e) => setQuantity(parseInt(e.target.value))}>
                {[...Array(10).keys()].map((x) => {
                   return <option key={x + 1} value={x + 1}>
                        {x + 1}
                    </option>
                })}
            </select>
            <SimpleButton content="Adicionar ao Carrinho" onClick={() => onAddToCart(product, quantity)} />
        </div>
    </div>
  );
};

export default Product;