import Product from "../../product/Product";
import productsData from "../../../data/products_mock.json";
import PropTypes from 'prop-types';
import "./Catalog-Style.css";

const Catalog = ({ onAddToCart }) => {
    return (
        <div>
            <h1>Catálogo de Produtos</h1>
            
            <div className="products-container">
                { productsData.map((product) => {
                    return <Product key={product.id} product={product} onAddToCart={onAddToCart}/>
                })}
            </div>
        </div>
    );
};

Catalog.propTypes = {
    onAddToCart: PropTypes.func.isRequired,
};

export default Catalog;