import React from 'react';
import s from './cartProductCard.module.scss';
import Store from "../../../store";

const CartProductCard = ({product}) => {
    const {removeProductFromCart} = Store;
    return (
        <div className={s.card}>
            <div className={`adaptive-img ${s.imgWrapper}`}>
                <img src={product.image} alt=""/>
            </div>
            <div className={s.product__info}>
                <div className={s.product__name}>{product.name}</div>
                <div className={s.info__item}><span>Цвет: </span>{product.color}</div>
                <div className={s.info__item}><span>Размер: </span>{product.size}</div>
                <div className={s.info__item}><span>Цена: </span>{product.price} Р</div>
                <div className={s.btn} onClick={() => removeProductFromCart(product)}>Удалить</div>
            </div>
        </div>
    );
};

export default CartProductCard;