import React from 'react';
import s from './productCard.module.scss';
import {Link} from "react-router-dom";

const ProductCard = ({product}) => {
    return (
        <Link to={`/product/${product.id}`} className={s.card}>
            <div className={`adaptive-img ${s.imgWrapper}`}>
                <img src={product.colors[0].images[0]} alt=""/>
            </div>
            <div className={s.product__name}>
                {product.name}
            </div>
        </Link>
    );
};

export default ProductCard;