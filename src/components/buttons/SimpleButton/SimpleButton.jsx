import PropTypes from 'prop-types';
import './SimpleButton-Style.css';

const SimpleButton = ({ content, onClick }) => {
    return (
        <button onClick={onClick}>
            {content}
        </button>
    )
};

SimpleButton.propTypes = {
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default SimpleButton;