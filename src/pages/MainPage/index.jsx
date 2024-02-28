import React, {useEffect, useState} from 'react';
import {getProducts} from "../../services/api";
import ProductCard from "../../components/Product/ProductCard";
import s from './mainPage.module.scss';
import Loader from "../../components/Shared/Loader";

const MainPage = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProductsInfo = async () => {
            try{
                const products = await getProducts();
                setProducts(products);
            }catch (e) {
                console.log('Error: ', e);
            }
            finally {
                setIsLoading(false);
            }
        };

        getProductsInfo();
    }, []);

    if(isLoading) {
        return <Loader/>
    }

    return (
        <div className='container'>
            <div className={s.cards}>
                {products.map(item => {
                    return <ProductCard product={item} key={item.id}/>
                })}
            </div>
        </div>
    );
};

export default MainPage;