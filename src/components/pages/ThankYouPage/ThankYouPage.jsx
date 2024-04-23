import { useNavigate, useLocation } from 'react-router-dom';
import SimpleButton from '../../buttons/SimpleButton/SimpleButton';

const ThankYouPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const items = location.state.cartItems;
    const totalPriceItems = location.state.totalPrice;

    return (
        <div>
            <ul>
                {items.map((item) => {
                    return <li key={item.id}>
                        {item.name} - {item.quantity} x $ {item.price} = $ {(item.quantity * item.price).toFixed(2)}
                    </li>
                })}
            </ul>
            <p>Total: $ {totalPriceItems}</p>
            <SimpleButton content="Voltar ao Catálogo" onClick={() => navigate("/")}></SimpleButton>
        </div>
    )
};

export default ThankYouPage;