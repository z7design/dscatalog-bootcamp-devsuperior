import React from 'react';
import ProducCard from './components/ProductCard';
import './style.scss';

const Catalog = () => (

    <div className="catalog-container">
        <div className="catalog-title">
        <h1>Catalogo de produtos</h1>
        </div>
        <div className="catalog-products">
            <ProducCard />
            <ProducCard />
            <ProducCard />
            <ProducCard />
            <ProducCard />
            <ProducCard />
        </div>
    </div>

);

export default Catalog;