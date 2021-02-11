import React from 'react';
import { Link } from 'react-router-dom';
import ProducCard from './components/ProductCard';
import './style.scss';

const Catalog = () => (

    <div className="catalog-container">
        <div className="catalog-title">
        <h1>Catalogo de produtos</h1>
        </div>
        <div className="catalog-products">
            <Link to="/products/1"><ProducCard /></Link>
            <Link to="/products/2"><ProducCard /></Link>
            <Link to="/products/3"><ProducCard /></Link>
            <Link to="/products/4"><ProducCard /></Link>
            <Link to="/products/5"><ProducCard /></Link>
            <Link to="/products/6"><ProducCard /></Link>
        </div>
    </div>

);

export default Catalog;