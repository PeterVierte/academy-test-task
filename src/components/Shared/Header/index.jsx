import React from 'react';
import s from './header.module.scss';
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import Store from "../../../store";

const Header = () => {
    const {cartAmount} = Store;
    return (
        <header className={s.header}>
            <Link to='/' className={s.header__link}>Все товары</Link>
            <Link to='/cart' className={s.header__link}>
                Корзина
                {cartAmount > 0 && <span>{cartAmount}</span>}
            </Link>
        </header>
    );
};

export default observer(Header);