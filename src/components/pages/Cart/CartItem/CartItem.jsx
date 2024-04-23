import SimpleButton from '../../../buttons/SimpleButton/SimpleButton';
import PropTypes from 'prop-types';
import './CartItem-Style.css';

const CartItem = ({ item, onUpdateCart, onRemoveFromCart }) => {
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
                <SimpleButton content="Remover" onClick={() => onRemoveFromCart(item)} />
            </div>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
    }).isRequired,  
    onUpdateCart: PropTypes.func.isRequired,
    onRemoveFromCart: PropTypes.func.isRequired,
};

export default CartItem;