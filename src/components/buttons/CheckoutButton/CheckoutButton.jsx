import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import './CheckoutButton-Style.css';

const CheckoutButton = ({ cartItems, setCartItems, content, totalPrice }) => {
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
};

CheckoutButton.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.number,
            image: PropTypes.string,
        })   
    ).isRequired,
    setCartItems: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
};

export default CheckoutButton;