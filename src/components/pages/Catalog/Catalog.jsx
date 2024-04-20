import React from 'react';

import { useEffect, useState } from "react"

import "./Catalog-Style.css"

import productsData from "../../../data/products_mock.json";
import Product from "../../product/Product";

const Catalog = ({ onAddToCart }) => {
  return (
    <div>
        <h1>Catálogo de Produtos</h1>
        
        <div className="products-container">
            { productsData.map((p) => {
               return <Product key={p.id} product={p} onAddToCart={onAddToCart}/>
            })}
        </div>
    </div>
  );
};

export default Catalog;