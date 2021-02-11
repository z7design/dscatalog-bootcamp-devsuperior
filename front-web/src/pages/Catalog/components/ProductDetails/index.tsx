import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../../../core/assets/images/arrow.svg';
import './style.scss';

type ParamsType = {
    productsId: string;
}

const ProductDetails = () => {
    const { productsId } = useParams<ParamsType>();
    console.log(productsId);
    return (
        <div className="product-details-container">
           <div className="card-base border-radius-20 product-datails">
            <Link to="/products" className="products-details-goback">
                <ArrowIcon className="icon-goback" />
                <h1 className="text-goback">Voltar</h1>
            </Link>
           </div>
        </div>
    );
};

export default ProductDetails;