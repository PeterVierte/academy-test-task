import React, {useEffect, useState} from 'react';
import {getProduct, getSizes} from "../../services/api";
import {useParams} from "react-router-dom";
import Slider from "../../components/Slider";
import Loader from "../../components/Shared/Loader";
import s from './productPage.module.scss';
import ProductDescription from "../../components/Product/ProductDescription";

const ProductPage = () => {
    const [product, setProduct] = useState({});
    const [sizes, setSizes] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {id} = useParams();

    const getAllImages = () => {
        return (product?.colors || []).map(item => item.images).flat();
    }

    useEffect(() => {
        const getProductInfo = async () => {
            try {
                const [product, sizes] = await Promise.all([getProduct(id), getSizes()]);

                setSizes(sizes)
                setProduct(product);
            } catch (e) {
                console.log('Error: ', e);
            }finally {
                setIsLoading(false);
            }
        }

        getProductInfo();

    }, []);

    if(isLoading) {
        return <Loader/>
    }

    console.log(product)

    return (
        <div className='container'>
             <div className={s.product}>
                 <Slider data={getAllImages()}/>
                 <div className={s.description}>
                     <ProductDescription productId={id} sizes={sizes} name={product.name} colors={product.colors}/>
                 </div>
             </div>
        </div>
    );
};

export default ProductPage;