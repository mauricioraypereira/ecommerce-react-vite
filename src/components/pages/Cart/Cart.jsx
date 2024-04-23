import CartItem from './CartItem/CartItem';
import CheckoutButton from '../../buttons/CheckoutButton/CheckoutButton';
import PropTypes from 'prop-types';
import './Cart-Style.css';

const Cart = ({ cartItems, onUpdateCart, onRemoveFromCart, setCartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
    return (
        <div>
            <h1>Carrinho</h1>
            {cartItems.length === 0 
                ? (<p>Não há items no carrinho.</p>)
                : <>
                    {
                        cartItems.map((item) => {
                            return <CartItem key={item.id} item={item} onUpdateCart={onUpdateCart} onRemoveFromCart={onRemoveFromCart} />
                        })
                    }
                    <div className="total-price">
                        <p>Total: $ {totalPrice.toFixed(2)}</p>
                        <CheckoutButton 
                            cartItems={cartItems} 
                            content="Finalizar Compra" 
                            setCartItems={setCartItems}
                            totalPrice={totalPrice}/>
                    </div>
                </>
            }
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          price: PropTypes.number,
          image: PropTypes.string,
      })   
    ).isRequired,
    onUpdateCart: PropTypes.func.isRequired,
    onRemoveFromCart: PropTypes.func.isRequired,
    setCartItems: PropTypes.func.isRequired,
};

export default Cart;