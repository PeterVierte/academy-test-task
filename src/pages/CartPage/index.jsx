import React from 'react';
import {observer} from "mobx-react-lite";
import s from './cartPage.module.scss';
import Store from "../../store";
import CartProductCard from "../../components/Cart/CartProductCard";

const CartPage = () => {
    const {cart} = Store;
    return (
        <div className='container'>
            {cart.length ? (
                <div className={s.cards}>
                    {cart.map(product => <CartProductCard key={product.id} product={product}/>)}
                </div>
            ) : (
                <h1 className={s.title}>Корзина пуста</h1>
            )}
        </div>
    );
};

export default observer(CartPage);